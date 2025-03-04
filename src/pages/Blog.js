// Blog.js
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import blogsData from '../data/blogs';
import site10 from "../image/carr/site10.png"

const GlobalStyles = () => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-25px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-delayed {
      animation: float 6s ease-in-out infinite;
      animation-delay: -3s;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in {
      opacity: 0;
      animation: fadeIn 1.2s ease-out forwards;
    }
    .animate-fade-in-delayed {
      opacity: 0;
      animation: fadeIn 1.2s ease-out forwards;
      animation-delay: 0.4s;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      opacity: 0;
      animation: fadeInUp 1s ease-out forwards;
    }
  `}</style>
);

function BlogList() {
  // Définition des catégories principales
  const mainCategories = [
    "Tout",
    "Tarot & Méthodes",
    "Parcours Professionnel",
    "Engagements Humanitaires",
    "Culture, Art & Rituels"
  ];

  // État de la catégorie sélectionnée (par défaut "Tout")
  const [selectedMainCategory, setSelectedMainCategory] = useState("Tout");

  // Mapping entre la catégorie détaillée et la grande catégorie
  const mainCategoryMapping = {
    "Arcanes Majeurs": "Tarot & Méthodes",
    "Interprétation": "Tarot & Méthodes",
    "Méthodes": "Tarot & Méthodes",
    "Méthodes Avancées": "Tarot & Méthodes",
    "Parcours Professionnel": "Parcours Professionnel",
    "Engagements Humanitaires": "Engagements Humanitaires",
    "Culture & Art": "Culture, Art & Rituels",
    "Rituels Ésotériques": "Culture, Art & Rituels",
    "Rituels et Traditions": "Culture, Art & Rituels",
    "Ésotérisme & Alchimie": "Culture, Art & Rituels",
  };

  // Filtrage des articles selon la catégorie sélectionnée
  const filteredBlogs = selectedMainCategory === "Tout"
    ? blogsData
    : blogsData.filter((blog) => {
        const blogMainCat = mainCategoryMapping[blog.category] || blog.category;
        return blogMainCat === selectedMainCategory;
      });

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <GlobalStyles />
      
      {/* Section Hero */}
      <div
  className="relative overflow-hidden bg-cover bg-center min-h-screen"
  style={{ backgroundImage: `url(${site10})` }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative container mx-auto px-4 flex flex-col items-center justify-center h-full">
    <h1 className="text-5xl md:text-8xl font-extrabold text-center mb-4 animate-fade-in text-yellow-600 py-96">
      Le Blog du Tarot
      <p className=" md:text-5xl text-center  mx-auto animate-fade-in-delayed text-white py-8">
      Plongez dans l'univers mystique et captivant du tarot avec des articles riches et inspirants.
    </p>
    </h1>
    <div className="container mx-auto px-4 mb-12">
    <div className="flex flex-wrap justify-center gap-4">
      {mainCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedMainCategory(cat)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-transform duration-300 transform hover:scale-105 hover:shadow-xl 
            ${
              selectedMainCategory === cat
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-300 hover:text-gray-900'
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  
</div>

  </div>
</div>




      {/* Onglets de catégories */}

      
      {/* Grille des articles */}
      <div className="container mx-auto px-4 py-16">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog._id}
                to={`${blog.slug}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  {blog.images && blog.images.length > 0 ? (
                    <div className="relative w-full h-full">
                      {/* Image de fond floutée */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${blog.images[0]})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          filter: 'blur(8px) brightness(0.85)',
                        }}
                      />
                      {/* Image principale */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={blog.images[0]}
                          alt={blog.title}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">🌟</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="text-yellow-600 hover:text-yellow-700 transition-colors duration-200">
                      Lire la suite →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Aucun article pour ce thème.</p>
        )}
      </div>
    </div>
  );
}

function Blog() {
  return (
    <Routes>
      <Route path="" element={<BlogList />} />
      <Route path=":slug" element={<BlogPost blogs={blogsData} />} />
    </Routes>
  );
}

export default Blog;
