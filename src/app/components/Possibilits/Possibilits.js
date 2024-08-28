"use client";

import Image from "next/image";

export default function Possibilits() {
  return (
    <section className="flex h-fit w-[100%] justify-center px-3 lg:px-10 mt-20">
      <div className="flex flex-col lg:flex-row w-[100%] lg:w-[95%] h-full bg-gradient-to-t from-customBlue100 to-transparent rounded-[50px] text-white">
        <div className="flex flex-col w-full lg:w-[50%] pl-[20px] lg:pl-[99px]">
          <h1 className="font-alfa text-[25px] md:text-[45px] lg:text-[48px] font-medium mb-10 lg:mt-[113px] leading-[3rem]">
            Ilimitadas
            <br /> possibilidades na
            <br /> solução de problemas
          </h1>
          <p className="lg:w-fit w-full text-[18px] md:text-[25px] md:leading-[2rem] font-semibold leading-[2rem] pr-[2rem] md:pr-12 lg:max-w-[647px] mb-8 lg:pr-20">
            Na i9 TI Solutions, contamos com uma equipe experiente e altamente
            capacitada, dedicada a desenvolver soluções sob medida para cada
            desafio. Utilizando as tecnologias mais avançadas e adequadas para
            cada projeto, nossa equipe está comprometida em oferecer a melhor
            experiência do usuário possível. Priorizamos a usabilidade, a
            acessibilidade e o design intuitivo em todas as soluções que
            desenvolvemos, garantindo que nossos clientes e seus usuários finais
            tenham uma experiência digital excepcional em cada interação.
          </p>
        </div>
        <div className="flex items-end w-full lg:w-[50%]">
          <div>
            <Image
              src="/anom.svg"
              alt="Imagem ilustrativa"
              width={748}
              height={810}
              className="flex sm:ml-12 sm:w-[80%] lg:w-[100%] h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
