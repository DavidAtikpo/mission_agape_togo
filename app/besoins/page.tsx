'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, Music, Bus, Hammer, Target, Heart, Shield, Gift } from 'lucide-react';

type DonationItem = {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  image: string;
  category: 'construction' | 'instruments' | 'transport';
};

export default function BesoinsPage() {
  const [activeTab, setActiveTab] = useState<'tous' | 'construction' | 'instruments' | 'transport'>('tous');
  
  const needs: DonationItem[] = [
    {
      id: 'construction-1',
      title: 'Construction de la salle principale',
      description: 'Matériaux de construction pour la salle de culte principale (ciment, tôles, poutres, etc.)',
      target: 10000000,
      current: 3200000,
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'construction'
    },
    {
      id: 'construction-2',
      title: 'Aménagement des salles de classe',
      description: 'Mobilier et équipements pour les salles de formation',
      target: 5000000,
      current: 1200000,
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'construction'
    },
    {
      id: 'instruments-1',
      title: 'Instruments de musique',
      description: 'Achat de batteries, guitares, claviers et équipement sonore',
      target: 3000000,
      current: 800000,
      image: 'https://images.pexels.com/photos/2741314/pexels-photo-2741314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'instruments'
    },
    {
      id: 'transport-1',
      title: 'Véhicule de transport',
      description: 'Minibus pour le transport des étudiants et des équipements',
      target: 15000000,
      current: 2500000,
      image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'transport'
    },
    {
      id: 'construction-3',
      title: 'Système solaire',
      description: 'Installation de panneaux solaires pour une autonomie énergétique',
      target: 7000000,
      current: 1500000,
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'construction'
    },
    {
      id: 'instruments-2',
      title: 'Système de son',
      description: 'Système audio professionnel pour les cultes et événements',
      target: 2500000,
      current: 500000,
      image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'instruments'
    }
  ];

  const filteredNeeds = activeTab === 'tous' 
    ? needs 
    : needs.filter(need => need.category === activeTab);

  const handleContribution = (type: string) => {
    switch(type) {
      case 'don-nature':
        alert('Merci pour votre intérêt à faire un don en nature. Veuillez nous contacter à contact@missionagape.tg pour plus d\'informations.');
        break;
      case 'partenaire':
        alert('Merci de votre intérêt à devenir partenaire. Notre équipe vous contactera bientôt pour discuter des modalités de partenariat.');
        break;
      case 'contribution':
        window.location.href = '/don';
        break;
      default:
        break;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'construction':
        return <Hammer className="w-5 h-5 text-orange-500" />;
      case 'instruments':
        return <Music className="w-5 h-5 text-blue-500" />;
      case 'transport':
        return <Bus className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage < 30) return 'bg-red-500';
    if (percentage < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  const calculatePercentage = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Besoins</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contribuez à notre mission en soutenant nos projets de construction, d'équipement et de développement.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('tous')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'tous'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Tous les besoins
          </button>
          
          <button
            onClick={() => setActiveTab('construction')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'construction'
                ? 'bg-orange-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Hammer className="w-4 h-4" />
            Construction
          </button>
          
          <button
            onClick={() => setActiveTab('instruments')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'instruments'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Music className="w-4 h-4" />
            Instruments & Sonorisation
          </button>
          
          <button
            onClick={() => setActiveTab('transport')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'transport'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Bus className="w-4 h-4" />
            Transport
          </button>
        </div>

        {/* Liste des besoins */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNeeds.map((item) => {
            const percentage = calculatePercentage(item.current, item.target);
            
            return (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
                    {getCategoryIcon(item.category)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Objectif: {formatNumber(item.target)} FCFA</span>
                      <span>{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${getProgressColor(percentage)}`} 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {formatNumber(item.current)} FCFA collectés
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <Target className="inline-block w-4 h-4 mr-1" />
                      Manquent {formatNumber(item.target - item.current)} FCFA
                    </div>
                    <button 
                      onClick={() => window.location.href = `/don?purpose=${encodeURIComponent(item.title)}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Contribuer
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section d'information */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment fonctionnent les dons ?</h2>
            <p className="text-gray-600 mb-8">
              Chaque contribution, quelle que soit sa taille, nous aide à concrétiser ces projets essentiels pour notre mission.
              Vous recevrez des mises à jour régulières sur l'avancement des projets que vous soutenez.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Sécurisé</h3>
                <p className="text-gray-600 text-sm">Paiement 100% sécurisé avec cryptage SSL</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Transparent</h3>
                <p className="text-gray-600 text-sm">Suivez l'utilisation des fonds en temps réel</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Reçu fiscal</h3>
                <p className="text-gray-600 text-sm">Reçu fiscal pour déduction d'impôts</p>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Autres moyens de contribuer</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => handleContribution('don-nature')}
                  className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Faire un don en nature
                </button>
                <button 
                  onClick={() => handleContribution('partenaire')}
                  className="px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Devenir partenaire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
