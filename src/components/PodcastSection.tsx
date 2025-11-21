import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

export const PodcastSection = () => {
  const episodes = [
    {
      title: "Understanding Career Anxiety",
      description: "Exploring the root causes of career anxiety and how to navigate uncertainty with confidence."
    },
    {
      title: "Building Skills That Compound",
      description: "A deep dive into horizontal and vertical skill-building strategies for long-term growth."
    },
    {
      title: "Reclaiming Your Attention",
      description: "Practical strategies to beat digital distraction and deepen focus in your work."
    }
  ];

  return (
    <section id="podcast" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Doing The Dream Podcast
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Weekly conversations about career anxiety, digital distraction, and building a meaningful life.
            </p>
          </div>

          {/* Episode Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {episodes.map((episode, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {episode.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {episode.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  disabled
                >
                  Coming Soon
                </Button>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#" className="inline-flex items-center gap-2">
                Watch on YouTube
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 hover:bg-muted"
            >
              <a href="#" className="inline-flex items-center gap-2">
                Listen on Spotify
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

