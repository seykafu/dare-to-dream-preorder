"use client";

export function DreamFrameworkSection() {
  const frameworkItems = [
    {
      letter: "D",
      title: "Do Yourself a Favor",
      description: "Foundations: health, environment, habits, basic financial stability.",
    },
    {
      letter: "R",
      title: "Relentlessly Grow",
      description: "Focus on skill-building as the antidote to anxiety and imposter syndrome.",
    },
    {
      letter: "E",
      title: "Embrace the Suffering",
      description: "Discomfort is part of growth; learn to lean into challenges instead of escaping.",
    },
    {
      letter: "A",
      title: "Adjacents Are Possible",
      description: "Nonlinear careers and pivots are normal; nearby skills and paths compound.",
    },
    {
      letter: "M",
      title: "Make Yourself Engaged",
      description: "Embrace community, seek mentorship, and find like-minded folks to build social capital",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is the DREAM Framework?
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Five principles to guide your career and life journey
            </p>
          </div>

          <div className="space-y-6">
            {frameworkItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Letter Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                      {item.letter}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

