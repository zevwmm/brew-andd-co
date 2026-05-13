"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I've been to specialty shops in Tokyo, Melbourne, and Copenhagen. Brew & Co. belongs in that conversation — the cold brew tonic alone is worth the detour.",
    name: "Alex M.",
    detail: "Coffee enthusiast, Portland",
    featured: true,
  },
  {
    quote:
      "The kind of place you find yourself staying two hours longer than planned. Good coffee, quieter than it should be.",
    name: "Sarah K.",
    detail: "Regular since 2022",
    featured: false,
  },
  {
    quote:
      "Every single time I order the Honey Cortado, it tastes exactly right. That consistency is genuinely rare.",
    name: "James W.",
    detail: "Freelancer, works here Tuesdays",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-t border-[#2A2520]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C8A96E] text-xs tracking-[0.35em] uppercase font-sans mb-4 block">
            Guest words
          </span>
          <h2
            className="font-serif text-[#F5EFE6] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Heard at the bar
          </h2>
        </motion.div>

        {/* Asymmetric layout: 7-col featured + 5-col stacked */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#2A2520]">
          {/* Featured — large */}
          <motion.blockquote
            className="md:col-span-7 bg-[#0C0A09] p-8 md:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="text-[#C8A96E] font-serif leading-none mb-6 opacity-25 select-none"
              style={{ fontSize: "5rem" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <p
              className="font-serif text-[#F5EFE6] leading-relaxed italic mb-8"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
            >
              {testimonials[0].quote}
            </p>
            <footer>
              <p className="text-[#F5EFE6] font-sans font-medium text-sm">
                {testimonials[0].name}
              </p>
              <p className="text-[#7A756E] font-sans text-xs mt-1">
                {testimonials[0].detail}
              </p>
            </footer>
          </motion.blockquote>

          {/* Two smaller — stacked */}
          <div className="md:col-span-5 flex flex-col gap-px">
            {testimonials.slice(1).map((t, i) => (
              <motion.blockquote
                key={t.name}
                className="flex-1 bg-[#0C0A09] p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 + 0.1 }}
              >
                <div
                  className="text-[#C8A96E] font-serif leading-none mb-4 opacity-25 select-none"
                  style={{ fontSize: "3.5rem" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="text-[#7A756E] font-sans text-sm leading-relaxed italic mb-6">
                  {t.quote}
                </p>
                <footer>
                  <p className="text-[#F5EFE6] font-sans font-medium text-sm">
                    {t.name}
                  </p>
                  <p className="text-[#7A756E] font-sans text-xs mt-1">
                    {t.detail}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
