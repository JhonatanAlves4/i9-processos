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
    <div className="flex flex-col lg:hidden">
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
                  <li className="list-none p-2">
                    <Link
                      href="/#Hero"
                      className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="list-none p-2">
                    <Link
                      href="/#About"
                      className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Sobre Nós
                    </Link>
                  </li>

                  <li className="list-none p-2">
                    <Link
                      href="/#RealServices"
                      className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Serviços
                    </Link>
                  </li>

                  <li className="list-none p-2">
                    <Link
                      href="/#Solutions"
                      className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Portfólio
                    </Link>
                  </li>

                  <li className="list-none p-2">
                    <Link
                      href="/#Feedbacks"
                      className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Testemunhos
                    </Link>
                  </li>

                  <li className="list-none p-2">
                    <Link
                      href="/#Contact"
                      className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Contatos
                    </Link>
                  </li>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <section
        id="Home"
        className="flex w-screen h-screen bg-blue-400"
      ></section>
      <section
        id="About"
        className="flex w-screen h-screen bg-purple-500"
      ></section>
      <section
        id="RealServices"
        className="flex w-screen h-screen bg-yellow-300"
      ></section>
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
    </div>
  );
}
