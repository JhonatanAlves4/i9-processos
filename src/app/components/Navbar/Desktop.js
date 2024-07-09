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
    <nav className="flex flex-col items-center w-[100%]">
      <div className="fixed w-full top-0 z-50 h-[50px] bg-customPurple100"></div>
      <div className="flex fixed w-[96%] top-2 z-50 h-[79px] bg-customBlue100 shadow-lg items-center justify-between px-20 rounded-full">
        <div className="flex items-center justify-between w-full px-10 text-xl">
          <button
            className={`nav-link mx-2`}
            onClick={() => smoothScrollToSection("Hero")}
          >
            Início
          </button>
          <button
            className={`nav-link mx-2`}
            onClick={() => smoothScrollToSection("About")}
          >
            Sobre
          </button>
          <button
            className={`nav-link mx-2`}
            onClick={() => smoothScrollToSection("Services")}
          >
            Serviços
          </button>

          <div className="mx-2">
            <Image
              src="/Logoi9.png"
              alt="logo"
              width={110}
              height={110}
              className=""
            />
          </div>

          <button
            className={`nav-link mx-2`}
            onClick={() => smoothScrollToSection("Solutions")}
          >
            Experiência
          </button>
          <button
            className={`nav-link mx-2`}
            onClick={() => smoothScrollToSection("Feedbacks")}
          >
            Testemunhos
          </button>
          <button
            className={`nav-link mx-2`}
            onClick={() => smoothScrollToSection("Contact")}
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
}
