"use client";

import Image from "next/image";

export default function Possibilits() {
  return (
    <section className="h-fit w-[100%] px-10 mt-14">
      <div className="flex flex-row h-full bg-gradient-to-t from-customBlue100 to-transparent rounded-[50px] text-customPurple300 mx-10">
        <div className="flex flex-col w-[50%] pl-48">
          <h1 className="font-alfa text-[50px] font-bold mb-10 mt-14 leading-tight">
            Ilimitadas
            <br /> possibilidades na
            <br /> solução de problemas
          </h1>
          <p className="w-fit text-[25px] font-semibold leading-tight mb-8">
            Na i9 TI Solutions, contamos com uma equipe excepcionalmente
            experiente e altamente capacitada, dedicada a desenvolver soluções
            sob medida para cada desafio. Utilizando as tecnologias mais
            avançadas e adequadas para cada projeto, nossa equipe está
            comprometida em oferecer a melhor experiência do usuário possível.
            Priorizamos a usabilidade, a acessibilidade e o design intuitivo em
            todas as soluções que desenvolvemos, garantindo que nossos clientes
            e seus usuários finais tenham uma experiência digital excepcional em
            cada interação.
          </p>
        </div>
        <div className="flex items-end w-[50%]">
          <div>
            <Image
              src="/anom.svg"
              alt="Imagem ilustrativa"
              width={0}
              height={0}
              className="flex w-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
