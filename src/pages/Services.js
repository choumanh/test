import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, Users, BookOpen, Sparkles } from 'lucide-react';
import AudioPlay from "../components/AudioPlay";
import tarot_formation from "../image/tarot-formation.jpg"
import tarot_1 from "../image/tarot-1.jpg"
import une from "../image/une.jpg"
import deux from "../image/deux.jpg"
import jeu from "../image/papus/complet.jpg"
import part from "../image/papus/part.jpg"
import complet from "../image/papus/complet-22.jpg"
import decouv from "../image/papus/devouv.jpg"
import voyanceDomicile from "../image/cabine/voyanceDomicile.jpg"

function ServiceCard({ title, content, price, icon: IconComponent, features, buttonText = "Me contacter" , image}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative">
        {/* Header with icon */}
        <div className="h-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
            
            {/* <IconComponent className="w-20 h-20 text-white" /> */}
            <div className="relative w-full h-full">
  {/* Image de fond floutée */}
  <div
    className="absolute inset-0 bg-cover bg-center blur-lg brightness-750"
    style={{ backgroundImage: `url(${image})` }}
  ></div>

  {/* Image principale */}
  <div className="relative w-full h-full flex items-center justify-center">
    {image ? (
      <img 
        src={image} 
        alt={title}
        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105 z-10"
      />
    ) : (
      <IconComponent className="w-20 h-20 text-white z-10" />
    )}
  </div>
</div>

          </div>
          {/* Price tag */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-yellow-600 font-bold">{price}</span>
          </div>
        </div>

        {/* Content section */}
        <div className="p-8 relative">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {content}
          </p>
          

          {/* Features list with animated icons */}
          {features && (
            <ul className="space-y-4 mb-8">
              {features.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center text-gray-600 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Button section */}
          <div className="pt-6 border-t border-gray-100">
            <Link 
              to="/contact"
              className="w-full block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-xl font-medium relative overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {buttonText}
                <ChevronRight className={`w-4 h-4 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          </div>
        </div>
        

    
      </div>
    </div>
  );
}

function Services() {
  const [selectedCategory, setSelectedCategory] = useState('formations');

  const categories = [
    { 
      id: 'formations', 
      label: 'Formations & Stages',
      icon: BookOpen
    },
    { 
      id: 'consultations', 
      label: 'Consultations',
      icon: Clock
    },
    { 
      id: 'etudes', 
      label: 'Études Spécialisées',
      icon: Star,
      image: tarot_formation,
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      {/* Hero Section with animated background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float-delayed" />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 animate-fade-in">
            Mes services de tarologie
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-white/90 animate-fade-in-delayed leading-relaxed">
            Découvrez mes différentes prestations pour vous accompagner dans votre cheminement personnel
          </p>
        </div>
        {/* <div className="mt-12 border-t border-gray-200 pt-8"> */}
        <AudioPlay url={"/audio/precisons.mp3"} />

      {/* </div> */}
      </div>


      {/* Category Navigation with icons */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-500 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg scale-105'
                      : 'bg-white/50 text-gray-700 hover:bg-yellow-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {selectedCategory === 'formations' && (
            <>
              <ServiceCard
                title="Stage Découverte"
                image={decouv}
                content="Introduction aux bases du tarot sur 8 heures. Idéal pour débuter votre voyage dans l'univers du tarot."
                features={[
                  '8 heures de formation',
                  "2h le matin, 2h l'après-midi",
                  'Support de cours fourni',
                  'Groupes limités'
                ]}
                price="150€"
              />
              <ServiceCard
                title="Stage Interprétation"
                image = {jeu}
                content="Approfondissez vos connaissances avec 16 heures de formation intensive sur l'art de l'interprétation."
                features={[
                  '16 heures de formation',
                  'Pratique approfondie',
                  'Exercices personnalisés',
                  'Suivi personnalisé'
                ]}
                price="250€"
              />
              <ServiceCard
                title="Formation Complète"
                image={complet}
                content="Le parcours complet incluant les 3 niveaux : Découverte, Interprétation et Tirage (28 heures)."
                features={[
                  '28 heures de formation totale',
                  'Les 3 niveaux inclus',
                  "Aide à l'installation",
                  'Suivi post-formation'
                ]}
                price="500€"
              />
            </>
          )}

          {selectedCategory === 'consultations' && (
            <>
              <ServiceCard
                title="Voyance - Une question"
                image={une}
                content="Posez une question et recevez une réponse éclairante pour guider votre chemin."
                features={[
                  'Réponse rapide',
                  'Analyse intuitive'
                ]}
                price="20€"
              />
              <ServiceCard
                title="Voyance - Deux questions"
                image={deux}
                content="Obtenez des éclaircissements sur deux aspects de votre vie grâce à une lecture approfondie."
                features={[
                  'Double analyse',
                  'Conseils personnalisés'
                ]}
                price="30€"
              />
              <ServiceCard
                title="Voyance - Jeu des Douze Maisons"
                image={jeu}
                content="Une inspection de l'année en cours sur l'ensemble des situations rencontrées par le consultant."
                features={[
                  'Lecture complète',
                  'Interprétation détaillée'
                ]}
                price="50€"
              />

              <ServiceCard
                title="Voyance à Domicile"
                image={voyanceDomicile} // Remplacez par l'image spécifique pour la voyance à domicile
                content="Une séance de voyance personnalisée directement chez vous, dans un cadre intime et apaisant. Disponible exclusivement le vendredi."
                features={[
                  'Service à domicile (vendredi uniquement)'
                ]}
                price="Sur Devis"
              />

            </>
          )}

          {selectedCategory === 'etudes' && (
            <>
              <ServiceCard
                title="Compatibilité Astrologique"
                image={tarot_1}
                content="Analyse de la compatibilité des signes astrologiques pour évaluer l'harmonie en vue d'un mariage."
                features={[
                  'Analyse détaillée',
                  'Conseils personnalisés'
                ]}
                price="40€"
              />
              <ServiceCard
                title="Étude Partenariat Professionnel"
                image={part}
                content="Évaluation de la compatibilité professionnelle pour partenaires, employés ou autres collaborations."
                features={[
                  'Analyse approfondie',
                  'Conseils adaptés'
                ]}
                price="60€"
              />
              <ServiceCard
                title="Étude Bien-Être Personnalisée"
                image={tarot_formation}
                content="Programme personnalisé pour la perte de poids, le renforcement musculaire et les soins de peau. (Devis sur demande)"
                features={[
                  'Programme sur-mesure',
                  'Suivi individualisé'
                ]}
                price="Devis"
              />
            </>
          )}
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Une prestation sur-mesure ?</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vous souhaitez une prestation personnalisée ou avez des questions ? 
                N'hésitez pas à me contacter pour en discuter !
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transform transition-all duration-300 hover:scale-105 font-medium"
              >
                Me contacter
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-transparent" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 15s ease-in-out infinite;
          animation-delay: -7.5s;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-delayed {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 0.3s;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Services;
