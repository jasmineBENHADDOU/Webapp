import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertTriangle, Sparkles, Calendar } from 'lucide-react';
import { getDestinationBySlug } from '../data/destinations';
import { TravelPreferences } from '../types';

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const destination = getDestinationBySlug(slug || '');

  const [preferences, setPreferences] = useState<TravelPreferences>({
    duration: '7',
    budget: 'moyen',
    style: 'culture',
  });

  const [itinerary, setItinerary] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Destination non trouvée</h2>
          <Link to="/destinations" className="text-cyan-400 hover:text-cyan-300">
            Retour aux destinations
          </Link>
        </div>
      </div>
    );
  }

  const generateItinerary = () => {
    setGenerating(true);

    setTimeout(() => {
      const styleTexts = {
        culture: 'culturelles et historiques',
        aventure: 'd\'aventure et d\'exploration',
        detente: 'de détente et de découverte paisible',
      };

      const itineraryText = `🎯 Itinéraire personnalisé pour ${destination.name}

📅 Durée : ${preferences.duration} jours
💰 Budget : ${preferences.budget}
🎨 Style : ${styleTexts[preferences.style]}

Jour 1-2 : Acclimatation temporelle
• Arrivée en douceur dans l'époque
• Briefing de sécurité et remise de l'équipement d'époque
• Premières découvertes des environs immédiats
• ${preferences.style === 'culture' ? 'Visite guidée des monuments principaux' : preferences.style === 'aventure' ? 'Exploration des zones sauvages environnantes' : 'Moments de contemplation et d\'immersion'}

Jour 3-${Math.max(4, parseInt(preferences.duration) - 3)} : Expériences principales
• ${destination.highlights[0]}
• ${destination.highlights[1]}
• ${destination.highlights[2]}
${preferences.style === 'aventure' ? '• Activités d\'exploration intensive' : ''}
${preferences.style === 'culture' ? '• Rencontres avec les habitants de l\'époque' : ''}

Jour ${Math.max(5, parseInt(preferences.duration) - 2)}-${preferences.duration} : Moments privilégiés
• ${destination.highlights[3] || 'Expériences exclusives'}
• Temps libre pour exploration personnelle
• Séance photos et souvenirs
• Préparation au retour temporel

⚠️ Note importante : ${destination.warnings[0]}

💡 Ce voyage inclut : guide expert, équipement de protection temporelle, assurance voyage dans le temps, kit de survie d'époque.`;

      setItinerary(itineraryText);
      setGenerating(false);
    }, 2000);
  };

  const handleReservation = () => {
    navigate('/reservation', {
      state: {
        destination: destination.name,
        preferences,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="relative h-96 overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link
              to="/destinations"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour aux destinations</span>
            </Link>

            <h1 className="text-5xl font-bold text-white mb-2">{destination.name}</h1>
            <p className="text-2xl text-cyan-400">{destination.period}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">À propos de cette destination</h2>
              <p className="text-gray-300 leading-relaxed">{destination.fullDescription}</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>Points forts</span>
              </h2>
              <ul className="space-y-3">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <span>Avertissements de sécurité</span>
              </h2>
              <ul className="space-y-3">
                {destination.warnings.map((warning, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{warning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 sticky top-20">
              <h3 className="text-xl font-bold text-white mb-6">Personnaliser mon voyage</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Durée du séjour
                  </label>
                  <select
                    value={preferences.duration}
                    onChange={(e) => setPreferences({ ...preferences, duration: e.target.value })}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="3">3 jours</option>
                    <option value="7">7 jours</option>
                    <option value="14">14 jours</option>
                    <option value="21">21 jours</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget
                  </label>
                  <select
                    value={preferences.budget}
                    onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="economique">Économique</option>
                    <option value="moyen">Moyen</option>
                    <option value="premium">Premium</option>
                    <option value="luxe">Luxe</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Style de voyage
                  </label>
                  <select
                    value={preferences.style}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        style: e.target.value as 'culture' | 'aventure' | 'detente',
                      })
                    }
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="culture">Culture & Histoire</option>
                    <option value="aventure">Aventure & Exploration</option>
                    <option value="detente">Détente & Découverte</option>
                  </select>
                </div>

                <button
                  onClick={generateItinerary}
                  disabled={generating}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Sparkles className={`w-5 h-5 ${generating ? 'animate-spin' : ''}`} />
                  <span>{generating ? 'Génération...' : 'Générer itinéraire IA'}</span>
                </button>

                {itinerary && (
                  <button
                    onClick={handleReservation}
                    className="w-full bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Réserver maintenant</span>
                  </button>
                )}
              </div>

              {itinerary && (
                <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-cyan-500/30">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans">
                    {itinerary}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
