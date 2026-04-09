'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface InscriptionFormData {
  nom: string;
  prenom: string;
  dateNaissance: string;
  lieuNaissance: string;
  adresse: string;
  telephone: string;
  email: string;
  niveauEtude: string;
  egliseLocale: string;
  pasteurResponsable: string;
  formationSouhaitee: string;
  motivation: string;
  [key: string]: string; // Pour les champs supplémentaires
}

interface InscriptionFormProps {
  onSubmit: (data: InscriptionFormData) => void;
}

export default function InscriptionForm({ onSubmit }: InscriptionFormProps) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    lieuNaissance: '',
    adresse: '',
    telephone: '',
    email: '',
    niveauEtude: '',
    egliseLocale: '',
    pasteurResponsable: '',
    formationSouhaitee: '',
    motivation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    onSubmit(formData);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-foreground">
          Formulaire d'Inscription - Mission Agape
        </h3>
        <p className="text-sm text-foreground/70 mt-1">
          Veuillez remplir tous les champs obligatoires (*)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Informations Personnelles */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Informations Personnelles</h4>
            
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-foreground/80 mb-1">
                Nom *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-foreground/80 mb-1">
                Prénom(s) *
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
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
          </div>

          {/* Coordonnées */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Coordonnées</h4>
            
            <div>
              <label htmlFor="adresse" className="block text-sm font-medium text-foreground/80 mb-1">
                Adresse complète *
              </label>
              <textarea
                id="adresse"
                name="adresse"
                rows={3}
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

        {/* Informations Académiques */}
        <div className="space-y-4 pt-4 border-t border-gray-200">
          <h4 className="font-medium text-foreground">Informations Académiques et Spirituelles</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="niveauEtude" className="block text-sm font-medium text-foreground/80 mb-1">
                Dernier diplôme obtenu *
              </label>
              <select
                id="niveauEtude"
                name="niveauEtude"
                value={formData.niveauEtude}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Sélectionnez un niveau</option>
                <option value="BEPC">BEPC</option>
                <option value="BAC">BAC</option>
                <option value="BAC+2">BAC+2</option>
                <option value="Licence">Licence</option>
                <option value="Master">Master</option>
                <option value="Doctorat">Doctorat</option>
              </select>
            </div>

            <div>
              <label htmlFor="egliseLocale" className="block text-sm font-medium text-foreground/80 mb-1">
                Église locale *
              </label>
              <input
                type="text"
                id="egliseLocale"
                name="egliseLocale"
                value={formData.egliseLocale}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="pasteurResponsable" className="block text-sm font-medium text-foreground/80 mb-1">
                Pasteur responsable *
              </label>
              <input
                type="text"
                id="pasteurResponsable"
                name="pasteurResponsable"
                value={formData.pasteurResponsable}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="formationSouhaitee" className="block text-sm font-medium text-foreground/80 mb-1">
                Formation souhaitée *
              </label>
              <select
                id="formationSouhaitee"
                name="formationSouhaitee"
                value={formData.formationSouhaitee}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Sélectionnez une formation</option>
                <option value="Théologie Fondamentale">Théologie Fondamentale</option>
                <option value="Discipolat">Discipolat</option>
                <option value="École d'Évangélisation">École d'Évangélisation</option>
                <option value="Leadership Chrétien">Leadership Chrétien</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-foreground/80 mb-1">
              Motivation (Pourquoi souhaitez-vous suivre cette formation ?) *
            </label>
            <textarea
              id="motivation"
              name="motivation"
              rows={4}
              value={formData.motivation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 flex justify-end space-x-3">
          <Button type="button" variant="outline">
            Annuler
          </Button>
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Enregistrer et continuer
          </Button>
        </div>
      </form>
    </div>
  );
}
