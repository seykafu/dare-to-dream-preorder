import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, CheckCircle } from "lucide-react";

export const PreOrderForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('preorder_emails')
        .insert([{ email: email.trim(), name: name.trim() || null }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already registered!",
            description: "This email is already registered for pre-order notifications.",
          });
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        setEmail("");
        setName("");
        toast({
          title: "Success!",
          description: "You've been registered for pre-order notifications.",
        });
      }
    } catch (error) {
      console.error('Error registering for pre-order:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm shadow-glow border-primary/20">
            {isSuccess ? (
              <div className="text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                <h3 className="font-serif text-3xl font-bold text-foreground">
                  You're All Set!
                </h3>
                <p className="text-lg text-muted-foreground">
                  We'll notify you as soon as pre-orders are available.
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-4"
                >
                  Register Another Email
                </Button>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Be the First to Know
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Register now to receive an exclusive notification when pre-orders open
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your name (optional)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-lg py-6 bg-background/50"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-lg py-6 bg-background/50"
                      required
                      maxLength={255}
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6 bg-gradient-accent hover:shadow-glow transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Registering..." : "Register for Pre-Order"}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground text-center mt-6">
                  We respect your privacy. Your email will only be used to notify you about this book's pre-order availability.
                </p>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};