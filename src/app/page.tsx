import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import WhyChayya from "@/components/why-chayya";
import MenuPreview from "@/components/menu-preview";
import FeaturedSpecials from "@/components/featured-specials";
import Gallery from "@/components/gallery";
import MadeForCalicut from "@/components/made-for-calicut";
import Testimonials from "@/components/testimonials";
import VisitUs from "@/components/visit-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyChayya />
      <MenuPreview />
      <FeaturedSpecials />
      <Gallery />
      <MadeForCalicut />
      <Testimonials />
      <VisitUs />
      <Footer />
    </main>
  );
}
