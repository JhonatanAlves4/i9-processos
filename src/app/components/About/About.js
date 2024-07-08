'use client'

import Image from "next/image"

export default function About() {
    return (
        <section id="About" className="flex h-80vh w-[100vw] px-10">
            <div className="block md:flex w-full h-full mt-20">
                <div className="lineDeal w-1/2 lg:w-1/3 h-full lg:-left-10 relative pr-4 py-4 border-r-4 border-b-4 border-t-4 md:border-r-8 md:border-t-8 border-b-8 border-customBlue100 mb-10 lg:mb-0">
                    <Image
                        src="/deal1.jpg"
                        alt="Descrição da imagem"
                        height={600}
                        width={600}
                        className="deal lg:w-400 lg:h-400"
                    />
                </div>
                <div className="w-full lg:w-2/3 h-full flex flex-col justify-center items-center text-center px-10 md:px-20 text-white mt-14 ">
                    <h3 className="font-medium text-xs sm:text-base md:text-[30px] ">A evolução para seu projeto está aqui</h3>
                    <h1 className="leading-tight text-[40px] w-[895px] my-[35px] font-semibold  text-customPurple300">
                        Somos uma empresa de desenvolvimento de software e outsourcing, sempre atualizada com as tendências 
                        do mercado e as necessidades dos clientes para oferecer o melhor serviço.
                    </h1>
                    <h2 className="text-base sm:text-lg md:text-[25px]  w-[520px]">
                        Trabalhamos com profissionais altamente disruptivos e com foco na resolução de problemas.
                    </h2>
                </div>
            </div>
        </section>
    )
}
