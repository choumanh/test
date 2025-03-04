// components/AudioPlayer.js
import React from 'react';
import PropTypes from 'prop-types';

const GlobalStyles = () => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-fade-in {
      opacity: 0;
      animation: fadeIn 1s ease-out forwards;
    }
    @keyframes fadeIn {
      to { opacity: 1; }
    }
  `}</style>
);

function AudioPlayer({ url }) {
  return (
    <div className="relative my-8 p-8 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-2xl shadow-lg overflow-hidden animate-fade-in">
      <GlobalStyles />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      </div>
      
      <div className="relative text-center">
        <h3 className="text-2xl font-bold text-yellow-700 mb-4">Écouter la prière</h3>
        <audio 
          controls 
          className="w-full max-w-md mx-auto rounded-lg shadow-md border border-yellow-200"
          style={{ minWidth: '300px' }}
        >
          <source src={url} type="audio/mpeg" />
          Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p className="text-sm text-gray-600 mt-4 italic">
          🎧 Conseil : Utilisez un casque et un environnement calme pour une meilleure expérience
        </p>
      </div>
    </div>
  );
}

AudioPlayer.propTypes = {
  url: PropTypes.string.isRequired
};

export default AudioPlayer;