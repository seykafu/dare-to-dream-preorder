"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function PodcastSection() {
  const episodes = [
    {
      title: "Understanding Career Anxiety",
      description: "Exploring the root causes of career anxiety and how to navigate uncertainty with confidence.",
    },
    {
      title: "Building Skills That Compound",
      description: "A deep dive into horizontal and vertical skill-building strategies for long-term growth.",
    },
    {
      title: "Reclaiming Your Attention",
      description: "Practical strategies to beat digital distraction and deepen focus in your work.",
    },
  ];

  return (
    <section id="podcast" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Podcast
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">
              Watch the latest episode
            </h3>
          </div>

          {/* YouTube Embed */}
          <div className="mb-12">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/kBEZqjywkJg"
                title="Latest Podcast Episode"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
              New episodes every week
            </p>
          </div>

          {/* Episode Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {episodes.map((episode, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {episode.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {episode.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a href="#">Watch</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

