"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import doingthedreamImage from "@/src/assets/doingthedream.png";

export function HeroSection() {
  return (
    <section id="home" className="flex items-center pt-20 md:pt-32 pb-8 md:pb-12 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <Reveal direction="right" className="space-y-6">
            <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
              New Non-Fiction Book by Kasey Fu
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Navigate Career Anxiety{" "}
              <span className="text-primary">with Clarity</span>{" "}
              <span className="text-primary">and Confidence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Pre-order the new book "Doing The Dream" and join the newsletter for exclusive insights.
            </p>
          </Reveal>

          {/* Right Column - Book Mock */}
          <Reveal direction="left" className="flex justify-center md:justify-end">
            <motion.div
              className="relative w-full max-w-sm"
              style={{ perspective: "1000px" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* 3D Book Mock */}
              <div
                className="relative"
                style={{
                  transform: "rotateY(-8deg) rotateX(3deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative rounded-2xl shadow-hover overflow-hidden border border-border/50 aspect-[2/3]">
                  {/* Book Spine Effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-foreground/20 rounded-l-2xl z-10" />
                  
                  {/* Book Cover Image */}
                  <Image
                    src={doingthedreamImage}
                    alt="Doing The Dream Book Cover"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
