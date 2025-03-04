import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Heart } from 'lucide-react';
import logo from "../image/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const footerLinks = [
    { text: "Accueil", to: "/" },
    { text: "Services", to: "/services" },
    { text: "Blog", to: "/blog" },
    { text: "Contact", to: "/contact" },
    { text: "Mentions légales", to: "/mentions-legales" }
  ];

  const socialLinks = [
    { 
      icon: <Facebook className="w-5 h-5" />, 
      href: "https://www.facebook.com/marc-lawrence-tarologue/",
      color: "#1877f2"
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://www.instagram.com/marc_lawrence_tarologue/",
      color: "#e4405f"
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      href: "https://www.youtube.com/channel/marc-lawrence-tarologue",
      color: "#ff0000"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: "mailto:contact@marclawrence.fr",
      color: "#fbbf24"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center space-y-8 relative z-10">
          {/* Logo and Name */}
          <Link 
            to="/" 
            className="group flex items-center gap-3 transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <img 
                src={logo}
                alt="Logo Marc Lawrence"
                className="w-10 h-10 rounded-full shadow-lg transition-transform duration-500 group-hover:rotate-12"
              />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-bold relative overflow-hidden group-hover:text-yellow-200 transition-colors duration-300">
              Marc Lawrence
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </h3>
          </Link>

          {/* Navigation */}
          <nav className="w-full max-w-2xl">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative text-sm group"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-200">
                      {link.text}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative"
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="relative p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/20">
                  {social.icon}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: social.color }}
                  />
                </div>
                {hoveredIcon === index && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 animate-fade-in">
                    Suivez-nous
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-white/80">
            <span>© {currentYear} Créé avec</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>par Marc Lawrence</span>
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-100 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float-slow" />
      </div>


    </footer>
  );
}

export default Footer;