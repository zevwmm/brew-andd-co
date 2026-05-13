"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
    >
      {/* Radial gold glow — left side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 15% 65%, rgba(200,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Decorative rings — right side */}
      <div
        className="absolute right-[-5vw] top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full border border-[#C8A96E]/5 pointer-events-none"
      />
      <div
        className="absolute right-[2vw] top-1/2 -translate-y-1/2 w-[38vw] h-[38vw] max-w-[480px] max-h-[480px] rounded-full border border-[#C8A96E]/8 pointer-events-none"
      />
      <div
        className="absolute right-[8vw] top-1/2 -translate-y-1/2 w-[22vw] h-[22vw] max-w-[280px] max-h-[280px] rounded-full border border-[#C8A96E]/10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-16">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-[#C8A96E] text-xs tracking-[0.35em] uppercase font-sans">
              Specialty Coffee — Since 2020
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif leading-[0.93] tracking-tight text-[#F5EFE6] mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
          >
            Coffee crafted
            <br />
            with{" "}
            <span className="text-[#C8A96E] italic">patience</span>
            <br />
            and purpose
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[#7A756E] text-base md:text-lg leading-relaxed max-w-md mb-12 font-sans"
          >
            Every cup begins long before you arrive. We source, roast, and pull
            each shot with the kind of attention that only comes from caring
            deeply about what&apos;s in your glass.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 bg-[#C8A96E] text-[#0C0A09] px-8 py-4 font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#D9BE8A] active:scale-[0.98]"
              style={{ borderRadius: "2px" }}
            >
              Explore Menu
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
            <a
              href="#story"
              className="text-[#7A756E] text-sm font-sans tracking-wide hover:text-[#F5EFE6] transition-colors duration-200 border-b border-[#7A756E]/30 hover:border-[#F5EFE6]/30 pb-px"
            >
              Our story
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3"
        >
          <div className="w-px h-10 bg-[#C8A96E]/25" />
          <span className="text-[#7A756E] text-xs tracking-widest uppercase font-sans">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
