
import { useTranslation } from 'react-i18next';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-100px items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/logo.png" 
              alt="Squisito Logo" 
              className="h-16 mb-4 rounded-full" 
            />
            <p className="text-gray-400 max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          <div className="gap-8 sm:gap-16 max-w-fit flex flex-row">
            <div className="max-w-fit">
              <h3 className="max-w-fit text-lg font-semibold mb-4 text-italian-green">Navigation</h3>
              <ul className="space-y-2 max-w-fit">
                <li className="max-w-fit">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-italian-red transition-colors"
                  >
                    {t('header.home')}
                  </button>
                </li>
                <li  className="max-w-fit">
                  <button 
                    onClick={() => scrollToSection('menu')}
                    className="text-gray-400 hover:text-italian-red transition-colors"
                  >
                    {t('header.menu')}
                  </button>
                </li>
                <li  className="max-w-fit">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-italian-red transition-colors"
                  >
                    {t('header.about')}
                  </button>
                </li>
                <li  className="max-w-fit">
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    className="text-gray-400 hover:text-italian-red transition-colors"
                  >
                    {t('header.gallery')}
                  </button>
                </li>
                <li  className="max-w-fit">
                  <button 
                    onClick={() => scrollToSection('reviews')}
                    className="text-gray-400 hover:text-italian-red transition-colors"
                  >
                    {t('header.reviews')}
                  </button>
                </li>
                <li  className="max-w-fit">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-italian-red transition-colors"
                  >
                    {t('header.contact')}
                  </button>
                </li>
              </ul>
            </div>
            <div className="max-w-fit">
              <h3 className="max-w-fit text-lg font-semibold mb-4 text-italian-green">Liens</h3>
              <ul className="max-w-fit space-y-2 ">
                <li className="max-w-fit">
                  <a 
                    href="https://maps.app.goo.gl/pShhdG1LPZx2nYVr9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-italian-red transition-colors"
                  >
                    Google Maps
                  </a>
                </li>
                <li  className="max-w-fit">
                  <a 
                    href="https://www.instagram.com/squisito.paris17e/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  className="text-gray-400 hover:text-italian-red transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li  className="max-w-fit">
                  <a 
                    href="https://www.tiktok.com/@squisito.paris17e" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-italian-red transition-colors"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Squisito. {t('footer.copyright')}
          </p>
        </div>

        {/* Bande aux couleurs de l'Italie */}
        <div className="flex mt-8 h-2">
          <div className="flex-1 bg-italian-green"></div>
          <div className="flex-1 bg-italian-white"></div>
          <div className="flex-1 bg-italian-red"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
