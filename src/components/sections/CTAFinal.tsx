"use client";

import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section className="py-24 md:py-32 border-t border-[#2A2520] relative overflow-hidden">
      {/* Radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(200,169,110,0.055) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[#C8A96E] text-xs tracking-[0.35em] uppercase font-sans mb-6 block">
            Come back soon
          </span>

          <h2
            className="font-serif text-[#F5EFE6] leading-tight mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Ready for your
            <br />
            <span className="text-[#C8A96E] italic">next cup?</span>
          </h2>

          <p className="text-[#7A756E] font-sans text-base md:text-lg leading-relaxed mb-12 max-w-md">
            We&apos;re open seven days a week. No reservations needed — just show
            up and we&apos;ll take care of the rest.
          </p>

          <a
            href="#visit"
            className="inline-flex items-center gap-3 bg-[#C8A96E] text-[#0C0A09] px-10 py-4 font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#D9BE8A] hover:scale-[1.03] active:scale-[0.98]"
            style={{ borderRadius: "2px" }}
          >
            Find Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
