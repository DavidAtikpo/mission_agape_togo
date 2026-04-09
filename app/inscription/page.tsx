'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, ArrowLeft, ArrowRight, Check, Mail, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import InscriptionForm from '@/components/forms/InscriptionForm';
import RenseignementForm from '@/components/forms/RenseignementForm';
import ConsentementForm from '@/components/forms/ConsentementForm';
import TeamMember from '@/components/TeamMember';

// Définition des types pour les données de formulaire
interface FormData {
  inscription: Record<string, unknown>;
  renseignements: Record<string, unknown>;
  consentement: Record<string, unknown>;
}

function validateFormComplete(data: FormData): string | null {
  const ins = data.inscription as Record<string, unknown>;
  if (!ins.nom || !ins.prenom || !ins.email || !ins.telephone) {
    return "Complétez l'étape « Formulaire d'inscription » et cliquez sur « Enregistrer et continuer ».";
  }
  const ren = data.renseignements as Record<string, unknown>;
  if (!ren.situationFamiliale || !ren.profession) {
    return "Complétez la « Fiche de Renseignements » et cliquez sur le bouton d'enregistrement de l'étape.";
  }
  const con = data.consentement as Record<string, unknown>;
  if (Object.keys(con).length === 0 || con.accepteReglement !== true) {
    return "Complétez la « Décharge de Consentement » et acceptez le règlement intérieur.";
  }
  return null;
}

export default function InscriptionPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    inscription: {},
    renseignements: {},
    consentement: {}
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleFormSubmit = (formId: keyof FormData, data: Record<string, unknown>) => {
    setFormData(prev => ({
      ...prev,
      [formId]: { ...prev[formId], ...data }
    }));
  };

  type FormType = {
    id: 'inscription' | 'renseignements' | 'consentement';
    title: string;
    description: string;
    component: React.ReactNode;
  };

  const forms: FormType[] = [
    {
      id: 'inscription',
      title: "Formulaire d'Inscription",
      description: "Remplissez vos informations personnelles et la formation souhaitée",
      component: (
        <InscriptionForm
          initialData={formData.inscription as Record<string, string>}
          onSubmit={(data) => handleFormSubmit('inscription', data)}
        />
      )
    },
    {
      id: 'renseignements',
      title: "Fiche de Renseignements",
      description: "Informations personnelles, professionnelles et spirituelles détaillées",
      component: (
        <RenseignementForm
          initialData={formData.renseignements as Record<string, string>}
          onSubmit={(data) => handleFormSubmit('renseignements', data)}
        />
      )
    },
    {
      id: 'consentement',
      title: "Décharge de Consentement",
      description: "Engagement et acceptation du règlement intérieur",
      component: (
        <ConsentementForm
          prefillFromInscription={formData.inscription}
          onSubmit={(data) => handleFormSubmit('consentement', data)}
        />
      )
    }
  ];

  const isFormComplete = (formId: keyof FormData) => {
    return Object.keys(formData[formId] || {}).length > 0;
  };

  const handleNext = async () => {
    setSubmitError(null);
    if (currentStep < forms.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    const validationError = validateFormComplete(formData);
    if (validationError) {
      setSubmitError(validationError);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/inscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inscription: formData.inscription,
          renseignements: formData.renseignements,
          consentement: formData.consentement,
        }),
      });
      const payload = (await res.json().catch(() => ({}))) as { error?: string; ok?: boolean };
      if (!res.ok) {
        setSubmitError(payload.error || "L'enregistrement a échoué. Réessayez plus tard.");
        return;
      }
      alert('Votre inscription a été enregistrée avec succès. Nous vous contacterons bientôt.');
      setFormData({ inscription: {}, renseignements: {}, consentement: {} });
      setCurrentStep(0);
    } catch {
      setSubmitError('Erreur réseau. Vérifiez votre connexion et réessayez.');
    } finally {
      setSubmitting(false);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };


  return (
    <main className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Inscription aux Formations
          </h1>
          <p className="text-xl text-foreground/80">
            Veuillez remplir tous les formulaires requis pour finaliser votre inscription
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {forms.map((form, index) => (
              <div key={form.id} className="flex flex-col items-center z-10">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    currentStep >= index 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {isFormComplete(form.id) ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className="text-sm mt-2 text-center">{form.title}</span>
              </div>
            ))}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{
                  width: `${(currentStep / (forms.length - 1)) * 100}%`
                }}
              />
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-card rounded-xl shadow-lg p-6 md:p-8">
          {submitError ? (
            <div
              className="mb-4 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              role="alert"
            >
              {submitError}
            </div>
          ) : null}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {forms[currentStep].title}
            </h2>
            <p className="text-foreground/70">
              {forms[currentStep].description}
            </p>
          </div>

          {/* Formulaire actif */}
          <div className="mb-6">
            {forms[currentStep].component}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`inline-flex items-center px-4 py-2 rounded-md ${
                currentStep === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 hover:bg-gray-200 text-foreground'
              } transition-colors`}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Précédent
            </button>
            
            {currentStep < forms.length - 1 ? (
              <button
                onClick={() => void handleNext()}
                disabled={submitting}
                className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors touch-manipulation active:scale-95 disabled:opacity-50"
                type="button"
              >
                <span className="text-base">Suivant</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            ) : (
              <button
                onClick={() => void handleNext()}
                disabled={submitting}
                className="inline-flex items-center px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors touch-manipulation active:scale-95 disabled:opacity-50"
                type="button"
              >
                {submitting ? (
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                ) : (
                  <Check className="h-5 w-5 mr-2" />
                )}
                <span className="text-base">
                  {submitting ? 'Enregistrement…' : "Finaliser l'inscription"}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-foreground">Besoin d'aide ?</h3>
            <p className="text-sm text-foreground/70 mt-1">
              Si vous rencontrez des difficultés pour remplir les formulaires, 
              n'hésitez pas à nous contacter à l'adresse 
              <Link 
                href="mailto:contact@missionagape.org" 
                className="inline-flex items-center text-primary hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-4 h-4 mr-1" />
                contact@missionagape.org
              </Link>
            </p>
          </div>
        </div>

        {/* Section À propos */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Notre Équipe</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Découvrez les personnes dévouées qui font vivre la Mission Agapé Togo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-12">
            <TeamMember
              name="Le Directeur"
              role="Directeur de la Mission"
              imageSrc="/images/WhatsApp Image 2025-12-25 at 12.43.40.jpeg"
            />
            <TeamMember
              name="La Directrice"
              role="Directrice Adjointe"
              imageSrc="/images/WhatsApp Image 2025-12-25 at 13.23.49.jpeg"
              className="md:mt-8"
            />
            <TeamMember
              name="Le Conseiller"
              role="Conseiller Spirituel"
              imageSrc="/images/WhatsApp Image 2025-12-25 at 12.43.40 (1).jpeg"
            />
          </div>

          <div className="mt-16 bg-primary/5 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Notre Mission</h3>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              La Mission Agapé Togo s'engage à apporter l'espoir et le soutien aux communautés à travers l'éducation, 
              la formation et l'accompagnement spirituel. Notre équipe dévouée travaille sans relâche pour faire une différence 
              dans la vie des personnes les plus vulnérables.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
