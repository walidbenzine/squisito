
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat animate-zoom-in-out" 
        style={{ backgroundImage: "url('/couverture.png')" }}
      />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center animate-fadeInUp">
        <img 
          src="/logo.png" 
          alt="Squisito Logo" 
          className="mx-auto h-32 mb-6 hover-scale-elegant rounded-full" 
        />
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Squisito
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-8 italic drop-shadow-md">
          {t('hero.slogan')}
        </p>
        <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('about')}
            className="bg-italian-green hover:bg-italian-green/90 text-white px-6 py-3 rounded-md hover-scale-elegant"
          >
            {t('header.about')}
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-italian-red hover:bg-italian-red/90 text-white px-6 py-3 rounded-md hover-scale-elegant"
          >
            {t('header.contact')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
