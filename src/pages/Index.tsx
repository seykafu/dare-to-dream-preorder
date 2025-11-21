import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PreOrderForm } from "@/components/PreOrderForm";

const Index = () => {
  const preOrderRef = useRef<HTMLDivElement>(null);

  const scrollToPreOrder = () => {
    preOrderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero onRegisterClick={scrollToPreOrder} />
        <div id="preorder" ref={preOrderRef}>
          <PreOrderForm />
        </div>
      </main>
      
      <footer className="py-6 bg-muted/30 text-center text-muted-foreground">
        <p className="text-sm">
          © {new Date().getFullYear()} Kasey Fu. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;