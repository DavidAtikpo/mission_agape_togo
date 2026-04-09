'use client';

import { useState, useEffect } from 'react';
import { Check, Heart, Shield, Gift, User, Mail, Phone, Home, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface DonationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  purpose: string;
}

export default function DonationPage() {
  const [formData, setFormData] = useState<DonationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    purpose: ''
  });
  
  const [amount, setAmount] = useState<number | ''>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mobile' | 'bank'>('card');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [donationId, setDonationId] = useState<string>('');

  // Récupérer le but du don depuis l'URL si présent
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const purpose = urlParams.get('purpose');
      if (purpose) {
        setFormData(prev => ({ ...prev, purpose: decodeURIComponent(purpose) }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !formData.firstName || !formData.lastName || !formData.email) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulation d'envoi des données
      const donationData = {
        ...formData,
        amount,
        frequency,
        paymentMethod,
        date: new Date().toISOString(),
        id: 'DON-' + Math.random().toString(36).substr(2, 9).toUpperCase()
      };
      
      console.log('Donation data:', donationData);
      
      // Simulation de délai
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setDonationId(donationData.id);
      setIsSuccess(true);
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const presetAmounts = [5000, 10000, 20000, 50000];

  // Afficher le formulaire de chargement
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <h2 className="mt-4 text-xl font-medium text-gray-900">Traitement de votre don...</h2>
          <p className="mt-2 text-gray-600">Veuillez patienter pendant que nous traitons votre demande.</p>
        </div>
      </div>
    );
  }

  const generateReceipt = () => {
    const doc = new jsPDF();
    
    // En-tête
    doc.setFontSize(20);
    doc.setTextColor(30, 64, 175);
    doc.text('MISSION AGAPE TOGO', 105, 20, { align: 'center' });
    
    // Sous-titre
    doc.setFontSize(14);
    doc.setTextColor(75, 85, 99);
    doc.text('REÇU DE DON N° ' + donationId, 105, 30, { align: 'center' });
    
    // Ligne de séparation
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 40, 190, 40);
    
    // Informations du don
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    // Date
    doc.text('Date:', 20, 55);
    doc.text(new Date().toLocaleDateString('fr-FR'), 60, 55);
    
    // Montant
    doc.text('Montant:', 20, 70);
    doc.text(`${amount?.toLocaleString('fr-FR')} FCFA`, 60, 70);
    
    // Fréquence
    doc.text('Fréquence:', 20, 85);
    doc.text(frequency === 'once' ? 'Une fois' : 'Mensuel', 60, 85);
    
    // Méthode de paiement
    doc.text('Méthode:', 20, 100);
    doc.text(
      paymentMethod === 'card' ? 'Carte bancaire' : 
      paymentMethod === 'mobile' ? 'Mobile Money' : 'Virement bancaire', 
      60, 
      100
    );
    
    // Informations du donateur
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text('INFORMATIONS DU DONATEUR', 105, 125, { align: 'center' });
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 130, 190, 130);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Nom: ${formData.lastName}`, 20, 145);
    doc.text(`Prénom: ${formData.firstName}`, 20, 155);
    doc.text(`Email: ${formData.email}`, 20, 165);
    if (formData.phone) {
      doc.text(`Téléphone: ${formData.phone}`, 20, 175);
    }
    if (formData.purpose) {
      doc.text(`But du don: ${formData.purpose}`, 20, 185);
    }
    
    // Pied de page
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Merci pour votre générosité !', 105, 250, { align: 'center' });
    doc.text('MISSION AGAPE TOGO - BP 1234 Lomé, Togo - contact@missionagape.tg', 105, 260, { align: 'center' });
    doc.text('Reçu valable comme justificatif fiscal', 105, 270, { align: 'center' });
    
    // Sauvegarder le PDF
    doc.save(`reçu-don-${donationId}.pdf`);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Merci pour votre générosité !</h1>
          <p className="text-lg text-gray-600 mb-8">
            Votre don de {amount ? amount.toLocaleString('fr-FR') : '0'} FCFA a été reçu avec succès. 
            Votre soutien nous aide à poursuivre notre mission.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Votre reçu de don</h3>
            <p className="text-gray-600 mb-6">
              Votre numéro de reçu: <span className="font-medium">{donationId}</span>
            </p>
            <button
              onClick={generateReceipt}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Download className="w-5 h-5 mr-2" />
              Télécharger le reçu
            </button>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-green-800 font-medium">
              Un reçu vous a été envoyé par email à {formData.email}.
            </p>
          </div>
          
          <div className="mt-8">
            <button
              onClick={() => window.location.href = '/'}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Faire un don</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Votre soutien nous permet de poursuivre notre mission de formation et d'évangélisation.
            Chaque don compte et fait une réelle différence.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              {/* Section Montant du don */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Montant du don</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset)}
                      className={`py-3 px-4 rounded-md border ${
                        amount === preset
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      } font-medium`}
                    >
                      {preset.toLocaleString('fr-FR')} FCFA
                    </button>
                  ))}
                </div>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">FCFA</span>
                  </div>
                  <input
                    type="number"
                    value={amount || ''}
                    onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
                    placeholder="Montant personnalisé"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-16 pr-12 py-3 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Section Informations personnelles */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Vos informations</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
                      But du don (facultatif)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Home className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        placeholder="Ex: Contribution pour la construction de la salle principale"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fréquence du don */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Fréquence
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFrequency('once')}
                    className={`py-3 px-4 rounded-lg border-2 text-center font-medium transition-colors ${
                      frequency === 'once'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    Une fois
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-3 px-4 rounded-lg border-2 text-center font-medium transition-colors ${
                      frequency === 'monthly'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    Mensuel
                  </button>
                </div>
              </div>

              {/* Méthode de paiement */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Méthode de paiement
                </label>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`w-full flex items-center p-4 rounded-lg border-2 text-left transition-colors ${
                      paymentMethod === 'card'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Carte bancaire</div>
                      <p className="text-sm text-gray-500">Visa, Mastercard, etc.</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mobile')}
                    className={`w-full flex items-center p-4 rounded-lg border-2 text-left transition-colors ${
                      paymentMethod === 'mobile'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-3H7V4h10v14z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Mobile Money</div>
                      <p className="text-sm text-gray-500">Moov, MTN, Togocel</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`w-full flex items-center p-4 rounded-lg border-2 text-left transition-colors ${
                      paymentMethod === 'bank'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Virement bancaire</div>
                      <p className="text-sm text-gray-500">Coordonnées bancaires</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Détails du paiement */}
              <div className="bg-gray-50 p-5 rounded-lg mb-8">
                <h3 className="font-medium text-gray-900 mb-3">Récapitulatif du don</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Montant</span>
                    <span className="font-medium">{amount.toLocaleString('fr-FR')} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fréquence</span>
                    <span className="font-medium">{frequency === 'once' ? 'Une fois' : 'Mensuel'}</span>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{amount.toLocaleString('fr-FR')} FCFA</span>
                  </div>
                </div>
              </div>

              {/* Sécurité et mentions */}
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    J'accepte les conditions d'utilisation et la politique de confidentialité
                  </label>
                </div>
              </div>

              {/* Bouton de soumission */}
              <button
                type="submit"
                disabled={!amount || isLoading}
                className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white ${
                  !amount || isLoading
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Traitement...
                  </>
                ) : (
                  <>
                    <Heart className="w-6 h-6 mr-2" />
                    Faire un don de {amount ? amount.toLocaleString() : '0'} FCFA
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Bandeau de sécurité */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Shield className="w-5 h-5 text-green-500" />
              <span>Paiement sécurisé et crypté</span>
            </div>
          </div>
        </div>

        {/* Section d'information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Déductible des impôts</h3>
            <p className="text-gray-600">Vos dons sont éligibles à une déduction fiscale de 66% dans la limite de 20% de votre revenu imposable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Sécurité garantie</h3>
            <p className="text-gray-600">Vos informations de paiement sont cryptées et sécurisées. Nous ne stockons jamais vos coordonnées bancaires.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Impact réel</h3>
            <p className="text-gray-600">100% de votre don est utilisé pour financer nos actions et programmes de formation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
