import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About the Book", path: "/about-book" },
    { name: "About the Author", path: "/about-author" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-nav border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Dare to Dream
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  location.pathname === item.path
                    ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-primary"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Button
            asChild
            size="sm"
            className="bg-gradient-primary border-0 shadow-modern hover:shadow-hover transition-all duration-300"
          >
            <Link to="/#preorder">Pre-Order</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex gap-4 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-xs font-medium transition-colors hover:text-primary",
                location.pathname === item.path ? "text-primary font-semibold" : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};