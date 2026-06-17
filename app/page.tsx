import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/Marquee";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Courses from "@/components/Courses";
import Faculty from "@/components/Faculty";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <About />
      <WhyUs />
      <Courses />
      <Faculty />
      <Reviews />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
