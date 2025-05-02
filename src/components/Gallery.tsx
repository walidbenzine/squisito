import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface GalleryMeta {
  image: string;
  alt_fr: string;
  alt_en: string;
  alt_it: string;
}

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch('/gallery/gallery.json');
        const data: any = await res.json();

        const items: GalleryItem[] = data.gallery.map((meta, index) => ({
          id: index + 1,
          src: meta.image,
          alt: meta[`alt_${currentLang}` as keyof GalleryMeta] || meta.alt_en || '',
        }));

        setGalleryItems(items);
      } catch (err) {
        console.error('Erreur lors du chargement de la galerie :', err);
      }
    };

    fetchGallery();
  }, [currentLang]);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-italian-red mb-4">{t('gallery.title')}</h2>
          <p className="text-lg text-gray-600">{t('gallery.subtitle')}</p>
          <div className="h-1 w-24 bg-italian-green mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems?.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden shadow-md cursor-pointer hover-scale-elegant">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onClick={() => setSelectedImage(item)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <p className="text-white text-sm font-medium">{item.alt}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-white/95 backdrop-blur-sm">
                <div className="w-full h-full">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-auto max-h-[calc(100vh-200px)] object-contain"
                  />
                  <p className="mt-4 text-center text-gray-700 font-medium">{item.alt}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
