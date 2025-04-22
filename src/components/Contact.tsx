
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Phone } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fonction pour charger la carte Google Maps
    const initMap = () => {
      if (!mapRef.current) return;

      // Coordonnées de Squisito
      const squisitoLocation = { lat: 48.882618, lng: 2.321355 }; // 16 Bd des Batignolles, 75017 Paris

      const map = new google.maps.Map(mapRef.current, {
        center: squisitoLocation,
        zoom: 16,
        mapTypeControl: false,
      });

      // Ajouter un marqueur pour Squisito
      const marker = new google.maps.Marker({
        position: squisitoLocation,
        map: map,
        title: 'Squisito - Épicerie italienne et traiteur',
        animation: google.maps.Animation.DROP,
      });

      // Ajouter un event listener pour rediriger vers Google Maps au clic
      marker.addListener('click', () => {
        window.open('https://maps.app.goo.gl/pShhdG1LPZx2nYVr9', '_blank');
      });

      // Optionnel : Info window au survol du marqueur
      const infowindow = new google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-bold">Squisito</h3>
            <p>16 Bd des Batignolles, 75017 Paris</p>
          </div>
        `,
      });

      marker.addListener('mouseover', () => {
        infowindow.open(map, marker);
      });

      marker.addListener('mouseout', () => {
        infowindow.close();
      });
    };

    // Charger l'API Google Maps
    const loadGoogleMapsAPI = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initGoogleMap`;
      script.async = true;
      script.defer = true;
      
      // Définir la fonction de callback globalement
      (window as any).initGoogleMap = initMap;
      document.head.appendChild(script);
    };

    loadGoogleMapsAPI();

    // Cleanup
    return () => {
      (window as any).initGoogleMap = undefined;
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-italian-red mb-4">{t('contact.title')}</h2>
          <div className="h-1 w-24 bg-italian-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="h-full shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-italian-green mb-2">{t('contact.address')}</h3>
                    <p className="text-gray-700">16 Bd des Batignolles, 75017 Paris</p>
                    <Button 
                      variant="link" 
                      className="text-italian-red p-0 mt-1 h-auto"
                      onClick={() => window.open('https://maps.app.goo.gl/pShhdG1LPZx2nYVr9', '_blank')}
                    >
                      Voir sur Google Maps
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-italian-green mb-2">{t('contact.phone')}</h3>
                    <p className="text-gray-700">07 82 93 85 86</p>
                    <Button 
                      variant="link" 
                      className="text-italian-red p-0 mt-1 h-auto flex items-center"
                      onClick={() => window.open('tel:+33782938586')}
                    >
                      <Phone className="h-4 w-4 mr-1" /> Appeler
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-italian-green mb-2">{t('contact.hours')}</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>{t('contact.schedule.monClosed')}</li>
                      <li>{t('contact.schedule.tueThu')}</li>
                      <li>{t('contact.schedule.fri')}</li>
                      <li>{t('contact.schedule.sat')}</li>
                      <li>{t('contact.schedule.sunClosed')}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-italian-green mb-4">Réseaux sociaux</h3>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        className="rounded-full h-12 w-12 p-0 bg-pink-50 border-pink-200 hover:bg-pink-100"
                        onClick={() => window.open('https://www.instagram.com/squisito.paris17e/', '_blank')}
                      >
                        <Instagram className="h-6 w-6 text-pink-600" />
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full h-12 w-12 p-0 bg-gray-50 border-gray-200 hover:bg-gray-100"
                        onClick={() => window.open('https://www.tiktok.com/@squisito.paris17e', '_blank')}
                      >
                        <svg 
                          className="h-6 w-6 text-black" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.859-.972-1.34-2.149-1.39-3.34h-3.961v14.45c0 .453-.168.877-.474 1.199-.305.323-.714.5-1.145.5-.431 0-.841-.177-1.146-.5a1.683 1.683 0 0 1-.473-1.199c0-.453.167-.877.473-1.2.305-.321.715-.499 1.146-.499.207 0 .41.038.603.108v-4.003a5.568 5.568 0 0 0-.852-.066c-1.36 0-2.665.498-3.629 1.415-.962.917-1.503 2.161-1.503 3.458 0 1.296.541 2.54 1.503 3.458.964.917 2.268 1.415 3.629 1.415 1.36 0 2.665-.498 3.629-1.415.964-.917 1.503-2.162 1.503-3.458V8.339c1.19.812 2.602 1.248 4.009 1.248h.002v-4c-.446 0-.88-.087-1.287-.237a4.99 4.99 0 0 1-.457-.188z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div 
              ref={mapRef} 
              className="h-96 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              style={{ width: '100%' }}
              onClick={() => window.open('https://maps.app.goo.gl/pShhdG1LPZx2nYVr9', '_blank')}
            />
            <p className="text-sm text-gray-500 mt-2 text-center italic">Cliquez sur la carte pour ouvrir dans Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
