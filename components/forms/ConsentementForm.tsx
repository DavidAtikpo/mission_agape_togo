'use client';

import { useState } from 'react';
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
  onSubmit: (data: ConsentementFormData) => void;
}

export default function ConsentementForm({ onSubmit }: ConsentementFormProps) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.accepteReglement) {
      alert('Veuillez accepter le règlement intérieur pour continuer');
      return;
    }
    console.log('Décharge de consentement soumise:', formData);
    onSubmit(formData as ConsentementFormData);
    alert('Décharge de consentement enregistrée avec succès !');
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-foreground">
          Décharge de Consentement et d'Engagement
        </h3>
        <p className="text-sm text-foreground/70 mt-1">
          Mission Agape - École de Formation et de Discipolat Missionnaire
        </p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Note importante :</strong> Cette décharge est un document légal. Veuillez la lire attentivement avant de signer.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Informations Personnelles */}
        <div className="space-y-6">
          <h4 className="font-medium text-foreground border-b pb-2">Informations Personnelles</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nomComplet" className="block text-sm font-medium text-foreground/80 mb-1">
                Nom et prénoms complets *
              </label>
              <input
                type="text"
                id="nomComplet"
                name="nomComplet"
                value={formData.nomComplet}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="dateNaissance" className="block text-sm font-medium text-foreground/80 mb-1">
                  Date de naissance *
                </label>
                <input
                  type="date"
                  id="dateNaissance"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="lieuNaissance" className="block text-sm font-medium text-foreground/80 mb-1">
                  Lieu de naissance *
                </label>
                <input
                  type="text"
                  id="lieuNaissance"
                  name="lieuNaissance"
                  value={formData.lieuNaissance}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="adresse" className="block text-sm font-medium text-foreground/80 mb-1">
                Adresse complète *
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-foreground/80 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Responsable Légal (si mineur) */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-foreground">Responsable Légal (si participant mineur)</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="responsableLegal" className="block text-sm font-medium text-foreground/80 mb-1">
                Nom et prénoms du responsable légal
              </label>
              <input
                type="text"
                id="responsableLegal"
                name="responsableLegal"
                value={formData.responsableLegal}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="telephoneResponsable" className="block text-sm font-medium text-foreground/80 mb-1">
                Téléphone du responsable
              </label>
              <input
                type="tel"
                id="telephoneResponsable"
                name="telephoneResponsable"
                value={formData.telephoneResponsable}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Engagements et Consentements */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-foreground">Engagements et Consentements</h4>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
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
              <div className="ml-3 text-sm">
                <label htmlFor="accepteReglement" className="font-medium text-foreground/80">
                  J'accepte le règlement intérieur de l'école *
                </label>
                <p className="text-foreground/60">
                  Je m'engage à respecter les règles de vie en communauté, les horaires des cours et toutes les dispositions du règlement intérieur de l'école.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="autoriseUtilisationImage"
                  name="autoriseUtilisationImage"
                  type="checkbox"
                  checked={formData.autoriseUtilisationImage}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="autoriseUtilisationImage" className="font-medium text-foreground/80">
                  Autorisation d'utilisation de l'image
                </label>
                <p className="text-foreground/60">
                  J'autorise Mission Agape à utiliser mon image (photos, vidéos) à des fins de promotion et de communication de l'école.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h5 className="font-medium text-foreground/80 mb-2">Décharge de responsabilité :</h5>
              <p className="text-sm text-foreground/70 mb-4">
                Je déclare que les informations fournies sont exactes et complètes. Je comprends que toute fausse déclaration peut entraîner l'annulation de mon inscription. Je m'engage à participer activement à la formation et à respecter les valeurs chrétiennes de l'école.
              </p>
              <p className="text-sm text-foreground/70">
                Je reconnais avoir pris connaissance du programme, des conditions de formation et des modalités de paiement. Je m'engage à respecter les règles de l'école et à m'acquitter des frais de formation selon les modalités convenues.
              </p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="lieuDate" className="block text-sm font-medium text-foreground/80 mb-1">
                Fait à (ville) *
              </label>
              <input
                type="text"
                id="lieuDate"
                name="lieuDate"
                value="Lomé"
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-foreground/80 mb-1">
                Le *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="signature" className="block text-sm font-medium text-foreground/80 mb-1">
                Signature (tapez votre nom complet) *
              </label>
              <input
                type="text"
                id="signature"
                name="signature"
                value={formData.signature}
                onChange={handleChange}
                placeholder="Votre nom complet comme signature"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 flex justify-between">
          <Button type="button" variant="outline">
            Retour
          </Button>
          <Button 
            type="submit" 
            className="bg-primary hover:bg-primary/90"
            disabled={!formData.accepteReglement}
          >
            Valider et signer la décharge
          </Button>
        </div>
      </form>
    </div>
  );
}
