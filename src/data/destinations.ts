import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Paris 1889',
    slug: 'paris-1889',
    period: 'Exposition Universelle',
    description: 'Découvrez Paris lors de l\'inauguration de la Tour Eiffel et de l\'Exposition Universelle.',
    fullDescription: 'Plongez dans le Paris de la Belle Époque, au cœur de l\'Exposition Universelle de 1889. Assistez à l\'inauguration de la Tour Eiffel, alors controversée et aujourd\'hui symbole mondial. Déambulez dans les pavillons des nations, admirez les innovations technologiques de l\'époque et ressentez l\'effervescence d\'une ville en pleine transformation.',
    imageUrl: 'https://images.pexels.com/photos/2344/eiffel-tower-paris-france-landmark.jpg',
    riskLevel: 'Faible',
    highlights: [
      'Inauguration de la Tour Eiffel',
      'Visite des pavillons de l\'Exposition',
      'Découverte du Paris Belle Époque',
      'Rencontre avec les artistes de Montmartre',
      'Dégustation de la cuisine française authentique'
    ],
    warnings: [
      'Les normes d\'hygiène diffèrent de notre époque',
      'Préparez-vous à une ville sans voitures modernes',
      'La langue française a évolué depuis 1889',
      'Ne mentionnez pas d\'événements futurs'
    ]
  },
  {
    id: '2',
    name: 'Crétacé',
    slug: 'cretace',
    period: 'Ère des Dinosaures',
    description: 'Vivez l\'aventure ultime au temps des dinosaures, il y a 70 millions d\'années.',
    fullDescription: 'Embarquez pour le voyage le plus spectaculaire de votre vie : le Crétacé supérieur, il y a 70 millions d\'années. Observez les majestueux Tyrannosaures, les paisibles Tricératops et les impressionnants Brachiosaures dans leur habitat naturel. Explorez des paysages vierges jamais foulés par l\'homme et découvrez une Terre totalement différente.',
    imageUrl: 'https://images.pexels.com/photos/14936161/pexels-photo-14936161.jpeg',
    riskLevel: 'Élevé',
    highlights: [
      'Observation de dinosaures en liberté',
      'Paysages préhistoriques spectaculaires',
      'Flore et faune uniques',
      'Ciel sans pollution lumineuse',
      'Expérience avec guide paléontologue'
    ],
    warnings: [
      'Danger mortel - Équipement de sécurité obligatoire',
      'Ne quittez JAMAIS votre capsule protectrice',
      'Atmosphère et climat radicalement différents',
      'Communication constante avec l\'équipe requise',
      'Assurance vie spéciale recommandée'
    ]
  },
  {
    id: '3',
    name: 'Florence 1504',
    slug: 'florence-1504',
    period: 'Renaissance italienne',
    description: 'Rencontrez Michel-Ange et Léonard de Vinci au sommet de la Renaissance italienne.',
    fullDescription: 'Voyagez au cœur de la Renaissance italienne dans la Florence de 1504. Assistez à la création de chefs-d\'œuvre immortels, croisez Michel-Ange sculptant son David, observez Léonard de Vinci travailler sur la Joconde. Immergez-vous dans une période d\'effervescence artistique, scientifique et culturelle sans précédent.',
    imageUrl: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg',
    riskLevel: 'Modéré',
    highlights: [
      'Rencontre possible avec les grands maîtres',
      'Ateliers d\'art de la Renaissance',
      'Architecture florentine préservée',
      'Cuisine toscane traditionnelle',
      'Festivités et cérémonies médiévales'
    ],
    warnings: [
      'Société très hiérarchisée - protocole strict',
      'Maladies de l\'époque - vaccinations requises',
      'Conflits politiques entre familles nobles',
      'Tenue vestimentaire d\'époque obligatoire',
      'Latin et italien ancien recommandés'
    ]
  }
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find(dest => dest.slug === slug);
};
