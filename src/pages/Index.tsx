import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { BookSynopsis } from "@/components/BookSynopsis";
import { AboutAuthor } from "@/components/AboutAuthor";
import { PreOrderForm } from "@/components/PreOrderForm";

const Index = () => {
  const preOrderRef = useRef<HTMLDivElement>(null);

  const scrollToPreOrder = () => {
    preOrderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Hero onRegisterClick={scrollToPreOrder} />
      <div ref={preOrderRef}>
        <PreOrderForm />
      </div>
      <BookSynopsis />
      <AboutAuthor />
      
      <footer className="py-8 bg-muted/30 text-center text-muted-foreground">
        <p className="text-sm">
          © {new Date().getFullYear()} Kasey Fu. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;