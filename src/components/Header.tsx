
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Flag } from 'lucide-react';

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
    const newLanguage = currentLanguage === 'fr' ? 'it' : 'fr';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/abca8ec2-85a6-4f60-ac1d-e4cd61fd38a6.png" 
            alt="Squisito Logo" 
            className="h-12 mr-4" 
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('home')}
            className="text-italian-green hover:text-italian-red font-medium"
          >
            {t('header.home')}
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
          
          <Button 
            onClick={toggleLanguage}
            className="rounded-full p-2 overflow-hidden ml-4"
            variant="outline"
          >
            <div className="relative w-6 h-6">
              {currentLanguage === 'fr' ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-2 bg-italian-green" style={{ position: 'absolute', top: '33%', left: 0 }}></div>
                  <div className="w-full h-2 bg-italian-white" style={{ position: 'absolute', top: '0%', left: 0 }}></div>
                  <div className="w-full h-2 bg-italian-red" style={{ position: 'absolute', top: '66%', left: 0 }}></div>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col">
                  <div className="flex-1 bg-blue-700"></div>
                  <div className="flex-1 bg-white"></div>
                  <div className="flex-1 bg-red-600"></div>
                </div>
              )}
            </div>
          </Button>
        </nav>
        
        {/* Menu mobile */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost"
            onClick={toggleLanguage}
            className="rounded-full p-2 overflow-hidden mr-2"
          >
            <Flag className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              // Implémentation du menu mobile si nécessaire
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
