import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BookSection } from "@/components/BookSection";
import { FrameworkSection } from "@/components/FrameworkSection";
import { AuthorSection } from "@/components/AuthorSection";
import { Podcast } from "@/components/Podcast";
import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";
import { SignupProvider } from "@/components/signup/SignupProvider";

export default function Home() {
  return (
    <SignupProvider>
      <Header />
      <main id="main">
        <Hero />
        <BookSection />
        <FrameworkSection />
        <AuthorSection />
        <Podcast />
        <ClosingCta />
      </main>
      <Footer />
    </SignupProvider>
  );
}
