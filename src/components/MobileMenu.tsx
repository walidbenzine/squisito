import { useTranslation } from 'react-i18next';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

interface MobileMenuProps {
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ scrollToSection }: MobileMenuProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false); 

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-sm">
        <SheetHeader>
          <SheetTitle className="text-center">
            <img 
              src="/logo.png" 
              alt="Squisito Logo" 
              className="h-12 mx-auto mb-4 rounded-full" 
            />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Button 
            variant="ghost" 
            onClick={() => handleNavigation('home')}
            className="text-italian-green hover:text-italian-red w-full justify-start font-medium text-lg"
          >
            {t('header.home')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleNavigation('menu')}
            className="text-italian-green hover:text-italian-red w-full justify-start font-medium text-lg"
          >
            {t('header.menu')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleNavigation('about')}
            className="text-italian-green hover:text-italian-red w-full justify-start font-medium text-lg"
          >
            {t('header.about')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleNavigation('gallery')}
            className="text-italian-green hover:text-italian-red w-full justify-start font-medium text-lg"
          >
            {t('header.gallery')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleNavigation('reviews')}
            className="text-italian-green hover:text-italian-red w-full justify-start font-medium text-lg"
          >
            {t('header.reviews')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleNavigation('contact')}
            className="text-italian-green hover:text-italian-red w-full justify-start font-medium text-lg"
          >
            {t('header.contact')}
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;