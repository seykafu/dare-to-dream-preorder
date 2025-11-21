export const DreamFramework = () => {
  const frameworkItems = [
    {
      letter: "D",
      title: "Do Yourself a Favor",
      description: "Foundations: health, environment, habits, basic financial stability."
    },
    {
      letter: "R",
      title: "Relentlessly Grow",
      description: "Focus on skill-building as the antidote to anxiety and imposter syndrome."
    },
    {
      letter: "E",
      title: "Embrace the Suffering",
      description: "Discomfort is part of growth; learn to lean into challenges instead of escaping."
    },
    {
      letter: "A",
      title: "Adjacents Are Possible",
      description: "Nonlinear careers and pivots are normal; nearby skills and paths compound."
    },
    {
      letter: "M",
      title: "Make Yourself Engaged",
      description: "Beat digital distraction, deepen focus, and stay present in your work."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The DREAM Framework
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Five principles to guide your career and life journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {frameworkItems.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{item.letter}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

