import { Navigation } from "@/components/Navigation";
import { AboutAuthor } from "@/components/AboutAuthor";

const AboutAuthorPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <AboutAuthor />
      </div>
      
      <footer className="py-6 bg-muted/30 text-center text-muted-foreground">
        <p className="text-sm">
          © {new Date().getFullYear()} Kasey Fu. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutAuthorPage;