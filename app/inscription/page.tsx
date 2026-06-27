'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, AlertCircle, ArrowLeft, Check, Mail, Loader2 } from 'lucide-react';
import Link from 'next/link';
import InscriptionForm from '@/components/forms/InscriptionForm';
import RenseignementForm from '@/components/forms/RenseignementForm';
import ConsentementForm from '@/components/forms/ConsentementForm';

// Définition des types pour les données de formulaire
interface FormData {
  inscription: Record<string, unknown>;
  renseignements: Record<string, unknown>;
  consentement: Record<string, unknown>;
}

function validateFormComplete(data: FormData): string | null {
  const ins = data.inscription as Record<string, unknown>;
  if (!ins.nom || !ins.prenom || !ins.email || !ins.telephone) {
    return "Complétez l'étape « Formulaire d'inscription » puis cliquez sur « Continuer ».";
  }
  const ren = data.renseignements as Record<string, unknown>;
  if (!ren.situationFamiliale || !ren.profession) {
    return "Complétez la « Fiche de Renseignements » puis cliquez sur « Continuer ».";
  }
  const con = data.consentement as Record<string, unknown>;
  if (Object.keys(con).length === 0 || con.accepteReglement !== true) {
    return "Complétez la « Décharge de Consentement », acceptez le règlement intérieur et signez.";
  }
  return null;
}

export default function InscriptionPage() {
  const router = useRouter();
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

  const submitInscription = async (data: FormData) => {
    setSubmitError(null);
    const validationError = validateFormComplete(data);
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
          inscription: data.inscription,
          renseignements: data.renseignements,
          consentement: data.consentement,
        }),
      });
      const payload = (await res.json().catch(() => ({}))) as {
        error?: string
        ok?: boolean
        setupToken?: string
      };
      if (!res.ok) {
        setSubmitError(payload.error || "L'enregistrement a échoué. Réessayez plus tard.");
        return;
      }
      if (payload.setupToken) {
        router.push(`/inscription/compte?token=${encodeURIComponent(payload.setupToken)}`);
        return;
      }
      router.push('/inscription/compte');
    } catch {
      setSubmitError('Erreur réseau. Vérifiez votre connexion et réessayez.');
    } finally {
      setSubmitting(false);
    }
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
          onSubmit={(data) => {
            handleFormSubmit('inscription', data);
            setSubmitError(null);
            setCurrentStep(1);
          }}
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
          onSubmit={(data) => {
            handleFormSubmit('renseignements', data);
            setSubmitError(null);
            setCurrentStep(2);
          }}
        />
      )
    },
    {
      id: 'consentement',
      title: "Décharge de Consentement",
      description: "Engagement et acceptation du règlement intérieur",
      component: (
        <ConsentementForm
          hideSubmitButton
          prefillFromInscription={formData.inscription}
          onSubmit={async (data) => {
            handleFormSubmit('consentement', data);
            await submitInscription({
              ...formData,
              consentement: data,
            });
          }}
        />
      )
    }
  ];

  const isFormComplete = (formId: keyof FormData) => {
    return Object.keys(formData[formId] || {}).length > 0;
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };


  return (
    <main className="min-h-screen bg-background py-4 sm:py-5">
      <div className="max-w-3xl mx-auto px-3 sm:px-4">
        <div className="text-center mb-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 leading-tight">
            Inscription aux Formations
          </h1>
          <p className="text-xs sm:text-sm text-foreground/75 max-w-md mx-auto">
            Remplissez les 3 étapes puis envoyez votre inscription
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-4">
          <div className="flex items-center justify-between relative px-0.5">
            {forms.map((form, index) => (
              <div key={form.id} className="flex flex-col items-center z-10 max-w-[32%]">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs ${
                    currentStep >= index
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {isFormComplete(form.id) ? (
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className="text-[9px] sm:text-[10px] leading-tight mt-1 text-center px-0.5 line-clamp-2">
                  {form.title.replace("Formulaire d'", '').replace('Fiche de ', '').replace('Décharge de ', '')}
                </span>
              </div>
            ))}
            <div className="absolute top-3.5 sm:top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{
                  width: `${(currentStep / (forms.length - 1)) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-card rounded-lg border shadow-sm p-3 sm:p-4">
          {submitError ? (
            <div
              className="mb-2 rounded-md border border-destructive/50 bg-destructive/10 px-2.5 py-2 text-xs text-destructive"
              role="alert"
            >
              {submitError}
            </div>
          ) : null}
          <div className="mb-3">
            <h2 className="text-base sm:text-lg font-bold text-foreground mb-0.5">
              {forms[currentStep].title}
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70">
              {forms[currentStep].description}
            </p>
          </div>

          <div className="mb-3">{forms[currentStep].component}</div>

          <div
            className={`flex pt-3 border-t border-gray-200 ${
              currentStep < forms.length - 1 ? 'justify-start' : 'justify-between'
            }`}
          >
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`inline-flex items-center px-2.5 py-1.5 text-xs sm:text-sm rounded-md ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 hover:bg-gray-200 text-foreground'
              } transition-colors`}
              type="button"
            >
              <ArrowLeft className="h-3.5 w-3.5 mr-1" />
              Précédent
            </button>

            {currentStep === forms.length - 1 ? (
              <button
                type="submit"
                form="consentement-form"
                disabled={submitting}
                className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors disabled:opacity-50"
              >
                {submitting ? (
                  <Loader2 className="h-3.5 w-3.5 mr-1 animate-spin" />
                ) : (
                  <Check className="h-3.5 w-3.5 mr-1" />
                )}
                <span>{submitting ? 'Envoi en cours…' : 'Envoyer mon inscription'}</span>
              </button>
            ) : null}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-3 p-2.5 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm font-medium text-foreground">Besoin d&apos;aide ?</h3>
            <p className="text-[0.65rem] sm:text-xs text-foreground/70 mt-0.5 leading-relaxed">
              Contactez-nous :{' '}
              <Link
                href="mailto:contact@missionagape.org"
                className="inline-flex items-center text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-3 h-3 mr-0.5 shrink-0" />
                contact@missionagape-tg.com
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-4 bg-primary/5 p-3 sm:p-4 rounded-lg text-center">
          <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">Notre Mission</h3>
          <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
            La Mission Agapé Togo apporter l&apos;espoir et le soutien aux communautés à travers
            l&apos;éducation, la formation et l&apos;accompagnement spirituel.
          </p>
        </div>
      </div>
    </main>
  );
}
