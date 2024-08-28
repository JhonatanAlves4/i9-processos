"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "../icons/Menu";

export default function Mobile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    <div className="block lg:hidden">
      <div className="fixed w-full z-50 h-[66px] bg-[#808CF5] backdrop-blur-lg shadow-lg ">
        <div className="mx-auto py-2 flex justify-between items-center max-w-6xl px-6">
          <div className="text-lg font-bold">
            <Link href="/">
              <Image src="/Logoi9.png" alt="logo" width={100} height={100} />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => {
                  setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                }}
                className="bg-secondary p-2 rounded-md"
              >
                <Menu />
              </button>
              {dropdownOpen && (
                <div className="absolute flex flex-col w-fit h-fit justify-between bg-[#808CF5] right-[0px] top-[60px] rounded-[10px]">
                  <a
                    href="#Hero"
                    onClick={() => {
                      smoothScrollToSection("#Hero");
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    onTouchEnd={() => {
                      smoothScrollToSection("#Hero");
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Home
                  </a>
                  <a
                    href="#About"
                    onClick={() => {
                      smoothScrollToSection("#About");
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    onTouchEnd={() => {
                      smoothScrollToSection("#About");
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Sobre Nós
                  </a>
                  <a
                    href="#Services"
                    onClick={() => {
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    onTouchEnd={() => {
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Serviços
                  </a>
                  <a
                    href="#Solutions"
                    onClick={() => {
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    onTouchEnd={() => {
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Portfólio
                  </a>
                  <a
                    href="#Feedbacks"
                    onClick={() => {
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    onTouchEnd={() => {
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Testemunhos
                  </a>
                  <a
                    href="#Contact"
                    onClick={() => {
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    onTouchEnd={() => {
                      setTimeout(() => setDropdownOpen(!dropdownOpen), 100);
                    }}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Contatos
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
