"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "../icons/Menu";

export default function Mobile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-secondary p-2 rounded-md"
              >
                <Menu />
              </button>
              {dropdownOpen && (
                <div className="absolute flex flex-col w-fit h-fit justify-between bg-[#808CF5] right-[0px] top-[60px] rounded-[10px]">
                  <Link
                    href="/#Hero"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Home
                  </Link>
                  <Link
                    href="/#About"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Sobre Nós
                  </Link>
                  <Link
                    href="/#Services"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Serviços
                  </Link>
                  <Link
                    href="/#Solutions"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Portfólio
                  </Link>
                  <Link
                    href="/#Feedbacks"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Testemunhos
                  </Link>
                  <Link
                    href="/#Contact"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-[15px] p-2 text-white font-semibold hover:text-gray-300"
                  >
                    Contatos
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
