
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  const images = import.meta.glob<{ default: string }>(
    '/public/about/*.{png,jpg,jpeg,webp,gif,svg,bmp,avif}',
    { eager: true }
  );

  const aboutItems: string[] = Object.entries(images).map(([path, module], index) => {
    return module.default;
  });

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
            {aboutItems?.map((item) => (
              <Card key={item} className="overflow-hidden shadow-lg transform transition hover:scale-105">
                <CardContent className="p-0">
                  <img
                    src={item}
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
