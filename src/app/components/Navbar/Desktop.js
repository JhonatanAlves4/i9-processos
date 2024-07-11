"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Desktop() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "Hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav className="flex flex-col items-center w-[100% bg-red-600]">
      <div className="fixed w-full top-0 z-50 h-[87px] bg-customPurple100"></div>
      <div className="flex fixed w-[96%] top-2 z-50 h-[79px] bg-customBlue100 shadow-lg items-center rounded-full">
        <div className="flex items-center justify-between w-full px-28 text-xl">
          <div className={`w-[120px]`}>
            <button
              className={`nav-link font-semibold`}
              onClick={() => smoothScrollToSection("Hero")}
            >
              Início
            </button>
          </div>

          <div className="w-[120px]">
            <button
              className={`nav-link font-semibold`}
              onClick={() => smoothScrollToSection("About")}
            >
              Sobre
            </button>
          </div>

          <div className={`w-[120px]`}>
            <button
              className={`nav-link font-semibold`}
              onClick={() => smoothScrollToSection("Services")}
            >
              Serviços
            </button>
          </div>

          <div>
            <Image
              src="/Logoi9.png"
              alt="logo"
              width={110}
              height={110}
              className=""
            />
          </div>

          <div className={`w-[120px]`}>
            <button
              className={`nav-link font-semibold`}
              onClick={() => smoothScrollToSection("Solutions")}
            >
              Experiência
            </button>
          </div>

          <div className="w-[120px]">
            <button
              className={`nav-link font-semibold`}
              onClick={() => smoothScrollToSection("Feedbacks")}
            >
              Testemunhos
            </button>
          </div>

          <div className="w-[120px]">
            <button
              className={`nav-link font-semibold`}
              onClick={() => smoothScrollToSection("Contact")}
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
