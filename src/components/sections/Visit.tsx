"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function Visit() {
  return (
    <section id="visit" className="py-24 md:py-32 border-t border-[#2A2520]">
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
            Come in
          </span>
          <h2
            className="font-serif text-[#F5EFE6] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Find us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Info block */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex gap-4">
              <MapPin
                className="w-5 h-5 text-[#C8A96E] mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-[#F5EFE6] font-sans font-medium text-sm mb-2">
                  Location
                </p>
                <p className="text-[#7A756E] font-sans text-sm leading-relaxed">
                  123 Coffee Lane
                  <br />
                  Downtown District, CA 90210
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock
                className="w-5 h-5 text-[#C8A96E] mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-[#F5EFE6] font-sans font-medium text-sm mb-2">
                  Hours
                </p>
                <p className="text-[#7A756E] font-sans text-sm leading-relaxed">
                  Monday – Friday: 7AM – 10PM
                  <br />
                  Saturday – Sunday: 8AM – 10PM
                </p>
              </div>
            </div>

            <div className="border-t border-[#2A2520] pt-8">
              <p className="text-[#7A756E] font-sans text-sm leading-relaxed mb-5">
                No reservations needed. Seats are first-come, and laptops are
                welcome until 5PM.
              </p>
              <a
                href="https://wa.me/621234567890"
                className="text-[#C8A96E] text-sm font-sans border-b border-[#C8A96E]/30 hover:border-[#C8A96E] transition-colors duration-200 pb-px"
              >
                WhatsApp us →
              </a>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: "4px",
                aspectRatio: "16/10",
                background:
                  "linear-gradient(145deg, #1a1510 0%, #1C1A12 50%, #141210 100%)",
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.07) 0%, transparent 70%)",
                }}
              />

              {/* Grid pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="map-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#C8A96E"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>

              {/* Location pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C8A96E]" />
                  <div
                    className="absolute -inset-2 rounded-full border border-[#C8A96E]/30 animate-ping"
                    style={{ animationDuration: "2s" }}
                  />
                  {/* Tooltip */}
                  <div
                    className="absolute -top-9 left-1/2 -translate-x-1/2 border border-[#2A2520] px-3 py-1.5 whitespace-nowrap"
                    style={{
                      background: "#1a1510",
                      borderRadius: "2px",
                    }}
                  >
                    <p className="text-[#C8A96E] text-xs font-sans">
                      Brew & Co.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
