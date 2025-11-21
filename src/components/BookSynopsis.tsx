import { Card } from "@/components/ui/card";

export const BookSynopsis = () => {
  const dreamRules = [
    {
      letter: "D",
      title: "Do yourself a favor",
      description: "Prioritize your wellbeing and make choices that serve your future self"
    },
    {
      letter: "R",
      title: "Reach perfection",
      description: "Strive for excellence while maintaining healthy standards"
    },
    {
      letter: "E",
      title: "Embrace suffering",
      description: "Transform challenges into opportunities for growth and resilience"
    },
    {
      letter: "A",
      title: "Adjacent are possible",
      description: "Discover opportunities in unexpected places and adjacent paths"
    },
    {
      letter: "M",
      title: "Make it engaging",
      description: "Create careers that align with both passion and financial freedom"
    }
  ];

  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          About the Book
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          A nonfiction self-help guide addressing the most pressing issue facing young professionals today: career anxiety
        </p>
        
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-6 md:p-10 bg-card/80 backdrop-blur-sm shadow-modern border-border/50">
            <p className="text-base leading-relaxed text-card-foreground mb-4">
              Drawing on research, historical examples, modern professional stories, and personal experience, 
              <span className="font-semibold"> Dare to Dream</span> introduces the DREAM framework—five core rules 
              designed to help readers conquer anxiety, build resilience, and pursue meaningful careers.
            </p>
            <p className="text-base leading-relaxed text-card-foreground">
              Through engaging storytelling, this book provides a roadmap for Gen Z and millennial professionals 
              to reduce anxiety, find confidence, and create careers that align with both passion and financial freedom.
            </p>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-3xl font-bold text-center mb-10 text-foreground">
            The DREAM Framework
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dreamRules.map((rule, index) => (
              <Card 
                key={index}
                className="p-5 bg-card/80 backdrop-blur-sm hover:shadow-modern transition-all duration-300 hover-scale border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="font-serif text-xl font-bold text-primary-foreground">
                      {rule.letter}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base mb-2 text-card-foreground">
                      {rule.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-6 md:p-10 bg-accent/20 backdrop-blur-sm border-accent/50">
            <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
              Who This Book Is For
            </h3>
            <ul className="space-y-2 text-base text-card-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Gen Z and millennial professionals struggling with career direction and anxiety</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Career coaches, mentors, and HR professionals supporting young workers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Parents, educators, and managers who want to better understand and support the next generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Anyone seeking guidance on navigating uncertainty, burnout, and social comparison</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};