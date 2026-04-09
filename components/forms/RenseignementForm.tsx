'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface RenseignementFormData {
  situationFamiliale: string;
  nombreEnfants: string;
  profession: string;
  employeur: string;
  adresseProfessionnelle: string;
  telephoneProfessionnel: string;
  personneContact: string;
  telephoneContact: string;
  lienParente: string;
  groupeSanguin: string;
  allergies: string;
  traitementMedical: string;
  experienceChretienne: string;
  [key: string]: string;
}

interface RenseignementFormProps {
  onSubmit: (data: RenseignementFormData) => void;
  initialData?: Partial<Record<string, string>>;
}

const emptyRenseignementState = {
  situationFamiliale: '',
  nombreEnfants: '',
  profession: '',
  employeur: '',
  adresseProfessionnelle: '',
  telephoneProfessionnel: '',
  personneContact: '',
  telephoneContact: '',
  lienParente: '',
  groupeSanguin: '',
  allergies: '',
  traitementMedical: '',
  experienceChretienne: '',
  ministeres: '',
  attentes: ''
};

export default function RenseignementForm({ onSubmit, initialData }: RenseignementFormProps) {
  const [formData, setFormData] = useState(() => ({
    ...emptyRenseignementState,
    ...Object.fromEntries(
      Object.entries(initialData || {}).filter(([, v]) => v != null && String(v) !== '')
    )
  }));

  const initialKey = JSON.stringify(initialData ?? {});
  useEffect(() => {
    if (!initialData || Object.keys(initialData).length === 0) return;
    setFormData((prev) => ({
      ...prev,
      ...Object.fromEntries(
        Object.entries(initialData).filter(([, v]) => v != null && String(v) !== '')
      )
    }));
  }, [initialKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-foreground">
          Fiche de Renseignements Personnels et Spirituels
        </h3>
        <p className="text-sm text-foreground/70 mt-1">
          Ces informations resteront strictement confidentielles
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section Situation Familiale et Professionnelle */}
        <div className="space-y-6">
          <h4 className="font-medium text-foreground border-b pb-2">Situation Familiale et Professionnelle</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="situationFamiliale" className="block text-sm font-medium text-foreground/80 mb-1">
                Situation familiale *
              </label>
              <select
                id="situationFamiliale"
                name="situationFamiliale"
                value={formData.situationFamiliale}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Sélectionnez votre situation</option>
                <option value="Célibataire">Célibataire</option>
                <option value="Marié(e)">Marié(e)</option>
                <option value="Divorcé(e)">Divorcé(e)</option>
                <option value="Veuf/Veuve">Veuf/Veuve</option>
              </select>
            </div>

            <div>
              <label htmlFor="nombreEnfants" className="block text-sm font-medium text-foreground/80 mb-1">
                Nombre d'enfants à charge
              </label>
              <input
                type="number"
                id="nombreEnfants"
                name="nombreEnfants"
                min="0"
                value={formData.nombreEnfants}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-foreground/80 mb-1">
                Profession actuelle *
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="employeur" className="block text-sm font-medium text-foreground/80 mb-1">
                Employeur actuel
              </label>
              <input
                type="text"
                id="employeur"
                name="employeur"
                value={formData.employeur}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="adresseProfessionnelle" className="block text-sm font-medium text-foreground/80 mb-1">
                Adresse professionnelle
              </label>
              <textarea
                id="adresseProfessionnelle"
                name="adresseProfessionnelle"
                rows={2}
                value={formData.adresseProfessionnelle}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="telephoneProfessionnel" className="block text-sm font-medium text-foreground/80 mb-1">
                Téléphone professionnel
              </label>
              <input
                type="tel"
                id="telephoneProfessionnel"
                name="telephoneProfessionnel"
                value={formData.telephoneProfessionnel}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Section Personne à contacter en cas d'urgence */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-foreground">Personne à contacter en cas d'urgence</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="personneContact" className="block text-sm font-medium text-foreground/80 mb-1">
                Nom et prénoms *
              </label>
              <input
                type="text"
                id="personneContact"
                name="personneContact"
                value={formData.personneContact}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="telephoneContact" className="block text-sm font-medium text-foreground/80 mb-1">
                Téléphone *
              </label>
              <input
                type="tel"
                id="telephoneContact"
                name="telephoneContact"
                value={formData.telephoneContact}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="lienParente" className="block text-sm font-medium text-foreground/80 mb-1">
                Lien de parenté *
              </label>
              <input
                type="text"
                id="lienParente"
                name="lienParente"
                value={formData.lienParente}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>
        </div>

        {/* Section Santé */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-foreground">Informations Médicales</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="groupeSanguin" className="block text-sm font-medium text-foreground/80 mb-1">
                Groupe sanguin
              </label>
              <select
                id="groupeSanguin"
                name="groupeSanguin"
                value={formData.groupeSanguin}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Non renseigné</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="allergies" className="block text-sm font-medium text-foreground/80 mb-1">
                Allergies connues
              </label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                placeholder="Ex: Pénicilline, arachides, poussière..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="md:col-span-3">
              <label htmlFor="traitementMedical" className="block text-sm font-medium text-foreground/80 mb-1">
                Traitement médical en cours
              </label>
              <textarea
                id="traitementMedical"
                name="traitementMedical"
                rows={2}
                value={formData.traitementMedical}
                onChange={handleChange}
                placeholder="Médicaments, suivi médical particulier..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Section Vie Spirituelle */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-foreground">Vie Spirituelle</h4>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="experienceChretienne" className="block text-sm font-medium text-foreground/80 mb-1">
                Parlez-nous de votre expérience chrétienne *
              </label>
              <textarea
                id="experienceChretienne"
                name="experienceChretienne"
                rows={3}
                value={formData.experienceChretienne}
                onChange={handleChange}
                placeholder="Quand et comment avez-vous rencontré Jésus-Christ ?..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="ministeres" className="block text-sm font-medium text-foreground/80 mb-1">
                Dans quels ministères ou services êtes-vous impliqué(e) dans votre église ?
              </label>
              <textarea
                id="ministeres"
                name="ministeres"
                rows={2}
                value={formData.ministeres}
                onChange={handleChange}
                placeholder="Ex: Groupe de louange, école du dimanche, évangélisation..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="attentes" className="block text-sm font-medium text-foreground/80 mb-1">
                Quelles sont vos attentes par rapport à cette formation ? *
              </label>
              <textarea
                id="attentes"
                name="attentes"
                rows={3}
                value={formData.attentes}
                onChange={handleChange}
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
          <div className="space-x-3">
            <Button type="button" variant="outline">
              Enregistrer le brouillon
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Soumettre la fiche
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
