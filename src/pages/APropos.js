import React from 'react';
import marc from "../image/Marc.jpg";
import { FaTiktok } from 'react-icons/fa';

function APropos() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      {/* Section Principale avec fond dégradé */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float-delayed" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            À propos de Marc Lawrence
          </h1>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Conteneur de l'image */}
            <div className="w-full md:w-1/3 flex justify-center animate-slide-in">
              <div className="relative group">
                <img 
                  src={marc} 
                  alt="Marc Lawrence" 
                  className="w-64 h-64 object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center top' }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Texte d'introduction */}
            <div className="w-full md:w-2/3 text-center md:text-left animate-slide-in-delayed">
              <p className="text-xl mb-6 leading-relaxed">
                Marc Lawrence est un tarologue passionné avec plus de 40 ans d'expérience. Formé auprès de grands noms de la tarologie, il a développé sa propre approche, basée sur l'écoute, l'intuition et la bienveillance.
              </p>
              <p className="text-xl leading-relaxed">
                Son objectif est d'aider chacun à mieux se connaître, à faire des choix éclairés et à avancer sereinement sur son chemin de vie, en s'appuyant sur la sagesse des arcanes.
              </p>
            </div>
          </div>
          
          {/* Section Live TikTok avec icône cliquable et animations innovantes */}
          <div className="mt-10 flex justify-center animate-fade-in-up delay-300">
            <a 
              href="https://www.tiktok.com/@marclawrence10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-4 px-8 py-6 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl shadow-2xl backdrop-blur-md transform transition duration-500 hover:scale-105"
            >
              <FaTiktok className="w-12 h-12 text-white animate-bounce" />
              <p className="uppercase text-xl md:text-2xl font-bold text-white">
                Retrouvez moi en live sur TikTok tous les lundis de 14h à 15h30 et les samedis de 23h à 0h30.
              </p>
            </a>
          </div>
          
        </div>
      </div>

      {/* Sections de contenu complémentaires */}
      <div className="container mx-auto px-4 -mt-16 relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Approche */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-yellow-700 mb-6">Mon approche du tarot</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Le tarot est pour moi un outil précieux de développement personnel. Loin des clichés de prédiction, je l'utilise comme un miroir pour aider mes consultant·es à mieux comprendre leur situation et leurs aspirations profondes.
              </p>
              <p className="leading-relaxed">
                Je crée un espace d'écoute bienveillante où la personne peut explorer ce qui fait sens pour elle. Le tarot vient enrichir ce dialogue, en offrant un éclairage symbolique et en ouvrant de nouvelles perspectives.
              </p>
            </div>
          </div>

          {/* Carte Triangle Sacré */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 animate-fade-in-up delay-100">
            <h2 className="text-2xl font-bold text-yellow-700 mb-6">Le Triangle Sacré</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Le médium est un intermédiaire par lequel l'invisible manifeste sa volonté. La lecture des tarots repose sur la symbiose du triangle sacré : le consultant, le médium et son tarot, élevé par la lumière de la connaissance.
              </p>
              <p className="leading-relaxed">
                L'honnêteté du praticien est primordiale, tout comme le libre arbitre du consultant. Cette relation unique permet d'accéder aux révélations des arcanes dans un cadre respectueux et bienveillant.
              </p>
            </div>
          </div>
        </div>

        {/* Section Rituels */}
        <div className="mt-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-yellow-700 mb-6">Les Rituels Essentiels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-600">La Préparation</h3>
              <p className="leading-relaxed">
                Avant chaque consultation, un rituel de purification est effectué avec un bain de sauge et de sel marin. La séance est accompagnée de prières et parfois d'incantations de déverrouillage, créant ainsi un espace sacré propice à la lecture.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-600">La Consultation</h3>
              <p className="leading-relaxed">
                La consultation est un acte personnel entre le praticien et le consultant. Le respect des conditions optimales, comme la posture décroisée et la clarté de la question, permet d'établir une connexion authentique avec les arcanes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: -3s;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-in {
          opacity: 0;
          transform: translateX(-20px);
          animation: slideIn 1s ease-out forwards;
        }
        .animate-slide-in-delayed {
          opacity: 0;
          transform: translateX(20px);
          animation: slideIn 1s ease-out forwards;
          animation-delay: 0.3s;
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}

export default APropos;
