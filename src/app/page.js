import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Tecs from "./components/About/Tecs";
import Possibilits from "./components/Possibilits/Possibilits";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HomePartners from "./components/Partners/HomePartners";
import Services2 from "./components/Services/Services2";
import Services2Responsive from "./components/Services/Services2Responsive";
import Soluctions from "./components/Soluctions/Soluctions";
import Testimonials2 from "./components/Testimonials2/Testimonials2";
import WhatsAppButton from "./components/WhatsApp/WhatsApp";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      {/* <Hero />
      <About />
      <Tecs /> */}
      <section id="RealServices">
        <Services2 />
        <Services2Responsive />
      </section>
      {/* <Possibilits />
      <Soluctions />
      <Testimonials2 />
      <HomePartners />
      <Contact />
      <Footer />
      <WhatsAppButton /> */}
      <section
        id="Hero"
        className="flex w-screen h-screen bg-blue-400"
      ></section>
      <section
        id="About"
        className="flex w-screen h-screen bg-purple-500"
      ></section>
      {/* <section
        id="RealServices"
        className="flex w-screen h-screen bg-yellow-300"
      ></section> */}
      <section
        id="Solutions"
        className="flex w-screen h-screen bg-green-400"
      ></section>
      <section
        id="Feedbacks"
        className="flex w-screen h-screen bg-gray-400"
      ></section>
      <section
        id="Contact"
        className="flex w-screen h-screen bg-black"
      ></section>
    </main>
  );
}
