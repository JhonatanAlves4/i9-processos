'use client'

import PartnersCarousel from "./PartnersCarousel"

export default function HomePartners(){
    return(
        <section>
            <div className="w-[100vw] px-10 mt-20">
                <div className="flex align-center justify-center">
                    <h1 className="font-alfa text-5xl font-semibold mb-14 text-white ">Empresas que confiam na I9</h1>
                </div>
                <PartnersCarousel />
            </div>
        </section>
    )
}