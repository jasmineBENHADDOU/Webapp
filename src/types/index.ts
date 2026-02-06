export interface Destination {
  id: string;
  name: string;
  slug: string;
  period: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  riskLevel: 'Faible' | 'Modéré' | 'Élevé';
  highlights: string[];
  warnings: string[];
}

export interface TravelPreferences {
  duration: string;
  budget: string;
  style: 'culture' | 'aventure' | 'detente';
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface ReservationForm {
  nom: string;
  email: string;
  destination: string;
  dateDepart: string;
  duree: string;
  budget: string;
  style: string;
  commentaires: string;
}
