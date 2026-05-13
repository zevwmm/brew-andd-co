import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Menu from "@/components/sections/Menu";
import Story from "@/components/sections/Story";
import Testimonials from "@/components/sections/Testimonials";
import Visit from "@/components/sections/Visit";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Menu />
      <Story />
      <Testimonials />
      <Visit />
      <CTAFinal />
      <Footer />
    </main>
  );
}
