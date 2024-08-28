"use client";

import Image from "next/image";

export default function Tecs() {
  return (
    <section className="w-[100%] flex flex-col justify-center items-center align-center px-10 text-center mt-[5rem] md:my-20">
      <h1 className="text-[25px] md:text-[40px] font-semibold mb-8 text-white">
        MELHORAR E INOVAR COM AS TENDÊNCIAS TECNOLÓGICAS
      </h1>

      <div className="flex justify-between max-w-[1800px] w-[100%] lg:w-[90%] mt-4">
        <div className="w-32 h-32  relative group cursor-pointer">
          <Image
            src="/html.svg"
            layout="responsive"
            width={98}
            height={98}
            alt="tec1"
            className="mx-auto transition-transform transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-20 transition-opacity rounded-full"></div>
        </div>

        <div className="w-32 h-32 mt-10 lg:mt-24 relative group cursor-pointer">
          <Image
            src="/css.svg"
            layout="responsive"
            width={98}
            height={98}
            alt="tec2"
            className="mx-auto transition-transform transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-20 transition-opacity rounded-full"></div>
        </div>

        <div className="w-32 h-32 relative group cursor-pointer">
          <Image
            src="/github.svg"
            layout="responsive"
            width={98}
            height={98}
            alt="tec3"
            className="mx-auto transition-transform transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-20 transition-opacity rounded-full"></div>
        </div>

        <div className="w-32 h-32 mt-10 lg:mt-24 relative group cursor-pointer">
          <Image
            src="/c++.svg"
            layout="responsive"
            width={98}
            height={98}
            alt="tec4"
            className="mx-auto transition-transform transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-20 transition-opacity rounded-full"></div>
        </div>

        <div className="w-32 h-32 relative group cursor-pointer">
          <Image
            src="/js.svg"
            layout="responsive"
            width={98}
            height={98}
            alt="tec5"
            className="mx-auto transition-transform transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-20 transition-opacity rounded-full"></div>
        </div>

        <div className="w-32 h-32 mt-10 lg:mt-24 relative group cursor-pointer">
          <Image
            src="/react.svg"
            layout="responsive"
            width={98}
            height={98}
            alt="tec6"
            className="mx-auto transition-transform transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-20 transition-opacity rounded-full"></div>
        </div>

        <div className="w-32 h-32 relative group cursor-pointer">
          <Image
            src="/vscode.svg"
            layout="responsive"
            width={98}
            height={98}
            alt="tec7"
            className="mx-auto transition-transform transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-20 transition-opacity rounded-full"></div>
        </div>

        <div className="w-32 h-32 mt-10 lg:mt-24 relative group cursor-pointer">
          <Image
            src="/python.svg"
            layout="responsive"
            width={98}
            height={98}
            alt="tec8"
            className="mx-auto transition-transform transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-20 transition-opacity rounded-full"></div>
        </div>

        <div className="w-32 h-32 relative group cursor-pointer">
          <Image
            src="/vue.svg"
            layout="responsive"
            width={98}
            height={98}
            alt="tec7"
            className="mx-auto transition-transform transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-20 transition-opacity rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
