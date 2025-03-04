import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Sun, Moon, Sparkles } from 'lucide-react';

// Import des images originales
import cabinetCI from "../image/cabinet-ci.jpg";
import cabinet1989 from "../image/cabinet-1989.jpg";
import humanitarian from "../image/yougos/carte.png";
import artPlastique from "../image/art-plastique.jpg";
import afric_humanitaire from "../image/art/afric_humanitaire.jpg";
import pdf from "../image/contenue/pdf.jpg";
import cylcone from "../image/gua/des.jpg";

function TimelineEvent({ year, title, content, image, right = false, blogSlug }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={blogSlug ? `/blog/${blogSlug}` : '#'} className="block">
      <div 
        className={`flex flex-col md:flex-row items-stretch gap-8 ${right ? 'md:flex-row-reverse' : ''} opacity-0 animate-fade-in-up`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full md:w-1/2 flex">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center w-full relative overflow-hidden group">
            {/* Fond animé */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-600" />
                <span className="text-yellow-600 font-bold text-lg">{year}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">{content}</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative rounded-2xl shadow-lg overflow-hidden group h-full">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5" />
                <span className="font-medium">{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ArticleDownload({ title, description, file, previewUrl, previewImage }) {
  // Ouvre le PDF dans un nouvel onglet directement dans le navigateur
  const handleOpen = (e) => {
    e.preventDefault();
    window.open(previewUrl || file, '_blank');
  };

  return (
    <div className="h-full">
      <div className="block h-full bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
        <div className="flex items-start gap-6">
          {/* Zone d'aperçu du PDF */}
          <div className="flex-shrink-0 w-32 h-32 rounded-xl bg-yellow-50 overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
  {previewImage ? (
    <img 
      src={previewImage} 
      alt="Aperçu du PDF" 
      className="w-full h-full object-cover"
    />
  ) : (
    <Moon className="w-full h-full p-2" />
  )}
</div>


          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
              {title}
            </h3>
            {description && <p className="text-gray-600 mb-4">{description}</p>}

            <button 
              onClick={handleOpen}
              className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors font-medium group"
            >
              <Sparkles className="w-5 h-5 transform transition-transform duration-300 group-hover:scale-110" />
              <span>Voir l'article</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuiSuisJe() {
  const [selectedTab, setSelectedTab] = useState('parcours');

  const tabs = [
    { id: 'parcours', label: 'Parcours Professionnel', icon: Sun },
    { id: 'humanitarian', label: 'Engagements Humanitaires', icon: Moon },
    { id: 'publications', label: 'Publications', icon: Star }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      {/* Hero Section avec animation améliorée */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float-delayed" />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 animate-fade-in">
            Mon Parcours
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto text-white/90 animate-fade-in-delayed leading-relaxed">
            Découvrez mon histoire, mes engagements et mes contributions dans l'univers du tarot
          </p>
        </div>
      </div>

      {/* Navigation améliorée */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-500 ${
                    selectedTab === tab.id
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg scale-105'
                      : 'bg-white/50 text-gray-700 hover:bg-yellow-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sections de contenu */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="space-y-24">
          {selectedTab === 'parcours' && (
            <div className="space-y-24">
              <TimelineEvent
                year="1989"
                title="Ouverture du centre d'études et de recherches en sciences traditionnelles"
                content="En 1989, je découvre la Guadeloupe à travers l'ouverture de mon centre d'études et de recherches en sciences traditionnelles, un lieu dédié à l'exploration des savoirs anciens et à la pratique du tarot."
                image={cabinet1989}
                blogSlug="ouverture-du-premier-cabinet"
              />
            <TimelineEvent
              year="2000-2022"
              title="Professeur d'Arts Plastiques et d'Histoire de l'Art"
              content="Parallèlement à ma pratique du tarot, j'ai enseigné les arts plastiques et l'histoire de l'art, soulignant l'importance de la symbolique et du contexte historique dans l'expression artistique."
              image={artPlastique}
              right
              blogSlug="professeur-d-arts-plastiques"
            />

              <TimelineEvent
                year="2010-2022"
                title="Cabinet en Côte d'Ivoire"
                content="Expansion de ma pratique avec l'ouverture d'un nouveau cabinet en Côte d'Ivoire."
                image={cabinetCI}
                blogSlug="cabinet-en-cote-divoire"
              />
            </div>
          )}

          {selectedTab === 'humanitarian' && (
            <div className="space-y-24">
            <TimelineEvent
              year="1995"
              title="Envoyé spécial pour le conflit en ex-Yougoslavie sur Sarajevo"
              subtitle="Envoyé spécial pour le conflit en ex-Yougoslavie sur Sarajevo"
              content="Participation à des missions humanitaires, apportant aide et soutien aux populations touchées par le conflit. Utilisation du tarot comme outil thérapeutique."
              image={humanitarian}
              blogSlug="missions-en-ex-yougoslavie"
            />

              <TimelineEvent
                year="2000-2022"
                title="Aide Humanitaire en Afrique"
                content="Organisation de missions d'aide et de soutien psychologique en Afrique. Développement de techniques d'accompagnement par le tarot."
                image={afric_humanitaire}
                right
                blogSlug="aide-humanitaire-en-afrique"
              />
            </div>
          )}

          {selectedTab === 'publications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Article avec aperçu du PDF */}
              <ArticleDownload 
                title="Le Cyclone Hugo : Une Nuit de Dévastation" 
                description="Récit poignant du passage du cyclone Hugo en Guadeloupe en 1989, entre chaos et résilience." 
                file="/pdfs/cyclone_hugo.pdf" 
                previewUrl="/pdfs/hugo.pdf" 
                previewImage={cylcone}  // Remplacez par le chemin d'une image représentative du PDF
              />  
              <ArticleDownload 
                title="Les Mystères des Quimboiseurs en Caraïbe" 
                description="Plongée fascinante dans les croyances et pratiques des quimboiseurs, gardiens des mystères caribéens." 
                file="/pdfs/caraibe.pdf" 
                previewUrl="/pdfs/caraibe.pdf"
                previewImage={pdf} 
              />  
            </div>
          )}
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
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default QuiSuisJe;
