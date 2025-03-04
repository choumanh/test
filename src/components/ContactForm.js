import React, { useState } from 'react';
import consul from "../image/contenue/consul.jpg";
import axios from 'axios';

const InputField = ({
  id,
  label,
  type = 'text',
  value,
  focusedField,
  handleChange,
  setFocusedField,
  textarea = false,
  error
}) => {
  const isFocused = focusedField === id;
  const hasValue = Boolean(value);

  return (
    <div className="relative group">
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          rows="4"
          className={`peer w-full px-4 py-3 bg-white/50 border-2 rounded-xl outline-none transition-all duration-300
            ${isFocused ? 'border-yellow-400 shadow-lg' : 'border-gray-200/70 hover:border-yellow-200'}
            ${error ? 'border-red-400/80' : ''}
            focus:shadow-yellow-100/30`}
          aria-required="true"
          aria-describedby={`${id}-error`}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          className={`peer w-full px-4 py-3 bg-white/50 border-2 rounded-xl outline-none transition-all duration-300
            ${isFocused ? 'border-yellow-400 shadow-lg' : 'border-gray-200/70 hover:border-yellow-200'}
            ${error ? 'border-red-400/80' : ''}
            focus:shadow-yellow-100/30`}
          aria-required="true"
          aria-describedby={`${id}-error`}
        />
      )}

      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 cursor-text
          ${hasValue || isFocused ? '-translate-y-7 text-sm scale-90' : 'translate-y-3 text-gray-500 scale-100'}
          ${error ? 'text-red-500' : 'text-yellow-600'}
          origin-left bg-white/50 px-1 backdrop-blur-sm`}
      >
        {label}
      </label>

      <div
        className={`absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-700 ${isFocused ? 'w-full' : ''}`}
      />

      {error && (
        <div id={`${id}-error`} className="text-red-500 text-sm mt-2 flex items-center animate-shake">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!emailRegex.test(formData.email))
      newErrors.email = "Format d'email invalide";
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const apiUrl ='https://mailsender2.vercel.app/mail-sender';
      
      const response = await axios.post(apiUrl, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
    
      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Message envoyé avec succès! 🎉'
        });
        setFormData({ nom: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.data.message || 'Une erreur est survenue. Veuillez réessayer plus tard. 😕'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Erreur réseau. Veuillez vérifier votre connexion kjskjlkjsdhfjsdgfsdhfhjsd. 🌐'
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-50 p-6 flex items-center justify-center relative">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-lg backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.005] transition-all duration-500 ease-out border-2 border-yellow-100/30 relative group">
            <div className="absolute inset-0 rounded-3xl border-2 border-yellow-200/20 pointer-events-none" />

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall-2.png')]" />
              <h1 className="text-4xl font-bold mb-2 relative z-10 animate-fade-in">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                  Contactez-moi
                </span>
                <span className="block w-12 h-1 bg-yellow-300 mt-3 rounded-full transform group-hover:scale-x-125 origin-left transition-transform duration-500" />
              </h1>
              <p className="opacity-95 font-light">Parlons de votre avenir ✨</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6" noValidate>
              {submitStatus && (
                <div
                  className={`p-4 rounded-xl border-l-4 flex items-center animate-fade-in
                    ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 border-green-400 text-green-700'
                        : 'bg-red-50 border-red-400 text-red-700'
                    }
                    shadow-lg backdrop-blur-sm`}
                  role="alert"
                >
                  <svg
                    className={`h-6 w-6 mr-3 ${
                      submitStatus.type === 'success'
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {submitStatus.type === 'success' ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    )}
                  </svg>
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-8">
                <InputField
                  id="nom"
                  label="Votre Nom"
                  value={formData.nom}
                  focusedField={focusedField}
                  handleChange={handleChange}
                  setFocusedField={setFocusedField}
                  error={errors.nom}
                />

                <div className="relative">
                  <InputField
                    id="email"
                    type="email"
                    label="Adresse Email"
                    value={formData.email}
                    focusedField={focusedField}
                    handleChange={handleChange}
                    setFocusedField={setFocusedField}
                    error={errors.email}
                  />
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-2 h-6 w-6 text-yellow-500/80 peer-focus:text-yellow-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <InputField
                  id="message"
                  label="Votre Message"
                  value={formData.message}
                  focusedField={focusedField}
                  handleChange={handleChange}
                  setFocusedField={setFocusedField}
                  textarea={true}
                  error={errors.message}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl text-white font-medium transition-all
                  ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:shadow-lg'
                  }
                  relative overflow-hidden group shadow-md hover:shadow-yellow-200/40 transform hover:scale-[1.02] active:scale-95`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center space-x-2">
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white/50 rounded-full animate-spin" />
                      <span>Envoi en coursdfdfdfrdfsdfsdsdsdsddfd...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 text-yellow-100 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      <span>Envoyez Messfdfdfdfdfdage</span>
                    </>
                  )}
                </div>
              </button>
            </form>

            <div className="text-center mt-6 pb-8">
              <p className="text-gray-600 mb-3">Ou contactez-moi directement :</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="tel:+33656881798"
                  className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M22 16.92V21a1 1 0 01-1.1 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.63A1 1 0 015 2h4.09a1 1 0 011 .75 12.05 12.05 0 00.7 2.45 1 1 0 01-.27 1L8.21 8.21a16 16 0 006 6l2.79-2.79a1 1 0 011-.27 12.05 12.05 0 002.45.7 1 1 0 01.75 1V16.92z"
                    />
                  </svg>
                  Téléphone
                </a>
                <a
                  href="https://wa.me/+33656881798"
                  className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z"
                    />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-[1.01] transition-all duration-500 group">
          <img
            src={consul}
            alt="Lieu de consultation"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-medium">
              Consultation en présentiel ou à distance
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-yellow-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
        }
        .animate-float {
          animation: float 8s infinite ease-in-out;
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};
export default ContactForm;