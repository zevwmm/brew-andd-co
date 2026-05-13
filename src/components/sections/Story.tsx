"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 border-t border-[#2A2520]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Visual placeholder — left column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: "4px",
                aspectRatio: "4/5",
                background:
                  "linear-gradient(145deg, #1a1510 0%, #221B0E 40%, #1C1A12 70%, #141210 100%)",
              }}
            >
              {/* Inner radial glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 35% 40%, rgba(200,169,110,0.13) 0%, transparent 60%)",
                }}
              />

              {/* Focal emoji */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="select-none opacity-50"
                  style={{ fontSize: "5.5rem" }}
                  aria-hidden="true"
                >
                  🌿
                </span>
              </div>

              {/* Caption strip */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-5"
                style={{
                  background:
                    "linear-gradient(to top, #0C0A09 0%, transparent 100%)",
                }}
              >
                <p className="text-[#7A756E] text-xs font-sans tracking-[0.25em] uppercase">
                  Single-origin farms
                </p>
              </div>
            </div>

            {/* Offset decorative square */}
            <div
              className="absolute -bottom-5 -right-5 w-20 h-20 border border-[#C8A96E]/20 pointer-events-none"
              style={{ borderRadius: "2px" }}
            />
          </motion.div>

          {/* Text — right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <span className="text-[#C8A96E] text-xs tracking-[0.35em] uppercase font-sans mb-6 block">
              Our Story
            </span>
            <h2
              className="font-serif text-[#F5EFE6] leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              From farm
              <br />
              to your cup
            </h2>

            <div className="space-y-5 text-[#7A756E] text-base font-sans leading-relaxed">
              <p>
                We travel to the source. Every bean in our lineup has a name —
                not just a country, but a farm, a farmer, and often a
                handshake. We visit our producers each harvest season to
                understand what the soil is doing, and to bring that story back
                into the cup.
              </p>
              <p>
                Back in the roastery, nothing is rushed. Small batches, careful
                notes, and weeks of dialing before anything makes it to the
                bar. When it reaches you, it&apos;s not just coffee — it&apos;s a very
                specific moment in time, preserved in a ceramic cup.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-10 h-px bg-[#C8A96E]/40" />
              <span className="text-[#C8A96E] text-sm font-serif italic">
                Est. 2020, Downtown District
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
