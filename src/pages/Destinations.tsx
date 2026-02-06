import { Clock } from 'lucide-react';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

export default function Destinations() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Nos Destinations Temporelles
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choisissez votre époque et préparez-vous à vivre une aventure hors du temps.
            Chaque destination est soigneusement sélectionnée pour vous offrir une expérience unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="mt-16 bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Besoin d'aide pour choisir ?</h2>
          <p className="text-gray-400 mb-6">
            Notre assistant IA est là pour vous guider dans le choix de votre destination idéale
            en fonction de vos préférences et de votre profil d'aventurier.
          </p>
          <a
            href="/assistant"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Consulter l'assistant
          </a>
        </div>
      </div>
    </div>
  );
}
