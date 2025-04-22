
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
}

const Reviews = () => {
  const { t } = useTranslation();

  const reviews: Review[] = [
    {
      id: 1,
      author: "GREGOR RAMSA",
      rating: 5,
      content: "J'habite à 150 mètres de ce petit paradis italien : Accueil génial, Produits proposés de très haut vol. C'est devenu mon fournisseur italien exclusif sur Paris malgré une concurrence importante en particulier aux Batignolles. Petite visite ce samedi 29/03/2025 pour faire des provisions que j'apporte à mes parents en province tellement ils aiment. Merci à vous deux :-) Je sors du magasin ce 12/04/2025 : M E R C I, QUE DU BONHEUR :-)"
    },
    {
      id: 2,
      author: "Milena Dreyfus",
      rating: 5,
      content: "J'ai fait appel à ce traiteur italien pour mon anniversaire, et tout était absolument délicieux ! Les lasagnes étaient fondantes et riches en saveurs, la parmigiana de mozzarella un pur régal, les arancini croustillants à l'extérieur et moelleux à l'intérieur, et la pizza, savoureuse avec des ingrédients de qualité. Tout était préparé avec soin et générosité, ce qui a ravi tous mes invités. En plus de la qualité des plats, le service était impeccable, ponctuel et professionnel. Je recommande ce traiteur sans hésitation pour tous ceux qui recherchent une cuisine italienne authentique. Une expérience culinaire que je renouvellerai avec plaisir !"
    },
    {
      id: 3,
      author: "Laureen Leconte",
      rating: 5,
      content: "Que dire ... a part délicieux !! beaucoup de choix aussi bien en épicerie qu'en traiteur ... Des recettes différentes tous les jours ! Des produits de saison et de qualité, cuisinés avec passion par les patrons. Et en prime, un très bel accueil !!"
    },
    {
      id: 4,
      author: "Victor-Hugo",
      rating: 5,
      content: "Sincèrement la meilleure lasagne maison que j'ai mangé de ma vie. Tellement bon que j'en ai prit un deuxième. L'accueil est extraordinaire. Le chef connais ses plats, et les produits de très bon conseil."
    },
    {
      id: 5,
      author: "David Lanteri",
      rating: 5,
      content: "Excellent en tout point ! Les foccacias sont délicieuses, les parts de pizzas également et l'accueil chaleureux. C'est un sans faute !"
    }
  ];

  const handleViewMoreReviews = () => {
    window.open('https://maps.app.goo.gl/pShhdG1LPZx2nYVr9', '_blank');
  };

  // Fonction pour rendre les étoiles
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-italian-green mb-4">{t('reviews.title')}</h2>
          <div className="h-1 w-24 bg-italian-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-6">
                  "{review.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-italian-green flex items-center justify-center text-white font-bold mr-3">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{review.author}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleViewMoreReviews}
            className="bg-italian-red hover:bg-italian-red/90 text-white px-6 py-3 rounded-md"
          >
            {t('reviews.viewMore')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
