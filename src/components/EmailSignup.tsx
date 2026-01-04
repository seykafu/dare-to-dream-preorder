import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

interface EmailSignupProps {
  variant?: "default" | "compact";
}

export const EmailSignup = ({ variant = "default" }: EmailSignupProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate success
    setIsSubmitted(true);
    setEmail("");
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  if (variant === "compact") {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className="flex-1"
            disabled={isSubmitted}
          />
          <Button
            type="submit"
            disabled={isSubmitted}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitted ? "Subscribed!" : "Notify Me"}
          </Button>
        </form>
        {error && <p className="text-sm text-destructive mt-2">{error}</p>}
        {isSubmitted && (
          <div className="flex items-center gap-2 mt-3 text-sm text-primary">
            <CheckCircle2 className="h-4 w-4" />
            <span>You're in! We'll notify you when pre-orders go live.</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg shadow-md p-8 md:p-12 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
              Get notified when pre-orders go live
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 text-center">
              Be the first to receive early chapters, launch updates, and exclusive bonuses.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="flex-1"
                  disabled={isSubmitted}
                />
                <Button
                  type="submit"
                  disabled={isSubmitted}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
                >
                  {isSubmitted ? "Subscribed!" : "Notify Me"}
                </Button>
              </div>
              
              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}
              
              {isSubmitted && (
                <div className="flex items-center justify-center gap-2 text-sm text-primary bg-primary/10 rounded-md p-4">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">You're in! We'll notify you when pre-orders go live.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

