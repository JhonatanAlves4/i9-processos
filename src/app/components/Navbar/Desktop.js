"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Desktop() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");

  return (
    <nav className="flex flex-col items-center w-[100%]">
      <div className="fixed w-[99.3%] left-0 top-0 z-50 h-[87px] bg-customNewBlue"></div>
      <div className="flex fixed justify-center w-[96%] top-2 z-50 h-[79px] bg-customBlue100 shadow-lg items-center rounded-full">
        <div className="flex items-center justify-between w-[55%] ml-14 text-xl">
          <a href="#Hero" className={`w-fit`}>
            <button className={`nav-link font-semibold z-50`}>Home</button>
          </a>

          <a href="#About" className="w-fit">
            <button className={`nav-link font-semibold`}>Sobre Nós</button>
          </a>

          <a href="#Services" className={`w-fit`}>
            <button className={`nav-link font-semibold`}>Serviços</button>
          </a>

          <div>
            <Image
              src="/Logoi9.png"
              alt="logo"
              width={110}
              height={110}
              className=""
            />
          </div>

          <a href="#Solutions" className={`w-fit`}>
            <button className={`nav-link font-semibold`}>Portfólio</button>
          </a>

          <a href="#Feedbacks" className="w-fit">
            <button className={`nav-link font-semibold`}>Testemunhos</button>
          </a>

          <a href="#Contact" className="w-fit">
            <button className={`nav-link font-semibold`}>Contato</button>
          </a>
        </div>
      </div>
    </nav>
  );
}
