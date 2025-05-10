
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  // Détection du scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour changer de langue
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'fr' ? 'it' : currentLanguage === 'it'? 'en' : 'fr';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 shadow-md py-2 text-black' 
          : 'bg-transparent py-4 text-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Squisito Logo" 
            className="h-12 mr-4 rounded-full" 
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-2">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('home')}
            className="text-italian-green hover:text-italian-red font-medium"
          >
            {t('header.home')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('menu')}
            className="text-italian-green hover:text-italian-red font-medium"
          >
            {t('header.menu')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('about')}
            className="text-italian-green hover:text-italian-red font-medium"
          >
            {t('header.about')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('gallery')}
            className="text-italian-green hover:text-italian-red font-medium"
          >
            {t('header.gallery')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('reviews')}
            className="text-italian-green hover:text-italian-red font-medium"
          >
            {t('header.reviews')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('contact')}
            className="text-italian-green hover:text-italian-red font-medium"
          >
            {t('header.contact')}
          </Button>
          
          <div className="relative w-8 h-8" onClick={toggleLanguage}>
              {currentLanguage === 'fr' ? (
                <img src="/it-flag.png" className="rounded-full w-8 h-8"></img>
              ) : currentLanguage === 'it' ? (
                <img src="/en-flag.png" className="rounded-full w-8 h-8"></img>
              ) : (
                <img src="/fr-flag.png" className="rounded-full w-8 h-8"></img>
              )}
          </div>
        </nav>

        <div className="md:hidden flex items-center">
          <div className="relative w-8 h-8 mr-2" onClick={toggleLanguage}>
              {currentLanguage === 'fr' ? (
                <img src="/it-flag.png" className="rounded-full w-8 h-8"></img>
              ) : currentLanguage === 'it' ? (
                <img src="/en-flag.png" className="rounded-full w-8 h-8"></img>
              ) : (
                <img src="/fr-flag.png" className="rounded-full w-8 h-8"></img>
              )}
          </div>
          <MobileMenu scrollToSection={scrollToSection} />
        </div>
      </div>
    </header>
  );
};

export default Header;
