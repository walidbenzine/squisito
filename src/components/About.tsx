
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-italian-green mb-4">{t('about.title')}</h2>
          <div className="h-1 w-24 bg-italian-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-italian-red"></div>
                </div>
                <p className="ml-3 text-gray-700">{t('about.freshFood')}</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-italian-green"></div>
                </div>
                <p className="ml-3 text-gray-700">{t('about.dailyMenu')}</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-italian-red"></div>
                </div>
                <p className="ml-3 text-gray-700">{t('about.qualityProducts')}</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden shadow-lg transform transition hover:scale-105">
              <CardContent className="p-0">
                <img 
                  src="/319698b8-30ff-4b52-b3f4-715cb81da6ef.png" 
                  alt="Sandwiches italiens" 
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg transform transition hover:scale-105">
              <CardContent className="p-0">
                <img 
                  src="/4dad984b-c8e5-4888-93e7-d2b2b70db193.png" 
                  alt="Comptoir Squisito" 
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg transform transition hover:scale-105">
              <CardContent className="p-0">
                <img 
                  src="/588104db-6038-4edc-a1e2-1bae0cc40b56.png" 
                  alt="Gâteau au chocolat" 
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg transform transition hover:scale-105">
              <CardContent className="p-0">
                <img 
                  src="/6192bb77-5981-4340-946b-843928f265a8.png" 
                  alt="Pizzas" 
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
