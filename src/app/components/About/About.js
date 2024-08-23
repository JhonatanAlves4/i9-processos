"use client";

import Image from "next/image";

import './About.css';

export default function About() {
  return (
    <section id="About" className="flex h-80vh w-[100vw] px-10">
      <div className="flex flexDiv flex-row md:flex w-full h-full mt-20">
        <div className="lineDeal lineDeal2 w-1/2 lg:w-1/3 h-full lg:-left-10 relative pr-4 py-4 border-r-4 border-t-4 md:border-r-8 md:border-t-8 border-b-8 border-customBlue100 mb-10 lg:mb-0">
          <Image
            src="/deal1.jpg"
            alt="Descrição da imagem"
            height={600}
            width={600}
            className="deal lg:w-400 lg:h-400"
          />
        </div>
        <div className="w-full lg:w-2/3 h-full flex flex-col justify-center items-center text-center text-white mt-14 ">
          <h3 className="font-medium text-[22px] md:text-[28px] lg:text-[30px] ">
            A evolução para seu projeto está aqui
          </h3>
          <h1 className="leading-tight text-[30px] md:text-[35px] lg:text-[40px] max-w-[895px] my-[35px] font-semibold  text-white">
            Somos uma empresa conectada e atualizada com as tendências,
            observando o movimento e as necessidades do mercado para se destacar
            oferecendo serviços inovadores e disruptivos.
          </h1>
          <h2 className="text-[20px] md:text-[22px] lg:text-[25px] max-w-[520px]">
            Trabalhamos com profissionais altamente disruptivos e com foco na
            resolução de problemas.
          </h2>
        </div>
      </div>
    </section>
  );
}
