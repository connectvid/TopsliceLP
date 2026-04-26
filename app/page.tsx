import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Products from "@/components/Products";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <Careers />
      </main>
      <Footer />
    </>
  );
}
