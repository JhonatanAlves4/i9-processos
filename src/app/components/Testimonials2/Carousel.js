"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const states = [
    {
      zIndex: 1,
      width: 447,
      height: 476,
      top: 69,
      left: 234,
      scale: 0.5,
      blur: "6px",
      opacity: 0,
    },
    {
      zIndex: 2,
      width: 447,
      height: 476,
      top: 6,
      left: -100,
      scale: 0.7,
      blur: "2px",
      opacity: 1,
    },
    {
      zIndex: 3,
      width: 447,
      height: 476,
      top: 12,
      left: 100,
      scale: 0.85,
      blur: "1px",
      opacity: 1,
    },
    {
      zIndex: 4,
      width: 447,
      height: 476,
      top: 0,
      left: 400,
      scale: 1,
      blur: "0px",
      opacity: 1,
    },
    {
      zIndex: 3,
      width: 447,
      height: 476,
      top: 12,
      left: 700,
      scale: 0.85,
      blur: "1px",
      opacity: 1,
    },
    {
      zIndex: 2,
      width: 447,
      height: 476,
      top: 6,
      left: 900,
      scale: 0.7,
      blur: "2px",
      opacity: 1,
    },
    {
      zIndex: 1,
      width: 447,
      height: 476,
      top: 69,
      left: 234,
      scale: 0.5,
      blur: "5px",
      opacity: 0,
    },
  ];

  const statesResponsive = [
    {
      zIndex: 1,
      width: 320,
      height: 476,
      top: 69,
      left: 234,
      scale: 0.5,
      blur: "6px",
      opacity: 0,
    },
    {
      zIndex: 2,
      width: 320,
      height: 476,
      top: 6,
      left: -100,
      scale: 0.7,
      blur: "2px",
      opacity: 1,
    },
    {
      zIndex: 3,
      width: 320,
      height: 476,
      top: 12,
      left: 100,
      scale: 0.85,
      blur: "1px",
      opacity: 1,
    },
    {
      zIndex: 4,
      width: 320,
      height: 476,
      top: 0,
      left: 400,
      scale: 1,
      blur: "0px",
      opacity: 1,
    },
    {
      zIndex: 3,
      width: 320,
      height: 476,
      top: 12,
      left: 700,
      scale: 0.85,
      blur: "1px",
      opacity: 1,
    },
    {
      zIndex: 2,
      width: 320,
      height: 476,
      top: 6,
      left: 900,
      scale: 0.7,
      blur: "2px",
      opacity: 1,
    },
    {
      zIndex: 1,
      width: 320,
      height: 476,
      top: 69,
      left: 234,
      scale: 0.5,
      blur: "5px",
      opacity: 0,
    },
  ];

  const contents = [
    {
      id: 1,
      stars: 5,
      title: "JOÂO SILVA",
      empresa: "TIS TECH",
      description:
        "“ A Parceria com a i9 revelou-se ser uma mais valia para a nossa empresa. A equipe demonstrou um alto nível de conhecimento técnico, especialmente em áreas críticas nas quais estamos envolvidos. Isso tem sido fundamental para o sucesso dos nossos projetos.",
      imageUrl: "/testimonial-1.png",
    },
    {
      id: 2,
      stars: 5,
      title: "MAURICIO SEIJI",
      empresa: "SOFTPLAN",
      description:
        "“ Como cliente, posso afirmar que minha experiência com a i9 foi excepcional. A qualidade do serviço prestado foi impressionante, com soluções personalizadas que realmente atenderam às nossas necessidades. A equipe da i9 demonstrou uma flexibilidade admirável, adaptando-se rapidamente a mudanças e prazos, e a competência dos profissionais envolvidos fez toda a diferença.",
      imageUrl: "/testimonial-2.png",
    },
    {
      id: 3,
      stars: 4,
      title: "MURILO AMARAL",
      empresa: "FARMACIAS APP",
      description:
        "“ A competência técnica o profissionalismo a abordagem proativa e o compromisso com a qualidade foram evidentes em cada etapa do projeto.Entre os concorrentes, a i9 TI Solutions se destacou como a empresa que mais entregou e de maneira mais rápida.Agradeço especialmente pela capacidade de adaptação e resposta rápida aos desafios que surgiram.",
      imageUrl: "/testimonial-3.png",
    },
    {
      id: 4,
      stars: 4,
      title: "CAMILO DOURADO",
      empresa: "NETBUSINNES",
      description:
        "“ Nossa parceria vem de muitos anos. Com a i9 conseguimos superar muitos desafios, só tenho a agradecer",
      imageUrl: "/pb.png",
    },
    // {
    //   id: 5,
    //   stars: 4,
    //   title: "RAFAELA FERREIRA",
    //   description:
    //     "“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!",
    //   imageUrl: "/pb.png",
    // },
    // {
    //   id: 6,
    //   stars: 4,
    //   title: "ROBERTO FERREIRA",
    //   description:
    //     "“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!",
    //   imageUrl: "/pb.png",
    // },
    // {
    //   id: 7,
    //   stars: 4,
    //   title: "ROBERTO FERREIRA",
    //   description:
    //     "“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!",
    //   imageUrl: "/pb.png",
    // },
  ];

  const screenWidth = window.innerWidth;

  const move = (index) => {
    const lis = slideRef.current.children;
    Array.from(lis).forEach((li, i) => {
      if (screenWidth >= 550) {
        const state = states[(i + index) % states.length];
        li.style.zIndex = state.zIndex;
        li.style.width = `${state.width}px`;
        li.style.height = `${state.height}px`;
        li.style.top = `${state.top}px`;
        li.style.left = `${state.left}px`;
        li.style.transform = `scale(${state.scale})`;
        li.style.filter = `blur(${state.blur})`;
        li.style.opacity = state.opacity;
      } else {
        const state = statesResponsive[(i + index) % states.length];
        li.style.zIndex = state.zIndex;
        li.style.width = `${state.width}px`;
        li.style.height = `${state.height}px`;
        li.style.top = `${state.top}px`;
        li.style.left = `${state.left}px`;
        li.style.transform = `scale(${state.scale})`;
        li.style.filter = `blur(${state.blur})`;
        li.style.opacity = state.opacity;
      }
    });
  };

  const next = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + contents.length) % contents.length;
      move(newIndex);
      return newIndex;
    });
  };

  const moveToSlide = (index) => {
    setCurrentIndex(index);
    move(index);
  };

  const startCarousel = () => {
    setIsPaused(false);
  };

  const stopCarousel = () => {
    setIsPaused(true);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(next, 4000);
      return () => clearInterval(interval);
    }
    return;
  }, [isPaused]);

  useEffect(() => {
    move(currentIndex);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full mx-auto flex flex-col items-center">
      <div className="w-full h-full flex justify-center items-center">
        <ul
          ref={slideRef}
          onMouseEnter={stopCarousel}
          onMouseLeave={startCarousel}
          className={`flex relative lg:justify-center lg:items-center lg:w-[1240px] h-full list-none ${
            screenWidth >= 550 ? "mr-[1200px]" : "mr-[1100px]"
          }  lg:m-0 p-0`}
        >
          {contents.map((content, index) => (
            <li
              key={index}
              className="absolute bg-white border-2 border-customPurple100 rounded-[50px] cursor-pointer transition-all duration-1000 ease-in-out flex items-center justify-center text-white p-4"
            >
              <div className="">
                <div>
                  <img
                    src={content.imageUrl}
                    alt={content.title}
                    className="absolute -top-5 rounded-[50%] -right-5 h-[115px] w-[115px] md:h-[120px] md:w-[120px] lg:h-[120px] lg:w-[120px] object-cover mb-4"
                  />
                </div>
                <div className="absolute left-8 top-0 h-full w-[45px] band-feedback"></div>
                <div>
                  <Image
                    src="/logo-card.svg"
                    width={76}
                    height={76}
                    alt="logo"
                    className="absolute left-1 bottom-2"
                  />{" "}
                </div>
                <div className="pl-12 px-14 text-customPurple300">
                  <h2 className="text-[25px] font-semibold">
                    {content.empresa}
                  </h2>
                  <div className="w-full h-1 bg-customPurple100"></div>
                  {/* <div className="flex mb-2 w-full align-stars">
                    {Array.from({ length: content.stars }).map((_, i) => (
                      <span key={i} className="text-yellow-500 text-4xl">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - content.stars }).map((_, i) => (
                      <span key={i} className="text-gray-300 text-4xl">
                        ★
                      </span>
                    ))}
                  </div> */}
                  <h2 className="text-[25px] font-base mb-2">
                    {content.title}
                  </h2>
                  <p className="text-[15px] md:text-[18px] lg:text-[18px] w-[130%] md:w-full lg:w-full leading-4 md:leading-[26px] lg:leading-[26px]">
                    {content.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex space-x-2">
        <div className="absolute flex justify-between top-[32rem] translate-x-[-50%] w-[20rem] rotate-180">
          {contents.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-[#FF00B8]" : "bg-customPurple300"
              }`}
              onClick={() => moveToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
