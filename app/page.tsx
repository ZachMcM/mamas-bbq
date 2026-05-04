import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutUs />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
