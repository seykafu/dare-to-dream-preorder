import { CheckCircle2 } from "lucide-react";

export const AboutBook = () => {
  return (
    <section className="py-16 md:py-24 bg-background hover:-translate-y-2 transition-transform duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: What is the book */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What is "Doing The Dream"?
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                It's a modern roadmap for Gen Z and millennial professionals dealing with career anxiety, 
                burnout, digital distraction, and nonlinear career paths. In a world where traditional 
                career ladders are disappearing, this book offers a practical framework to navigate 
                uncertainty with confidence.
              </p>
              
              <p>
                "Doing The Dream" introduces the <strong className="text-foreground">DREAM framework</strong>—a 
                five-part system designed to help you blend passion with practicality, reduce anxiety, 
                and build long-term skills that compound over time.
              </p>
              
              <p>
                Whether you're feeling stuck, overwhelmed by options, or searching for meaning in your work, 
                this book provides actionable strategies to design a career and life you're proud of.
              </p>
            </div>
          </div>

          {/* Right: What you'll learn */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              You'll learn how to:
            </h3>
            
            <ul className="space-y-4">
              {[
                "Reduce career anxiety by understanding its root causes",
                "Build horizontal and vertical skills that compound over time",
                "Reclaim your attention from digital distraction",
                "Embrace discomfort and growth",
                "Stay open to adjacent career paths and pivots"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

