"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="Footer" className="text-black">
      <div className="bg-customBlue100 rounded-[50px] mx-2 md:mx-8 lg:mx-10 px-4 lg:px-[60px] 2xl:px-[170px] py-8 mb-4 pr-[1rem]">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between align-center footer-design">
          <div className="flex flex-row justify-around order-1 md:order-3 gap-6 mt-10">
            <div className="mb-4 md:mb-0">
              <h2 className="mb-2 text-center text-sm md-text-[20px] lg:text-[20px] font-semibold">
                Páginas
              </h2>
              <Link
                href="#"
                className="block text-center text-15px mb-2 md:text-15px hover:text-pink-500"
              >
                Início
              </Link>
              <Link
                href="#Services"
                className="block text-center text-15px mb-2 md:text-15px hover:text-pink-500"
              >
                Serviços
              </Link>
              <Link
                href="#About"
                className="block text-center text-15px mb-2 md:text-15px hover:text-pink-500"
              >
                Sobre nós
              </Link>
              <Link
                href="#"
                className="block text-center text-15px mb-2 md:text-15px hover:text-pink-500"
              >
                Termos de uso
              </Link>
              <Link
                href="#"
                className="block text-center text-15px mb-2 md:text-15px hover:text-pink-500"
              >
                Privacidade
              </Link>
            </div>
            <div className="mb-4 md:mb-0 hidden">
              <h2 className="font-bold mb-2 text-sm md-text-[20px] lg:text-[20px]">
                Ajuda
              </h2>
              <Link
                href="#"
                className="block text-15px mb-2 md:text-15px hover:text-pink-500"
              >
                Central de Ajuda
              </Link>
              <Link
                href="#"
                className="block text-15px mb-2 md:text-15px hover:text-pink-500"
              >
                Dúvidas frequentes
              </Link>
            </div>
            <div className="hidden">
              <h2 className="font-bold mb-2 text-sm md-text-[20px]l lg:text-[20px]">
                Contato
              </h2>
              <Link
                href="#"
                className="block text-15px mb-2 md:text-15px hover:text-pink-500"
              >
                WhatsApp
              </Link>
              <Link
                href="#"
                className="block text-15px mb-2 md:text-15px hover:text-pink-500"
              >
                contato@i9tisolutions.com.br
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-[15px] md:order-2">
            <div className="mt-10">
              <div className="flex mb-4">
                <Image src="/local.svg" alt="address" width={16} height={16} />
                <p className="ml-2">
                  Estrada do Rio de Janeiro km 25, Vila Rio – Rio de Janeiro /
                  RJ
                </p>
              </div>
              <div className="flex mb-4">
                <Image src="/email.svg" alt="email" width={16} height={16} />
                <p className="ml-2">contato@i9tisolutions.com.br</p>
              </div>
              <div className="flex">
                <Image src="/whats2.svg" alt="whats" width={16} height={16} />
                <p className="ml-2">+55 (48) 98814-3504</p>
              </div>
            </div>
            <div className="hidden md:flex w-full items-center justify-center md:justify-start lg:justify-start mt-10">
              <div className="flex gap-4 justify-start margin-direita text-customPurple300">
                <Link
                  target="_blank"
                  href="https://wa.me/5548988143504?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20a%20I9%20TI%20Solutions."
                >
                  <Image src="/whats2.svg" alt="whats" width={32} height={32} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/i9tisolutions/"
                >
                  <Image src="/inst.svg" alt="inst" width={32} height={32} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/i9tisolutions/"
                >
                  <Image
                    src="/linkdn.svg"
                    alt="linkdn"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 w-full md:w-1/4 order-2 md:order-1">
            <Image src="/Logoi9all.png" alt="logo" width={186} height={186} />

            <p className="text-center text-sm md:text-15px">
              Soluções inteligentes para empresas mais eficientes.
            </p>
            <p className="text-center text-15px md:text-15px">
              &copy; Copyright 2024 i9 Ti Solutions - Todos os direitos
              reservados
            </p>
          </div>
        </div>
        <div className="flex md:hidden w-full items-center justify-center md:justify-start lg:justify-start mt-10">
          <div className="flex gap-8 justify-start margin-direita text-customPurple300">
            <Link
              target="_blank"
              href="https://wa.me/5548988143504?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20a%20I9%20TI%20Solutions."
            >
              <Image src="/whats2.svg" alt="whats" width={48} height={48} />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/i9tisolutions/"
            >
              <Image src="/inst.svg" alt="inst" width={48} height={48} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/i9tisolutions/"
            >
              <Image src="/linkdn.svg" alt="linkdn" width={48} height={48} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
