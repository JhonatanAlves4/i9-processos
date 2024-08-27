'use client'

import PartnersCarousel from "./PartnersCarousel"

export default function HomePartners(){
    return(
        <section>
            <div className="w-full px-3 md:px-10 lg:px-10 mt-20">
                <div className="flex align-center justify-center">
                    <h1 className="font-alfa px-5 text-center text-[30px] md:text-[35px] lg:text-[35px] font-normal mb-14 text-white ">Empresas que confiam na I9</h1>
                </div>
                <PartnersCarousel />
            </div>
        </section>
    )
}