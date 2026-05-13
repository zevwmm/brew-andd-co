"use client";

import { motion } from "framer-motion";

const menuItems = [
  {
    icon: "☕",
    name: "House Blend Latte",
    price: "$4.50",
    description:
      "Our seasonal single-origin espresso with silky steamed milk and a whisper of sea salt.",
    tag: "Bestseller",
  },
  {
    icon: "🧊",
    name: "Cold Brew Tonic",
    price: "$5.00",
    description:
      "Slow-steeped for 18 hours, poured over tonic water with a curl of grapefruit peel.",
    tag: "Seasonal",
  },
  {
    icon: "🍯",
    name: "Honey Cortado",
    price: "$4.00",
    description:
      "Equal parts espresso and warm milk, finished with a thread of raw clover honey.",
    tag: "Staff Pick",
  },
  {
    icon: "🌿",
    name: "Matcha Oat Flat White",
    price: "$5.50",
    description:
      "Ceremonial-grade matcha whisked with micro-foamed oat milk. No espresso, full character.",
    tag: "Vegan",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="text-[#C8A96E] text-xs tracking-[0.35em] uppercase font-sans mb-4 block">
              Our Signatures
            </span>
            <h2
              className="font-serif text-[#F5EFE6] leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Made to linger
            </h2>
          </div>
          <p className="text-[#7A756E] text-sm font-sans max-w-xs leading-relaxed">
            Drinks that ask you to slow down. Each one is built around a single,
            considered flavor.
          </p>
        </motion.div>

        {/* 2×2 Grid — gap-px on dark bg creates hairline dividers */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A2520]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {menuItems.map((item) => (
            <motion.article
              key={item.name}
              variants={cardVariants}
              className="group relative bg-[#0C0A09] p-8 md:p-10 transition-colors duration-300 hover:bg-[#141210] overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="leading-none select-none"
                  style={{ fontSize: "3.5rem" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span className="font-serif text-[#C8A96E] text-2xl font-semibold">
                  {item.price}
                </span>
              </div>

              <h3 className="font-serif text-xl text-[#F5EFE6] mb-3">
                {item.name}
              </h3>

              <p className="text-[#7A756E] text-sm font-sans leading-relaxed mb-6">
                {item.description}
              </p>

              <span className="inline-block text-[10px] text-[#C8A96E]/70 tracking-[0.2em] uppercase font-sans border border-[#C8A96E]/20 px-3 py-1">
                {item.tag}
              </span>

              {/* Bottom hover accent line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C8A96E] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>

        {/* View full menu link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="#"
            className="text-[#7A756E] text-sm font-sans border-b border-[#7A756E]/30 hover:text-[#C8A96E] hover:border-[#C8A96E]/40 transition-all duration-200 pb-px"
          >
            View full menu →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
