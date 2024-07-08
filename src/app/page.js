
import About from "./components/About/About";
import Tecs from "./components/About/Tecs";
import Possibilits from "./components/Possibilits/Possibilits";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HomePartners from "./components/Partners/HomePartners";
import Services2 from "./components/Services/Services2";
import Soluctions from "./components/Soluctions/Soluctions";
import Testimonials2 from "./components/Testimonials2/Testimonials2";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Tecs />
      <Services2 />
      <Possibilits />
      <Soluctions />
      <Testimonials2 />
      <HomePartners />
      <Contact />
      <Footer />
    </main>
  );
}
