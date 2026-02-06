import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, CheckCircle } from 'lucide-react';
import { destinations } from '../data/destinations';

export default function Reservation() {
  const location = useLocation();
  const navigate = useNavigate();
  const prefilledData = location.state as { destination?: string; preferences?: any } | null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    destination: prefilledData?.destination || '',
    dateDepart: '',
    duree: prefilledData?.preferences?.duration || '7',
    budget: prefilledData?.preferences?.budget || 'moyen',
    style: prefilledData?.preferences?.style || 'culture',
    commentaires: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">Réservation confirmée !</h2>
          <p className="text-gray-300 mb-6">
            Merci {formData.nom} ! Votre demande de réservation pour {formData.destination} a bien
            été enregistrée.
          </p>

          <div className="bg-slate-900/50 rounded-xl p-6 mb-6 text-left">
            <h3 className="text-lg font-bold text-cyan-400 mb-4">Récapitulatif</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-semibold">Destination :</span> {formData.destination}
              </p>
              <p>
                <span className="font-semibold">Date de départ :</span>{' '}
                {new Date(formData.dateDepart).toLocaleDateString('fr-FR')}
              </p>
              <p>
                <span className="font-semibold">Durée :</span> {formData.duree} jours
              </p>
              <p>
                <span className="font-semibold">Budget :</span> {formData.budget}
              </p>
              <p>
                <span className="font-semibold">Style :</span> {formData.style}
              </p>
            </div>
          </div>

          <p className="text-gray-400 mb-8">
            Un conseiller TimeTravel Agency vous contactera sous 24h à l'adresse{' '}
            <span className="text-cyan-400">{formData.email}</span> pour finaliser votre voyage
            temporel.
          </p>

          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Réserver votre voyage temporel
            </span>
          </h1>
          <p className="text-gray-400">
            Complétez le formulaire ci-dessous pour réserver votre aventure
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                  placeholder="jean.dupont@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                placeholder="+33 6 12 34 56 78"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Destination *
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="">Sélectionnez une destination</option>
                {destinations.map((dest) => (
                  <option key={dest.id} value={dest.name}>
                    {dest.name} - {dest.period}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Date de départ souhaitée *
                </label>
                <input
                  type="date"
                  name="dateDepart"
                  value={formData.dateDepart}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Durée du séjour *
                </label>
                <select
                  name="duree"
                  value={formData.duree}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="3">3 jours</option>
                  <option value="7">7 jours</option>
                  <option value="14">14 jours</option>
                  <option value="21">21 jours</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Budget *</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="economique">Économique (5 000€+)</option>
                  <option value="moyen">Moyen (8 000-15 000€)</option>
                  <option value="premium">Premium (20 000-40 000€)</option>
                  <option value="luxe">Luxe (50 000€+)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Style de voyage *
                </label>
                <select
                  name="style"
                  value={formData.style}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="culture">Culture & Histoire</option>
                  <option value="aventure">Aventure & Exploration</option>
                  <option value="detente">Détente & Découverte</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Commentaires ou demandes spéciales
              </label>
              <textarea
                name="commentaires"
                value={formData.commentaires}
                onChange={handleChange}
                rows={4}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200 resize-none"
                placeholder="Précisez vos attentes, besoins spécifiques, ou questions..."
              />
            </div>

            <div className="bg-slate-900/50 rounded-xl p-4 border border-cyan-500/20">
              <p className="text-sm text-gray-400">
                En soumettant ce formulaire, vous acceptez d'être contacté par TimeTravel Agency
                concernant votre réservation. Vos données sont traitées conformément à notre
                politique de confidentialité.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Confirmer ma réservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
