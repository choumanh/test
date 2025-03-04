import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Acceuil';
import APropos from './pages/APropos';
import QuiSuisJe from './pages/QuiSuisJe';  // Ajout de l'import
import Bibliotheque from './pages/Bibliotheque';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Temoignages from './pages/Temoignages';
import Blog from './pages/Blog';
import MentionsLegales from './pages/MentionsLegales';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/qui-suis-je" element={<QuiSuisJe />} />  {/* Nouvelle route */}
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/Bibliotheque" element={<Bibliotheque/>}/>
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;