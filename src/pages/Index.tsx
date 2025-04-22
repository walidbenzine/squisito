import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { i18n } = useTranslation();
  
  // Référencer les sections pour le scroll
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Fonction pour scroller vers une section
  const scrollToSection = (sectionId: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLElement> } = {
      'home': homeRef,
      'about': aboutRef,
      'gallery': galleryRef,
      'reviews': reviewsRef,
      'contact': contactRef
    };

    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      // Ajouter un offset pour le header
      const yOffset = -80; 
      const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // Gérer le changement de langue dans le document
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    
    // Mettre à jour le titre de la page
    document.title = i18n.language === 'fr' 
      ? 'Squisito - Épicerie italienne et traiteur' 
      : 'Squisito - Drogheria e gastronomia italiana';
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrollToSection={scrollToSection} />
      
      <main>
        <section ref={homeRef}>
          <Hero scrollToSection={scrollToSection} />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={galleryRef}>
          <Gallery />
        </section>
        <section ref={reviewsRef}>
          <Reviews />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
