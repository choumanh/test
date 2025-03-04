import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import onze from "../image/carr/11.png"
import leonard  from "../image/carr/leonard_de_vinci.png"
import site_15 from "../image/carr/site_15.png"
import site15 from "../image/carr/site15.png"
import site17 from "../image/carr/site17.png"
import site16 from "../image/carr/site16.png"
import AudioPlaye from "../components/AudioPlaye.js";
// Composant pour le carrousel de cartes
const TarotCarousel = () => {
  const cards = [
    { id: 1,  image:onze},
    { id: 2,  image: site15 },
    { id: 3,  image: site_15 },
    { id: 4,  image: leonard },
    { id: 5,  image: site17 },
    { id: 6,  image: site16 },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentCard((prev) => (prev + 1) % cards.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
<div 
      className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-yellow-100 to-yellow-50 p-2 md:p-4 transform hover:scale-[1.02] transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentCard * 100}%)` }}
      >
        {cards.map((card, index) => (
            <div key={card.id} className="min-w-full p-1 md:p-2">
            <div className="flex flex-col">
            <div className="relative aspect-[2/3] rounded-xl overflow-hidden group">
              <img
                src={card.image}
                alt={`Carte du tarot - ${card.name}`}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-2xl font-bold text-center">
                  {card.name}
                </p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentCard === index ? 'bg-yellow-500 w-4' : 'bg-yellow-300'
            }`}
            onClick={() => setCurrentCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Composant pour la section de présentation
const Introduction = () => (
  
  <div className="space-y-4 md:transform md:hover:scale-[1.02] transition-all duration-500">
    
    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 py-2 animate-fade-in">
  Votre guide dans l'univers du tarot
</h2>
<p className="text-base md:text-xl text-gray-700 leading-relaxed animate-fade-in">
  Marc Lawrence, tarologue expérimenté, vous accompagne dans votre cheminement personnel. 
  Découvrez comment le tarot peut vous aider à prendre des décisions éclairées 
  et à réaliser votre plein potentiel.
</p>

    <div className="text-gray-700 space-y-4 text-sm md:text-base animate-fade-in">
  <p>
    Au plus loin que je me souvienne, j'ai toujours eu en ma possession un jeu de tarot. Le premier me fut offert par un ami, le fils d'une voyante de notre quartier. J'avais à peine 13 ans.
  </p>
  <p>
    Dès lors, les parents d'élèves, les relations de ma famille se pressaient à la porte de mes parents pour des consultations de plus en plus nombreuses.
  </p>
  <p>
    Devant une prédisposition certaine, ma mère me confiait un jour que mon arrière-grand-père possédait ce don de voyance et que elle-même en avait hérité pour me le transmettre à son tour. Très tôt, je multipliais les expériences parapsychologiques, voyages dans l'astral, spiritisme, voyance, ce qui devait m'amener tout naturellement à l'ouverture de mon premier cabinet de consultation, je venais d'avoir mes 16 ans.
  </p>
  <p>
    Une expérience de courte durée qui marquera malgré tout le début d'une longue carrière. Mes recherches dans le domaine de l'occultisme me conduiront dans les Caraïbes, au Brésil, en Afrique à la recherche de nos racines profondes et de ceux qui les préservent.
  </p>
  <p>
    Les qimboiseurs de la Guadeloupe, les féticheuses d'Aniansue de Côte d'Ivoire, le Macumba du Brésil ou le Maraké d'Amazonie. Autant de souvenirs riches et envoûtants qui nourrissent depuis un quotidien voué à l'interprétation des tarots.
  </p>
  <p>
    De retour sur notre belle région des Landes, je suis en mesure de vous offrir l'occasion de nous retrouver, voire de nous rencontrer, d'échanger aussi bien dans mon cabinet de consultation que par téléphone ou à travers les lives de mon compte TikTok. Je vous propose une expérience unique établie dans le respect, la fraternité, l'honnêteté. Nous lèverons le voile de vos incertitudes pour entreprendre le meilleur chemin qui soit et trouver la clé de votre réussite. Je vous offre un suivi des prédictions définies au cours de votre consultation.
  </p>
  <p>
    Pour le règlement de mes honoraires, une fois la consultation terminée, si vous jugez ne pas avoir reçu l'aide espérée, vous ne me devriez rien ! Et nous garderons de bonnes relations. Ce qui compte avant tout c'est de créer un climat de confiance nous garantissant le succès réciproque de nos entreprises. Bonne route.
  </p>
</div>



    <Link
      to="/services"
      className="inline-block bg-gradient-to-r  from-yellow-400 via-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:brightness-110 text-sm md:text-base"

    >
      Découvrir mes services
    </Link>
    
  </div>
  
);

// Composant amélioré pour les témoignages


const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1, 
      text: "Merci d'avoir été celui que vous êtes, cette personne extraordinaire, magique.",
      name: "DJ"
    },
    {  
      id: 2,
      text: "Merci d'avoir été présent, d'avoir été la personne incroyable et formidable, merci pour tout.", 
      name: "MM"
    },
    {
      id: 3,
      text: "Bonjour Monsieur je vous écrit quelque mots pour vous remercier mille et une fois pour vos conseils que je n'oublierai jamais.",
      name: "EM" 
    },
    {
      id: 4,
      text: "C'est avec des larmes qui me montent aux yeux que je vous écris, c'est aujourd'hui plus épanouie que jamais que je vous remercie.",
      name: "MM"
    },
    {
      id: 5, 
      text: "Je vous écris pour vous remercier, Je vous fait tellement confiance que je me sens en sécurité près de vous.",
      name: "LL"
    },
    {
      id: 6,
      text: "Je vous écris cette lettre pour vous dire à quel point je vous suis reconnaissante. Je suis heureuse que Dieu vous ai mis sur mon chemin.",
      name: "HS"
    },
    {  
      id: 7,
      text: "Vous êtes un homme gentil, une très belle personne. Je vous admire pour votre sagesse et votre bonté. Merci merci.", 
      name: "KF"
    },
    {
      id: 8, 
      text: "Vous nous manquez énormément mais je suis convaincue que vous continuerez à inspirer et à toucher la vie de nombreuses autres personnes. Merci pour ce que vous avez fait pour nous.",
      name: "HY"
    },
    {
      id: 9,
      text: "Vos paroles aujourd'hui me permettent de me ressaisir, je gâchait mon avenir, merci pour ce que vous faites pour moi.",  
      name: "FS"
    },
    {
      id: 10,
      text: "Je vous ai jamais dit ça mais vous êtes l'un des meilleurs que j'ai connu dans ma vie.",
      name: "ZZ"  
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return (
    
    <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-xl p-10 mt-16">
      <AudioPlaye url={"/audio/prie.mp3"} />
      <h2 className="text-3xl font-bold text-yellow-600 mb-12 text-center">
      Témoignages touchants  
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Testimonials Section */}
        <div className="relative bg-white p-8 rounded-xl shadow-lg border border-yellow-200">
          <div className="absolute -top-4 -left-4 text-6xl text-yellow-400 opacity-30">"</div>
          
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  index === activeTestimonial
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8 absolute'  
                }`}
              >
                <div className="italic text-gray-700 text-xl leading-relaxed mb-4">
                  {testimonial.text}
                </div>
                <div className="text-right">
                  <p className="font-medium text-yellow-600 non-italic">
                    - {testimonial.name}  
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-4 -right-4 text-6xl text-yellow-400 opacity-30">
            "
          </div>
        </div>
                
        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index} 
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'bg-yellow-500 w-8'
                  : 'bg-yellow-300'
              }`}
              aria-label={`Témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// export default Testimonial;

// Composant principal
const Accueil = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center  text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 animate-fade-in ">
          Bienvenue sur le site de Marc Lawrence
          <br />
          

        </h1>
        <div className="text-5xl md:text-6xl container mx-auto py-6 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-blue-300 transition-all duration-500 transform hover:scale-105 hover:from-blue-300 hover:to-yellow-600 hover:drop-shadow-lg">
  Astrologie & Voyance
</div>


          <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed" />
        </div>
        
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          <div className="h-200">
            
            <TarotCarousel />
          </div>
          
          <div className="flex flex-col justify-center">
            <Introduction />
            
          </div>
        </div>
        <Testimonial />
        
        <div className="text-center mt-12">
          <Link
            to="/a-propos"
            className="inline-block bg-white text-yellow-600 border-2 border-yellow-400 px-8 py-4 rounded-full font-medium hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Qui suis-je ?
          </Link>
          
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
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Accueil;