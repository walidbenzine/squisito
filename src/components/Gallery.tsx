import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/ui/dialog';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/1a8e2b68-64ae-4d83-8f3f-ac01c4cc0a9a.png",
      alt: "Devanture Squisito avec chef"
    },
    {
      id: 2,
      src: "/319698b8-30ff-4b52-b3f4-715cb81da6ef.png",
      alt: "Sandwiches italiens"
    },
    {
      id: 3,
      src: "/4dad984b-c8e5-4888-93e7-d2b2b70db193.png",
      alt: "Comptoir Squisito"
    },
    {
      id: 4,
      src: "/588104db-6038-4edc-a1e2-1bae0cc40b56.png",
      alt: "Gâteau au chocolat"
    },
    {
      id: 5,
      src: "/6192bb77-5981-4340-946b-843928f265a8.png",
      alt: "Pizzas"
    },
    {
      id: 6,
      src: "/72ffb6ab-b664-49dd-8d3e-e4f368be8a59.png",
      alt: "Chef présentant ses sandwiches"
    },
    {
      id: 7,
      src: "/fa9d063c-b651-480d-b7ee-2e0654aaba1e.png",
      alt: "Sélection de vins italiens"
    },
    {
      id: 8,
      src: "/1331d8f2-95f5-49cc-abe2-fdd4a05aee1d.png",
      alt: "Logo Squisito sur vitrine"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-italian-red mb-4">{t('gallery.title')}</h2>
          <p className="text-lg text-gray-600">{t('gallery.subtitle')}</p>
          <div className="h-1 w-24 bg-italian-green mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
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
