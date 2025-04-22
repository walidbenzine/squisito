
import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { i18n } = useTranslation();
  
  const [aboutRef, aboutVisible] = useIntersectionObserver();
  const [galleryRef, galleryVisible] = useIntersectionObserver();
  const [reviewsRef, reviewsVisible] = useIntersectionObserver();
  const [contactRef, contactVisible] = useIntersectionObserver();
  
  const homeRef = useRef(null);

  // Fonction pour scroller vers une section
  const scrollToSection = (sectionId: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLElement> } = {
      'home': homeRef,
      'about': aboutRef as React.RefObject<HTMLElement>,
      'gallery': galleryRef as React.RefObject<HTMLElement>,
      'reviews': reviewsRef as React.RefObject<HTMLElement>,
      'contact': contactRef as React.RefObject<HTMLElement>
    };

    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = i18n.language === 'fr' 
      ? 'Squisito - Épicerie italienne et traiteur' 
      : 'Squisito - Drogheria e gastronomia italiana';
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrollToSection={scrollToSection} />
      
      <main>
        <div ref={homeRef}>
          <Hero scrollToSection={scrollToSection} />
        </div>
        
        <section ref={aboutRef as React.RefObject<HTMLElement>} className={`section-appear ${aboutVisible ? 'visible' : ''}`}>
          <About />
        </section>
        
        <section ref={galleryRef as React.RefObject<HTMLElement>} className={`section-appear ${galleryVisible ? 'visible' : ''}`}>
          <Gallery />
        </section>
        
        <section ref={reviewsRef as React.RefObject<HTMLElement>} className={`section-appear ${reviewsVisible ? 'visible' : ''}`}>
          <Reviews />
        </section>
        
        <section ref={contactRef as React.RefObject<HTMLElement>} className={`section-appear ${contactVisible ? 'visible' : ''}`}>
          <Contact />
        </section>
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
