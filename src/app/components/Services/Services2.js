"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Services2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [alignment, setAlignment] = useState("left");

  const services = [
    {
      title: "Desenvolvimento de software",
      description: "Nossa equipe experiente e versátil acelera o desenvolvimento e a criação de produtos tecnológicos, utilizando tecnologias modernas. Também oferecemos suporte na manutenção de sistemas legados, garantindo eficiência e inovação contínua para atender às necessidades de negócios de nossos clientes.",
      conteudo_1 : "Inovação constante",
      conteudo_2 : "Expertise comprovada",
      conteudo_3 : "Flexibilidade operacional",
      conteudo_4 : "Compromisso com resultados",
    },
    {
      title: "Consultoria e gestão de projetos",
      description: "Transforme suas ideias em realidade com nossa consultoria especializada e gestão de projetos eficiente. Otimizamos recursos, mitigamos riscos e garantimos entrega pontual, superando expectativas e impulsionando o sucesso do seu negócio.",
      conteudo_1 : "Metodologias Ágeis",
      conteudo_2 : "Experiência Multissetorial",
      conteudo_3 : "Foco em Resultados",
      conteudo_4 : "Suporte Contínuo",
    },
    {
      title: "Outsourcing",
      description: "Maximize a eficiência e reduza custos com nosso serviço de outsourcing. Disponibilizamos profissionais altamente qualificados para integrar sua equipe, garantindo expertise técnica, inovação contínua e suporte ágil, permitindo que você foque no crescimento estratégico do seu negócio.",
      conteudo_1 : "Profissionais Especializados",
      conteudo_2 : "Escalabilidade Rápida",
      conteudo_3 : "Redução de Custos",
      conteudo_4 : "Integração Fluida",
    },
    {
      title: "SurveyPro",
      description: "Nossa plataforma transforma feedback em ação, aumentando significativamente a taxa de resposta e gerando insights valiosos. Facilite a coleta e análise de dados, promovendo a melhoria contínua e elevando a satisfação do cliente ao próximo nível.",
      conteudo_1 : "Envio Omnicanal",
      conteudo_2 : "Templates inteligentes",
      conteudo_3 : "Design responsivo",
      conteudo_4 : "Dashboards dinâmicos",
    },
    {
      title: "NextSuite",
      description: "Automatize processos burocráticos e maximize lucros com nosso sistema de gestão empresarial integrado. Oferecemos todos os módulos necessários para otimizar operações, aumentar eficiência e impulsionar o crescimento do seu negócio.",
      conteudo_1 : "Automação Total",
      conteudo_2 : "Integração",
      conteudo_3 : "Flexibilidade",
      conteudo_4 : "Dashboards inteligentes",
    },
    {
      title: "Rifa Fácil",
      description: "Simplifique e potencialize suas campanhas com nossa plataforma completa. Crie, publique e compartilhe sorteios e rifas facilmente, utilizando recursos avançados de ranking, histórico e personalização para engajar seu público e maximizar resultados.",
      conteudo_1 : "Facilidade de uso",
      conteudo_2 : "Recursos avançados",
      conteudo_3 : "Engajamento otimizado",
      conteudo_4 : "Dashboards personalizados",
    },
    {
      title: "I9 Car",
      description: "Transforme a gestão de veículos com nossa plataforma completa. Facilite vendas e revendas, controle estoques, automatize processos e ofereça uma experiência de compra e venda ágil e eficiente, maximizando lucros e satisfazendo clientes.",
      conteudo_1 : "Integração Multicanal",
      conteudo_2 : "Gestão de Leads Eficiente",
      conteudo_3 : "Experiência do Cliente Personalizada",
      conteudo_4 : "Gestão da avaliação",
    },
    {
      title: "Avaliação de desempenho",
      description: "Potencialize o talento da sua equipe com nossa avaliação de desempenho personalizada. Utilizamos metodologias avançadas para medir e melhorar o desempenho individual e coletivo, garantindo alinhamento estratégico e crescimento contínuo.",
      conteudo_1 : "Metodologias Avançadas",
      conteudo_2 : "Feedback Construtivo",
      conteudo_3 : "Alinhamento Estratégico",
      conteudo_4 : "Desenvolvimento Profissional",
    },
  ];

  useEffect(() => {
    if (activeIndex < 4) {
      setAlignment("left");
    } else {
      setAlignment("right");
    }
  }, [activeIndex]);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="Services"
      className="relative w-[100vw] px-2 bg-gray-200 -skew-y-3 mt-14 py-20 hidden lg:block"
      style={{
        backgroundImage: "url('/fundo-services.png')",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-100 h-60 inset-0 bg-gradient-to-b from-white to-transparent "></div>
      <div className="relative skew-y-3 text-center pb-14">
        <h1 className="font-alfa font-semibold text-customPurple300 text-[50px] ">
          Conheça nossos serviços e soluções empresariais
        </h1>
        <p className="text-[30px]">
          Tudo organizado para potencializar os seus resultados.
        </p>
      </div>
      <div className="relative">
        <ul className="buttons flex justify-between mx-10 rounded-lg px-4 py-2">
          {[
            "Desenvolvimento de software",
            "Consultoria e gestão de projetos",
            "Outsourcing",
            "SurveyPro",
            "NextSuite",
            "Rifa Fácil",
            "I9 Car",
            "Avaliação de Desempenho",
          ].map((text, index) => (
            <li
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`font-alfa flex-1 cursor-pointer hover:bg-customPurple300 ease-out duration-500 flex items-center justify-center px-2 py-2 mx-2 rounded-lg text-lg font-medium ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button className="text-center text-white text-services">
                {text.split(" ").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < text.split(" ").length - 1 && " "}
                  </React.Fragment>
                ))}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`content-services relative mt-1 mx-10 rounded-[50px] rounded-br-none w-[70%] ${
          alignment === "left" ? "ml-10" : "ml-auto"
        }`}
      >
        <div className="skew-y-3 grid grid-cols-2 gap-20 px-10 pt-14 pb-6 text-white">
          <div className="text-white">
            <h1 className="font-alfa text-4xl mb-10 font-semibold">
              {services[activeIndex].title}
            </h1>
            <p className="text-xl">{services[activeIndex].description}</p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-8 mb-4 z-1">
              <div className="cards bg-gray-100 text-center px-12 py-12 rounded-3xl">
                <p>{services[activeIndex].conteudo_1}</p>
              </div>
              <div className="cards bg-gray-100 text-center px-12 py-12 rounded-3xl">
                <p>{services[activeIndex].conteudo_2}</p>
              </div>
              <div className="cards bg-gray-100 text-center px-12 py-12 rounded-3xl">
                <p>{services[activeIndex].conteudo_3}</p>
              </div>
              <div className="cards bg-gray-100 text-center px-12 py-12 rounded-3xl">
                <p>{services[activeIndex].conteudo_4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative skew-y-3 bg-customPurple300 mx-10 rounded-b-[50px] h-24 -top-14 w-[70%] ${
          alignment === "left" ? "ml-10" : "ml-auto"
        }`}
        style={{ zIndex: -1 }}
      ></div>
    </section>
  );
}
