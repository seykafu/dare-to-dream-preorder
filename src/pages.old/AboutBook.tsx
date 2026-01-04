import { Navigation } from "@/components/Navigation";
import { BookSynopsis } from "@/components/BookSynopsis";

const AboutBook = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <BookSynopsis />
      </div>
      
      <footer className="py-6 bg-muted/30 text-center text-muted-foreground">
        <p className="text-sm">
          © {new Date().getFullYear()} Kasey Fu. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutBook;