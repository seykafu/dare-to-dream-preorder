"use client";

import { motion } from "framer-motion";

// Professional/career-related filler text similar to the book cover
const backgroundPhrases = [
  "Senior Product Manager 2023 — Present Led cross-functional teams to deliver core platform initiatives across multiple products and systems",
  "roadmap execution in collaboration with engineering design and stakeholders Platform ownership included mobile applications developer APIs and AI-powered systems",
  "broader product strategy Launched multiple 0 to 1 initiatives aligned to customer demand and business goals turning ambitious ideas into outcomes",
  "Improved key revenue metrics through delivery of high-impact features requested by enterprise customers while balancing execution and ambition",
  "Product Manager II 2021 — 2023 Owned execution of a strategic AI assistant from early concept through early access and customer rollout",
  "driving adoption growth weekly usage increase and reference customers Enabled high-accuracy customer insights through multi-model AI systems",
  "supported by frequent customer feedback loops and rapid iteration cycles Shipped features across multiple products by coordinating dependencies",
  "between platform and product teams Defined quarterly OKRs aligned to company strategy and collaborated with leadership on prioritization",
  "Built and maintained strong relationships with engineering leads to ensure technical feasibility and efficient delivery of product requirements",
  "Associate Product Manager 2019 — 2021 Supported product launches by conducting user research competitive analysis and market sizing",
  "Created detailed product specifications and user stories that enabled engineering teams to deliver features on time and within scope",
  "Managed stakeholder communications and ensured alignment between business objectives and product development priorities",
  "Analyzed user behavior data to identify opportunities for product improvement and presented findings to senior leadership",
  "Career anxiety clarity confidence growth mindset continuous learning skill development professional development networking mentorship",
  "Work-life balance burnout prevention mental health wellness productivity focus deep work attention management digital minimalism",
  "Leadership communication collaboration teamwork cross-functional alignment stakeholder management executive presence influence",
  "Innovation creativity problem-solving critical thinking strategic planning long-term vision quarterly goals annual objectives",
  "User experience customer empathy design thinking human-centered approach feedback loops iteration improvement optimization",
  "Data-driven decisions metrics KPIs OKRs performance measurement impact assessment ROI analysis business outcomes results",
  "Agile methodology sprint planning backlog grooming retrospectives continuous improvement lean startup MVP validation",
  "Technical skills coding programming software development system design architecture scalability reliability performance",
  "Market research competitive intelligence industry trends emerging technologies disruption transformation adaptation",
  "Personal branding thought leadership content creation public speaking presentation skills storytelling narrative",
];

export function BackgroundText() {
  // Create multiple layers of text for depth
  const layers = [
    { opacity: 0.018, fontSize: "text-sm", speed: 80 },
    { opacity: 0.025, fontSize: "text-base", speed: 100 },
    { opacity: 0.02, fontSize: "text-xs", speed: 120 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
      {layers.map((layer, layerIndex) => (
        <motion.div
          key={layerIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: layerIndex * 0.5 }}
        >
          <div
            className={`absolute inset-0 ${layer.fontSize} font-medium leading-relaxed text-foreground tracking-wide`}
            style={{ opacity: layer.opacity }}
          >
            {/* Create a grid of text blocks */}
            <div className="flex flex-col justify-start pt-20">
              {[...Array(12)].map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="whitespace-nowrap overflow-hidden py-3"
                  style={{
                    transform: `translateX(${(rowIndex % 3) * -100}px)`,
                  }}
                >
                  <motion.div
                    className="inline-block"
                    animate={{
                      x: rowIndex % 2 === 0 ? [0, -1000] : [-1000, 0],
                    }}
                    transition={{
                      duration: layer.speed + rowIndex * 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {/* Repeat phrases multiple times to ensure coverage */}
                    {[...Array(4)].map((_, repeatIndex) => (
                      <span key={repeatIndex} className="mx-8">
                        {backgroundPhrases[(rowIndex + repeatIndex + layerIndex * 3) % backgroundPhrases.length]}
                      </span>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Static text layer for more density */}
      <div
        className="absolute inset-0 text-sm font-medium leading-[2.5] text-foreground"
        style={{ opacity: 0.022 }}
      >
        <div className="max-w-[200vw] p-8 columns-3 gap-12">
          {backgroundPhrases.map((phrase, index) => (
            <p key={index} className="break-inside-avoid mb-6">
              {phrase}
            </p>
          ))}
          {backgroundPhrases.map((phrase, index) => (
            <p key={`repeat-${index}`} className="break-inside-avoid mb-6">
              {phrase}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
