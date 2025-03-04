import React from 'react';

// Import des images des livres (à ajouter dans votre dossier images)
import papusDivinatoire from "../image/livres/papus-divinatoire.jpg";
import papusBohemiens from "../image/livres/papus-bohemiens.jpg";
import guenon from "../image/livres/guenon.jpg";
import vonFranz from "../image/livres/von-franz.jpg";
import lachaud from "../image/livres/lachaud.jpg";
import gibran from "../image/livres/gibran.jpg";

const books = [
  {
    id: 1,
    title: "Le Tarot Divinatoire",
    author: "Papus",
    image: papusDivinatoire,
    description: "Un ouvrage fondamental sur la pratique divinatoire du tarot, exposant les clés de lecture et d'interprétation des arcanes.",
    year: "1909"
  },
  {
    id: 2,
    title: "Le Tarot des Bohémiens",
    author: "Papus",
    image: papusBohemiens,
    description: "Une étude approfondie des origines ésotériques du tarot et de sa symbolique dans la tradition des tziganes.",
    year: "1889"
  },
  {
    id: 3,
    title: "Le Philosophe Invisible",
    author: "René Guénon",
    image: guenon,
    description: "Une exploration de la dimension métaphysique et traditionnelle de la spiritualité orientale et occidentale.",
    year: "1923"
  },
  {
    id: 4,
    title: "L'Alchimie",
    author: "Marie-Louise Von Franz",
    image: vonFranz,
    description: "Une analyse psychologique profonde des symboles alchimiques et leur relation avec l'inconscient collectif.",
    year: "1979"
  },
  {
    id: 5,
    title: "L'Égypte Ésotérique des Pharaons",
    author: "René Lachaud",
    image: lachaud,
    description: "Une plongée dans les mystères de l'ancienne Égypte et ses traditions spirituelles.",
    year: "1994"
  },
  {
    id: 6,
    title: "Le Prophète",
    author: "Gibran Khalil Gibran",
    image: gibran,
    description: "Un chef-d'œuvre poétique et philosophique sur la sagesse spirituelle et les questions existentielles.",
    year: "1923"
  }
];

function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[3/4] relative overflow-hidden group">
        <img 
          src={book.image} 
          alt={`Couverture de ${book.title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h3>
        <p className="text-yellow-600 font-semibold mb-4">
          {book.author} • {book.year}
        </p>
        <p className="text-gray-600 text-sm line-clamp-3">
          {book.description}
        </p>
      </div>
    </div>
  );
}

function Bibliotheque() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            Bibliothèque de Référence
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto animate-fade-in-delayed">
            Découvrez les ouvrages essentiels qui ont façonné ma pratique et ma compréhension du tarot
          </p>
        </div>
      </div>

      {/* Grid de livres */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
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

export default Bibliotheque;