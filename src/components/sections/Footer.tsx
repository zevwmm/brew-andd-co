export default function Footer() {
  return (
    <footer className="border-t border-[#2A2520] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <span className="font-serif text-[#F5EFE6] text-lg">Brew & Co.</span>
          <span className="text-[#7A756E] font-sans text-sm">
            © 2026 All rights reserved.
          </span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-[#7A756E] hover:text-[#C8A96E] transition-colors duration-200"
            aria-label="Instagram"
          >
            {/* Instagram SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://wa.me/621234567890"
            className="text-[#7A756E] hover:text-[#C8A96E] transition-colors duration-200 text-sm font-sans"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
