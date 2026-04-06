import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Menu from "@/components/Menu";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutUs />
        <Menu />
        <Schedule />
        <Contact />
        <FAQ />
        <Social />
      </main>
      <Footer />
    </>
  );
}
