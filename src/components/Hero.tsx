
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
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/lovable-uploads/1a8e2b68-64ae-4d83-8f3f-ac01c4cc0a9a.png')", 
            opacity: 0.8
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <img 
          src="/lovable-uploads/abca8ec2-85a6-4f60-ac1d-e4cd61fd38a6.png" 
          alt="Squisito Logo" 
          className="mx-auto h-32 mb-6" 
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
            className="bg-italian-green hover:bg-italian-green/90 text-white px-6 py-3 rounded-md"
          >
            {t('header.about')}
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-italian-red hover:bg-italian-red/90 text-white px-6 py-3 rounded-md"
          >
            {t('header.contact')}
          </Button>
        </div>

        {/* Décoration aux couleurs italiennes */}
        <div className="absolute bottom-0 left-0 right-0 h-6 flex">
          <div className="flex-1 bg-italian-green"></div>
          <div className="flex-1 bg-italian-white"></div>
          <div className="flex-1 bg-italian-red"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
