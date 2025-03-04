import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AudioPlayer from './AudioPlayer';
function ImageCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div key={idx} className="relative h-80">
          <img 
            src={img} 
            alt={`Slide ${idx}`} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full max-w-full object-contain" 
          />
        </div>
      ))}
    </Slider>
  );
}



ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function BlogPost({ blogs }) {
  const { slug } = useParams();
  
  if (!blogs) {
    return (
      <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="container mx-auto px-4 py-16">
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="container mx-auto px-4 py-16">
          <p>Article non trouvé</p>
          <Link to=".." className="text-yellow-600 hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  // On récupère un tableau d'images à partir de "images" ou de "imageUrl"
  const images = blog.images && blog.images.length > 0 
    ? blog.images 
    : blog.imageUrl 
      ? [blog.imageUrl] 
      : [];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        <Link to=".." className="text-yellow-600 hover:underline mb-8 inline-block">
          ← Retour au blog
        </Link>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
  {images.length > 0 ? (
    <div className="mb-8">
      <ImageCarousel images={images} />
    </div>
  ) : (
    <div className="relative h-64 overflow-hidden bg-yellow-100">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl">🌞</div>
      </div>
    </div>
  )}

  <div className="p-8">
    <div className="mb-4">
      <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
        {blog.category}
      </span>
    </div>

    <h1 className="text-4xl font-bold mb-6 text-gray-800">
      {blog.title}
    </h1>

    {/* Zone avec le texte et l'image côte à côte */}
    <div className="flex flex-col md:flex-row items-start gap-8">
      <div className="flex-1 prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
      {blog.imageAside && (
        <div className="flex-shrink-0">
          <img
            src={blog.imageAside}
            alt="Image additionnelle"
            className="w-80 h-auto rounded-xl shadow-lg"
          />
        </div>
      )}
    </div>

    {blog.audioUrl && (
      <div className="mt-12 border-t border-gray-200 pt-8">
        <AudioPlayer url={blog.audioUrl} />
      </div>
    )}

    <div className="mt-8 text-sm text-gray-500">
      <p>
        Publié le {new Date(blog.createdAt).toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </p>
      {blog.updatedAt && (
        <p>
          Dernière mise à jour le {new Date(blog.updatedAt).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>
      )}
    </div>
  </div>
</article>



      </div>
      
    </div>
    
  );
}

BlogPost.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    })
  ).isRequired
};

export default BlogPost;
