"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Years of craft" },
  { value: "10k+", label: "Cups served" },
  { value: "100%", label: "Arabica beans" },
  { value: "4.9★", label: "Guest rating" },
];

export default function Stats() {
  return (
    <section className="border-y border-[#2A2520]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#2A2520]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="py-10 px-4 md:px-8 first:pl-0 last:pr-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="text-[#C8A96E] font-serif font-semibold mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {stat.value}
              </div>
              <div className="text-[#7A756E] text-sm font-sans tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
