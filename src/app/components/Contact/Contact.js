'use client';

export default function Contact() {
  return (
    <section id="Contact" className="h-[673px] relative mx-10 rounded-[50px] mb-10 ">
      <div className="h-full bg-cover bg-center rounded-[50px]" style={{ backgroundImage: 'url("/contact-background.png")' }}>
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent rounded-[50px]"></div>
        <div className="h-full flex justify-end items-center px-4 lg:px-20 rounded-[50px] xl:py-40">
          <div className="w-full lg:w-[740px] text-white z-10 pr-10">
            <h1 className="font-alfa text-sm lg:text-2xl xl:text-[50px] text-left mb-4 lg:mb-8 font-bold xl:leading-tight">
              Traga o seu desafio de software para quem valoriza seu investimento
            </h1>
            <h2 className=" lg:w-[515px] text-sm lg:text-[30px] text-left mb-4 lg:mb-8 leading-normal">
              Seremos sua extensão transformadora e vamos desenvolver sua ideia em forma de uma solução segura, bem-sucedida e com toda a transparência no processo até a entrega.
            </h2>
            <button className="text-xs sm:text-xs md:text-[25px] py-2 px-4 sm:py-3 sm:px-7 md:py-4 md:px-8 rounded-full text-white hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold" onClick={() => smoothScrollToSection('Hero')}>
              ENTRE EM CONTATO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
