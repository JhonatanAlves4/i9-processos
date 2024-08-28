"use client";

import Link from "next/link";
import ArrowDown from "../icons/arrow-bottom";
import "./Hero.css";

export default function Hero() {
  const smoothScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="Hero" className="flex items-center pt-28 h-[90vh] min-h-[680px] w-[100%] px-11">
      <div className={`hero-background irru`}>
        <div className="h-full w-full flex flex-col justify-center items-start relative ">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-customBlue to-transparent opacity-100 rounded-[50px]"></div>
          <div className="flex flex-col z-10 margin ml-[157px] mr-8 w-[562px] h-[515px]">
            <h1 className="alfa mb-[35px] text-[30px] lg:text-[50px] md:text-[40px] w-full text-white leading-[58px] tracking-tight">
              Soluções inteligentes <br /> para empresas <br /> mais eficientes.
            </h1>
            <p className="blinker text-[28px] lg:text-[30px] text-white w-[527px] h-fit mb-[52px] leading-[50px]">
              Estamos comprometidos em desenvolver soluções digitais sob medida,
              focadas não apenas em tecnologia, mas principalmente na resolução
              eficaz de problemas.
            </p>
            <a
              className="w-fit"
              target="_blank"
              href="https://wa.me/5548988143504?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20a%20I9%20TI%20Solutions."
            >
              <button
                className="w-[285px] text-[20px] py-4 px-8 rounded-full text-white hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold"
                onClick={() => smoothScrollToSection("Hero")}
              >
                ENTRE EM CONTATO
              </button>
            </a>
          </div>
          <button
            className="absolute left-1/2 -bottom-6 w-16 h-16 rounded-full flex items-center justify-center aling-center bg-blue-800 animate-bounce text-black p-2"
            onClick={() => smoothScrollToSection("About")}
          >
            <Link href="#About">
              <ArrowDown />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
