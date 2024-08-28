"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = (percentage) => {
  const circleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const offset = circumference - (85 / 100) * circumference;
          circle.style.strokeDashoffset = offset;
        } else {
          circle.style.strokeDashoffset = circumference;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <>
      <svg
        className="progress-circle"
        width="135"
        height="135"
        ref={containerRef}
      >
        <circle
          cx="67.5"
          cy="67.5"
          r="60"
          strokeWidth="15"
          className="circle"
          ref={circleRef}
        />
      </svg>
    </>
  );
};

export default function Soluctions() {
  const [percentage] = useState(95);
  return (
    <section
      id="Solutions"
      className="flex justify-center h-[auto] w-[100%] py-20"
    >
      <div className="w-[80%] px-12 exp-container">
        <h1 className="font-alfa text-[25px] md:text-[30px] lg:text-[35px] font-normal mb-20 text-center mt-8 text-white">
          Nos relacionamos com o ecossistema da sua <br />
          empresa para inovar e atingir resultados extraordinários
        </h1>

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:w-[50%]">
            <div className="flex flex-col mb-10 lg:pr-[8rem] lg:mt-[8rem] lg:media-pedding">
              <h1 className="font-alfa text-[25px] md:text-[30px] lg:text-[35px] font-normal mb-12 text-white">
                Mais de 12 anos de experiência em projetos inovadores
              </h1>
              <p className="text-[24px] md:text-[28px] lg:text-[32px] leading-8 text-white">
                Nos destacamos por buscar entender com profundidade, as
                necessidades e expectativas de cada projeto, promovendo
                constante aproximação, colaboração e engajamento de nossos times
                com nossos clientes, promovendo a transformação digital.
              </p>
            </div>

            <div className="relative flex lg:hidden mb-8">
              <Image
                src="/imgwithtext.svg"
                alt="fundo"
                width={296}
                height={250}
                className="bg-contain w-full"
              />
            </div>

            <div className="hidden md:flex lg:flex flex-row">
              <div className="flex flex-row">
                <div className="relative">
                  <ProgressCircle percentage={percentage} />
                  <div className="div-chart">
                    <h1 className="text-chart">{percentage}%</h1>
                  </div>
                </div>

                <div className="flex flex-col h-fit w-[240px] pl-8">
                  <h2 className="text-[29px] leading-7 text-white font-bold">
                    Crescimento
                    <br /> empresarial
                  </h2>
                  <p className="text-white text-[18px] mt-4">
                    Transite ideias de primeira linha com eficiência antes do
                    mercado
                  </p>
                </div>

                <div className="relative ml-4">
                  <ProgressCircle percentage={percentage} />
                  <div className="div-chart">
                    <h1 className="text-chart">{percentage}%</h1>
                  </div>
                </div>

                <div className="flex flex-col h-fit w-[240px] pl-8">
                  <h2 className="text-[29px] leading-7 text-white font-bold">
                    Crescimento
                    <br /> empresarial
                  </h2>
                  <p className="text-white text-[18px] mt-4">
                    Transite ideias de primeira linha com eficiência antes do
                    mercado
                  </p>
                </div>
              </div>
            </div>

            <div className="flex md:hidden lg:hidden flex-row">
              <div className="flex flex-col w-full">
                <div className="flex flex-col">
                  <div className="relative">
                    <ProgressCircle percentage={percentage} />
                    <div className="div-chart-responsive">
                      <h1 className="text-chart-responsive">{percentage}%</h1>
                    </div>
                  </div>

                  <div className="flex flex-col h-fit w-[240px]">
                    <h2 className="text-[29px] leading-7 text-white font-bold mt-4">
                      Crescimento
                      <br /> empresarial
                    </h2>
                    <p className="text-white text-[18px] mt-4">
                      Transite ideias de primeira linha com eficiência antes do
                      mercado
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                  <div className="flex flex-col w-fit">
                    <div className="relative">
                      <ProgressCircle percentage={percentage} />
                      <div className="div-chart-responsive">
                        <h1 className="text-chart-responsive">{percentage}%</h1>
                      </div>
                    </div>

                    <div className="flex flex-col h-fit w-[240px]">
                      <h2 className="text-[29px] leading-7 text-white font-bold mt-4">
                        Crescimento
                        <br /> empresarial
                      </h2>
                      <p className="text-white text-[18px] mt-4">
                        Transite ideias de primeira linha com eficiência antes
                        do mercado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center items-start min-w-[800px]">
            <Image
              src="/Frame.svg"
              alt="fundo"
              width={600}
              height={600}
              className="bg-contain w-full"
            />
            <h2 className="absolute top-[4rem] left-[4.3rem] text-[48px] text-center leading-[2.5rem] text-white font-bold font-10mil-h2">
              Inovação <br /> + <br /> Satisfação
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
