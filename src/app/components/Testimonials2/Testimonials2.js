"use client";

import React from "react";
import Carousel from "./Carousel";

const Testimonials2 = () => {
  return (
    <div
      id="Feedbacks"
      className="min-h-[950px] md:min-h-[900px] relative items-center mt-10 pb-20 h-auto w-[100vw] bg-gray-100 skew-y-3"
      style={{
        backgroundImage: "url('/fundo-testimonials.png')",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
      <div className="relative -skew-y-3 mr-20 ml-10">
        <div className="flex justify-center align-center text-center">
          <h1 className="font-alfa text-[25px] md:text-[35px] lg:text-[35px] font-normal mt-20 mb-10 text-customPurple300 ">
            O que nossos parceiros falam sobre nossos serviços
          </h1>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonials2;
