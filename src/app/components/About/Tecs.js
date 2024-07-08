'use client'

import Image from "next/image"

export default function Tecs() {
    return (
        <section className="w-[100vw] px-10 text-center my-20">
            <h1 className="lg:text-[40px] font-bold mb-8 text-white">
                MELHORAR E INOVAR COM AS TENDÊNCIAS <br />
                TECNOLÓGICAS
            </h1>
            <div className="flex justify-center items-center align-center">
                <div className="">
                    <div className="grid grid-cols-5 gap-[187px] mr-40">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-[32] lg:h-[32] relative group">
                            <Image src="/html.svg" layout="responsive" width={98} height={98} alt="tec1" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-[32] lg:h-[32] relative group">
                            <Image src="/github.svg" layout="responsive" width={98} height={98} alt="tec3" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-[32] lg:h-[32] relative group">
                            <Image src="/js.svg" layout="responsive" width={98} height={98} alt="tec5" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-[32] lg:h-[32] relative group">
                            <Image src="/vscode.svg" layout="responsive" width={98} height={98} alt="tec7" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-[32] lg:h-[32] relative group">
                            <Image src="/vue.svg" layout="responsive" width={98} height={98} alt="tec7" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 -mt-4 gap-[187px] ml-40">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-[32] lg:h-[32] relative group">
                            <Image src="/css.svg" layout="responsive" width={98} height={98} alt="tec2" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-[32] lg:h-[32] relative group">
                            <Image src="/c++.svg" layout="responsive" width={98} height={98} alt="tec4" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-[32] lg:h-[32] relative group">
                            <Image src="/react.svg" layout="responsive" width={98} height={98} alt="tec6" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-[32] lg:h-[32] relative group">
                            <Image src="/python.svg" layout="responsive" width={98} height={98} alt="tec8" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
