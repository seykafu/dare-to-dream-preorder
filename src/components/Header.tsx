import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onPreOrderClick: () => void;
}

export const Header = ({ onPreOrderClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (handler: () => void) => {
    handler();
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors">
            Doing The Dream
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Button
              onClick={onPreOrderClick}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Pre-Order
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <Button
                  onClick={() => handleNavClick(onPreOrderClick)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Pre-Order
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

