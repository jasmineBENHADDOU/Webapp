import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Faible':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Modéré':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Élevé':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

        <div className="absolute top-4 right-4">
          <span className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold border ${getRiskColor(destination.riskLevel)}`}>
            <AlertCircle className="w-3 h-3" />
            <span>{destination.riskLevel}</span>
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
          <p className="text-cyan-400 text-sm font-medium">{destination.period}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-6 line-clamp-2">
          {destination.description}
        </p>

        <Link
          to={`/destinations/${destination.slug}`}
          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200 group/link"
        >
          <span>Explorer cette époque</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}
