'use client';

import Link from "next/link";
import ArrowDown from "../icons/arrow-bottom";

export default function Hero() {
    const smoothScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="Hero" className="pt-28 h-[90vh] w-[100vw] px-8 sm:px-10 lg:px-12">
            <div className={`hero-background`}>
                <div className="h-full w-full flex flex-col justify-center items-start relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-customBlue to-transparent opacity-100 rounded-[50px]"></div>
                    <div className="z-10 mx-20 px-[150px]">
                        <h1 className="font-alfa text-3xl sm:text-3xl md:text-4xl lg:text-4xl  xl:text-[3.125rem] font-bold mb-4 w-full md:w-[60%] lg:w-[50%] text-white pt-10 mb-[35px] xl:leading-tight">
                            Soluções inteligentes para empresas mais eficientes
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:[30px] mb-[52px] text-white pb-10 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] lg:leading-snug">
                            Estamos comprometidos em desenvolver
                            soluções digitais sob medida, focadas não
                            apenas em tecnologia, mas principalmente
                            na resolução eficaz de problemas.
                        </p>
                        <button className="text-xs sm:text-xs md:text-[25px] py-2 px-4 sm:py-3 sm:px-7 md:py-4 md:px-8 rounded-full text-white hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold" onClick={() => smoothScrollToSection('Hero')}>
                            ENTRE EM CONTATO
                        </button>
                    </div>
                    <div className="absolute left-1/2 -bottom-6 w-16 h-16 rounded-full flex items-center justify-center aling-center bg-blue-800 animate-bounce">
                        <button className="text-black p-2" onClick={() => smoothScrollToSection('About')}>
                            <Link href="#About"><ArrowDown /></Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
