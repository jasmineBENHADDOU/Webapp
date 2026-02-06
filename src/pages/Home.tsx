import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Clock className="w-12 h-12 text-cyan-400 animate-pulse" />
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  TimeTravel Agency
                </span>
              </h1>
            </div>

            <p className="text-2xl sm:text-3xl text-gray-300 max-w-3xl mx-auto">
              Le temps n'est plus une barrière
            </p>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explorez les époques les plus fascinantes de l'Histoire.
              De la préhistoire à la Renaissance, vivez des aventures temporelles
              inoubliables en toute sécurité.
            </p>

            <Link
              to="/destinations"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <span>Découvrir les destinations</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-cyan-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Voyages Certifiés</h3>
              <p className="text-gray-400">
                Technologie de pointe garantissant votre retour au présent.
                100% sécurisé par l'Autorité Temporelle Internationale.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-cyan-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sécurité Maximale</h3>
              <p className="text-gray-400">
                Guides experts, équipement de protection et protocoles d'urgence.
                Votre sécurité est notre priorité absolue.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-cyan-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expériences Uniques</h3>
              <p className="text-gray-400">
                Vivez l'Histoire de l'intérieur. Rencontrez des personnages légendaires
                et assistez à des événements historiques majeurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
