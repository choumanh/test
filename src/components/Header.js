import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown, Book, Home, Phone, Info } from 'lucide-react';
import logo from "../image/logo.png";
import { FaTiktok } from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // New SocialIcon component with tooltip on hover.
  const SocialIcon = ({ Icon, href, tooltip }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative p-2 text-white rounded-lg hover:bg-yellow-400/20 transition-colors duration-300 flex items-center justify-center"
    >
      <Icon className="w-8 h-8" />
      {tooltip && (
        <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
          {tooltip}
        </span>
      )}
    </a>
  );

  const navGroups = [
    {
      label: "Découvrir",
      icon: <Info className="w-5 h-5" />,
      links: [
        { to: "/qui-suis-je", text: "Qui suis-je ?", description: "En savoir plus sur moi" },
        { to: "/a-propos", text: "À propos", description: "Notre histoire et valeurs" }
      ]
    },
    {
      label: "Ressources",
      icon: <Book className="w-5 h-5" />,
      links: [
        { to: "/bibliotheque", text: "Bibliothèque", description: "Accédez à nos ressources" },
        { to: "/blog", text: "Blog", description: "Articles et actualités" },
        { to: "/services", text: "Services", description: "Découvrez nos services" }
      ]
    }
  ];

  const primaryLinks = [
    { to: "/", text: "Accueil", icon: <Home className="w-5 h-5" /> },
    { to: "/contact", text: "Contact", icon: <Phone className="w-5 h-5" /> }
  ];

  // For TikTok we add a tooltip, Facebook remains without extra text.
  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100094566349279" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/@marclawrence10"},
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 shadow-lg bg-gradient-to-r from-yellow-400/95 via-yellow-500/95 to-yellow-600/95 ' 
          : 'py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="relative group flex items-center text-white text-4xl font-bold transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={logo}
              alt="Logo Marc Lawrence" 
              className="h-12 w-12 mr-2 transition-transform duration-300 group-hover:rotate-6" 
            />
            <span className="relative hidden sm:block">
              Marc Lawrence
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {/* Primary Links */}
            {primaryLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center px-3 py-2 text-white text-xl rounded-lg hover:bg-yellow-400/20 transition-colors duration-300"
              >
                {link.icon}
                <span className="ml-2">{link.text}</span>
              </Link>
            ))}

            {/* Grouped Navigation Dropdowns */}
            {navGroups.map((group) => (
              <div 
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center px-3 py-2 text-white text-xl rounded-lg hover:bg-yellow-400/20 transition-colors duration-300"
                >
                  {group.icon}
                  <span className="ml-2">{group.label}</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>

                {activeDropdown === group.label && (
                  <div className="absolute top-full left-0 w-64">
                    {/* Invisible bridge to prevent hover gap */}
                    <div className="h-2"></div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      {group.links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="block px-4 py-3 hover:bg-yellow-50 transition-colors duration-300"
                        >
                          <div className="text-gray-900 font-medium">{link.text}</div>
                          <div className="text-sm text-gray-500">{link.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Social Icons Section */}
            <div className="flex items-center space-x-4 ml-4">
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-yellow-400/20 rounded-lg transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-yellow-500 bg-opacity-98 backdrop-blur-sm transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '0', zIndex: 40 }}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2 hover:bg-yellow-400/20 rounded-lg transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-1 mt-6">
              <ul className="space-y-4">
                {primaryLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center text-white text-xl font-medium py-2 hover:bg-yellow-400/20 rounded-lg px-4 transition-colors duration-300"
                    >
                      {link.icon}
                      <span className="ml-2">{link.text}</span>
                    </Link>
                  </li>
                ))}
                
                {navGroups.map((group) => (
                  <li key={group.label} className="space-y-2">
                    <div className="flex items-center text-white text-xl font-medium px-4 py-2">
                      {group.icon}
                      <span className="ml-2">{group.label}</span>
                    </div>
                    <ul className="pl-8 space-y-2">
                      {group.links.map((link) => (
                        <li key={link.to}>
                          <Link
                            to={link.to}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-white text-lg py-2 hover:bg-yellow-400/20 rounded-lg px-4 transition-colors duration-300"
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto">
              <div className="flex justify-center space-x-6 py-6">
                {socialLinks.map((social, index) => (
                  <SocialIcon key={index} {...social} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
