"use client";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="h-fit md:h-[673px] lg:h-[673px] relative mx-10 rounded-[50px] mb-10 "
    >
      <div
        className="h-full bg-cover pl-[20%] bg-center rounded-[50px]"
        style={{ backgroundImage: 'url("/contact-background.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent rounded-[50px]"></div>
        <div className="h-full flex justify-end items-center px-4 lg:px-20 rounded-[50px] xl:py-40">
          <div className="w-full lg:w-[740px] text-white z-10 py-[2rem] md:pr-10 lg:pr-10">
            <h1 className="font-alfa text-[25px] md:text-[40px] lg:text-[48px] text-left mb-4 lg:mb-8 leading-[25px] md:leading-[46px] lg:leading-[46px] font-normal">
              Traga o seu desafio de software para quem valoriza seu
              investimento
            </h1>
            <h2 className="lg:w-[515px] text-[18px] md:text-[24px] lg:text-[30px] text-left mb-4 lg:mb-8  leading-[20px] md:leading-[30px] lg:leading-[30px]">
              Seremos sua extensão transformadora e vamos desenvolver sua ideia
              em forma de uma solução segura, bem-sucedida e com toda a
              transparência no processo até a entrega.
            </h2>
            <a
              target="_blank"
              href="https://wa.me/5548988143504?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20a%20I9%20TI%20Solutions."
            >
              <button
                className="text-xs sm:text-xs md:text-[25px] py-2 px-4 sm:py-3 sm:px-7 md:py-4 md:px-8 rounded-full text-white hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold"
                onClick={() => smoothScrollToSection("Hero")}
              >
                ENTRE EM CONTATO
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
