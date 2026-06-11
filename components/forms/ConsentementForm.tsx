'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ConsentementFormData {
  nomComplet: string;
  dateNaissance: string;
  lieuNaissance: string;
  adresse: string;
  telephone: string;
  email: string;
  responsableLegal: string;
  telephoneResponsable: string;
  accepteReglement: boolean;
  autoriseUtilisationImage: boolean;
  date: string;
  signature: string;
  [key: string]: string | boolean;
}

interface ConsentementFormProps {
  onSubmit: (data: ConsentementFormData) => void | Promise<void>;
  /** Champs repris du formulaire d’inscription (évite de resaisir identité / coordonnées) */
  prefillFromInscription?: Record<string, unknown>;
  formId?: string;
  hideSubmitButton?: boolean;
}

function buildConsentPrefill(ins: Record<string, unknown> | undefined): Partial<{
  nomComplet: string;
  dateNaissance: string;
  lieuNaissance: string;
  adresse: string;
  telephone: string;
  email: string;
  signature: string;
}> {
  if (!ins || typeof ins !== 'object') return {};
  const nom = String(ins.nom ?? '').trim();
  const prenom = String(ins.prenom ?? '').trim();
  const nomComplet = [prenom, nom].filter(Boolean).join(' ').trim();
  const dateNaissance = String(ins.dateNaissance ?? '').trim();
  const lieuNaissance = String(ins.lieuNaissance ?? '').trim();
  const adresse = String(ins.adresse ?? '').trim();
  const telephone = String(ins.telephone ?? '').trim();
  const email = String(ins.email ?? '').trim();
  const out: ReturnType<typeof buildConsentPrefill> = {};
  if (nomComplet) {
    out.nomComplet = nomComplet;
    out.signature = nomComplet;
  }
  if (dateNaissance) out.dateNaissance = dateNaissance;
  if (lieuNaissance) out.lieuNaissance = lieuNaissance;
  if (adresse) out.adresse = adresse;
  if (telephone) out.telephone = telephone;
  if (email) out.email = email;
  return out;
}

export default function ConsentementForm({
  onSubmit,
  prefillFromInscription,
  formId = 'consentement-form',
  hideSubmitButton = false,
}: ConsentementFormProps) {
  const [formData, setFormData] = useState({
    nomComplet: '',
    dateNaissance: '',
    lieuNaissance: '',
    adresse: '',
    telephone: '',
    email: '',
    responsableLegal: '',
    telephoneResponsable: '',
    accepteReglement: false,
    autoriseUtilisationImage: false,
    date: new Date().toISOString().split('T')[0],
    signature: ''
  });

  const prefillKey = JSON.stringify(prefillFromInscription ?? {});
  useEffect(() => {
    const patch = buildConsentPrefill(prefillFromInscription);
    if (Object.keys(patch).length === 0) return;
    setFormData((prev) => ({ ...prev, ...patch }));
  }, [prefillKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.accepteReglement) {
      alert('Veuillez accepter le règlement intérieur pour continuer');
      return;
    }
    await onSubmit(formData as ConsentementFormData);
  };

  return (
    <div className="space-y-3">
      <div className="border-b border-gray-200 pb-2">
        <h3 className="text-sm font-medium text-foreground">
          Décharge de Consentement et d'Engagement
        </h3>
        <p className="text-xs text-foreground/70 mt-0.5">
          Mission Agape - École de Formation et de Discipolat Missionnaire
        </p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2.5 mb-3">
        <div className="flex gap-2">
          <div className="flex-shrink-0">
            <svg className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs text-yellow-700 leading-snug">
              <strong>Note importante :</strong> Cette décharge est un document légal. Veuillez la lire attentivement avant de signer.
            </p>
          </div>
        </div>
      </div>

      <form id={formId} onSubmit={handleSubmit} className="space-y-3">
        {/* Informations Personnelles */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground border-b pb-1.5">
            Informations Personnelles
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="nomComplet" className="block text-xs font-medium text-foreground/80 mb-0.5">
                Nom et prénoms complets *
              </label>
              <input
                type="text"
                id="nomComplet"
                name="nomComplet"
                value={formData.nomComplet}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label htmlFor="dateNaissance" className="block text-xs font-medium text-foreground/80 mb-0.5">
                  Date de naissance *
                </label>
                <input
                  type="date"
                  id="dateNaissance"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="lieuNaissance" className="block text-xs font-medium text-foreground/80 mb-0.5">
                  Lieu de naissance *
                </label>
                <input
                  type="text"
                  id="lieuNaissance"
                  name="lieuNaissance"
                  value={formData.lieuNaissance}
                  onChange={handleChange}
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="adresse" className="block text-xs font-medium text-foreground/80 mb-0.5">
                Adresse complète *
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label htmlFor="telephone" className="block text-xs font-medium text-foreground/80 mb-0.5">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-foreground/80 mb-0.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Responsable Légal (si mineur) */}
        <div className="space-y-3 pt-3 border-t border-gray-200">
          <h4 className="text-sm font-medium text-foreground">
            Responsable Légal (si participant mineur)
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="responsableLegal" className="block text-xs font-medium text-foreground/80 mb-0.5">
                Nom et prénoms du responsable légal
              </label>
              <input
                type="text"
                id="responsableLegal"
                name="responsableLegal"
                value={formData.responsableLegal}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="telephoneResponsable" className="block text-xs font-medium text-foreground/80 mb-0.5">
                Téléphone du responsable
              </label>
              <input
                type="tel"
                id="telephoneResponsable"
                name="telephoneResponsable"
                value={formData.telephoneResponsable}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Engagements et Consentements */}
        <div className="space-y-3 pt-3 border-t border-gray-200">
          <h4 className="text-sm font-medium text-foreground">Engagements et Consentements</h4>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="flex items-center h-5 shrink-0">
                <input
                  id="accepteReglement"
                  name="accepteReglement"
                  type="checkbox"
                  checked={formData.accepteReglement}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  required
                />
              </div>
              <div className="min-w-0 text-xs">
                <label htmlFor="accepteReglement" className="font-medium text-foreground/80">
                  J'accepte le règlement intérieur de l'école *
                </label>
                <p className="text-foreground/60 mt-0.5 leading-snug">
                  Je m'engage à respecter les règles de vie en communauté, les horaires des cours et toutes les dispositions du règlement intérieur de l'école.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="flex items-center h-5 shrink-0">
                <input
                  id="autoriseUtilisationImage"
                  name="autoriseUtilisationImage"
                  type="checkbox"
                  checked={formData.autoriseUtilisationImage}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
              </div>
              <div className="min-w-0 text-xs">
                <label htmlFor="autoriseUtilisationImage" className="font-medium text-foreground/80">
                  Autorisation d'utilisation de l'image
                </label>
                <p className="text-foreground/60 mt-0.5 leading-snug">
                  J'autorise Mission Agape à utiliser mon image (photos, vidéos) à des fins de promotion et de communication de l'école.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-2.5 rounded-md">
              <h5 className="text-xs font-medium text-foreground/80 mb-1">
                Décharge de responsabilité :
              </h5>
              <p className="text-xs text-foreground/70 mb-2 leading-relaxed">
                Je déclare que les informations fournies sont exactes et complètes. Je comprends que toute fausse déclaration peut entraîner l'annulation de mon inscription. Je m'engage à participer activement à la formation et à respecter les valeurs chrétiennes de l'école.
              </p>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Je reconnais avoir pris connaissance du programme, des conditions de formation et des modalités de paiement. Je m'engage à respecter les règles de l'école et à m'acquitter des frais de formation selon les modalités convenues.
              </p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="space-y-3 pt-3 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="lieuDate" className="block text-xs font-medium text-foreground/80 mb-0.5">
                Fait à (ville) *
              </label>
              <input
                type="text"
                id="lieuDate"
                name="lieuDate"
                value="Lomé"
                readOnly
                className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm bg-gray-50"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-xs font-medium text-foreground/80 mb-0.5">
                Le *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="signature" className="block text-xs font-medium text-foreground/80 mb-0.5">
                Signature (tapez votre nom complet) *
              </label>
              <input
                type="text"
                id="signature"
                name="signature"
                value={formData.signature}
                onChange={handleChange}
                placeholder="Votre nom complet comme signature"
                className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>
        </div>

        {!hideSubmitButton ? (
          <div className="pt-3 border-t border-gray-200 flex justify-end">
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 h-8 text-xs px-4"
              disabled={!formData.accepteReglement}
            >
              Continuer
            </Button>
          </div>
        ) : null}
      </form>
    </div>
  );
}
