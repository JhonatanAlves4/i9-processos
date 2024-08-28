"use client";

import React, { useState } from "react";

const tabsOptions = [
  "Desenvolvimento de software",
  "Consultoria e gestão de projetos",
  "Outsourcing",
  "SurveyPro",
  "NextSuite",
  "Rifa Fácil",
  "I9 Car",
  "Avaliação de Desempenho",
];

const services = [
  {
    title: "Desenvolvimento de software",
    description:
      "Nossa equipe experiente e versátil acelera o desenvolvimento e a criação de produtos tecnológicos, utilizando tecnologias modernas. Também oferecemos suporte na manutenção de sistemas legados, garantindo eficiência e inovação contínua para atender às necessidades de negócios de nossos clientes.",
    conteudo_1: "Inovação constante",
    conteudo_2: "Expertise comprovada",
    conteudo_3: "Flexibilidade operacional",
    conteudo_4: "Compromisso com resultados",
  },
  {
    title: "Consultoria e gestão de projetos",
    description:
      "Transforme suas ideias em realidade com nossa consultoria especializada e gestão de projetos eficiente. Otimizamos recursos, mitigamos riscos e garantimos entrega pontual, superando expectativas e impulsionando o sucesso do seu negócio.",
    conteudo_1: "Metodologias Ágeis",
    conteudo_2: "Experiência Multissetorial",
    conteudo_3: "Foco em Resultados",
    conteudo_4: "Suporte Contínuo",
  },
  {
    title: "Outsourcing",
    description:
      "Maximize a eficiência e reduza custos com nosso serviço de outsourcing. Disponibilizamos profissionais altamente qualificados para integrar sua equipe, garantindo expertise técnica, inovação contínua e suporte ágil, permitindo que você foque no crescimento estratégico do seu negócio.",
    conteudo_1: "Profissionais Especializados",
    conteudo_2: "Escalabilidade Rápida",
    conteudo_3: "Redução de Custos",
    conteudo_4: "Integração Fluida",
  },
  {
    title: "SurveyPro",
    description:
      "Nossa plataforma transforma feedback em ação, aumentando significativamente a taxa de resposta e gerando insights valiosos. Facilite a coleta e análise de dados, promovendo a melhoria contínua e elevando a satisfação do cliente ao próximo nível.",
    conteudo_1: "Envio Omnicanal",
    conteudo_2: "Templates inteligentes",
    conteudo_3: "Design responsivo",
    conteudo_4: "Dashboards dinâmicos",
  },
  {
    title: "NextSuite",
    description:
      "Automatize processos burocráticos e maximize lucros com nosso sistema de gestão empresarial integrado. Oferecemos todos os módulos necessários para otimizar operações, aumentar eficiência e impulsionar o crescimento do seu negócio.",
    conteudo_1: "Automação Total",
    conteudo_2: "Integração",
    conteudo_3: "Flexibilidade",
    conteudo_4: "Dashboards inteligentes",
  },
  {
    title: "Rifa Fácil",
    description:
      "Simplifique e potencialize suas campanhas com nossa plataforma completa. Crie, publique e compartilhe sorteios e rifas facilmente, utilizando recursos avançados de ranking, histórico e personalização para engajar seu público e maximizar resultados.",
    conteudo_1: "Facilidade de uso",
    conteudo_2: "Recursos avançados",
    conteudo_3: "Engajamento otimizado",
    conteudo_4: "Dashboards personalizados",
  },
  {
    title: "I9 Car",
    description:
      "Transforme a gestão de veículos com nossa plataforma completa. Facilite vendas e revendas, controle estoques, automatize processos e ofereça uma experiência de compra e venda ágil e eficiente, maximizando lucros e satisfazendo clientes.",
    conteudo_1: "Integração Multicanal",
    conteudo_2: "Gestão de Leads Eficiente",
    conteudo_3: "Experiência do Cliente Personalizada",
    conteudo_4: "Gestão da avaliação",
  },
  {
    title: "Avaliação de desempenho",
    description:
      "Potencialize o talento da sua equipe com nossa avaliação de desempenho personalizada. Utilizamos metodologias avançadas para medir e melhorar o desempenho individual e coletivo, garantindo alinhamento estratégico e crescimento contínuo.",
    conteudo_1: "Metodologias Avançadas",
    conteudo_2: "Feedback Construtivo",
    conteudo_3: "Alinhamento Estratégico",
    conteudo_4: "Desenvolvimento Profissional",
  },
];

export default function Services2Responsive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <section
        id="Services"
        className="flex lg:hidden justify-center items-center w-screen h-screen mt-[-2rem]"
        style={{
          backgroundImage: "url('/fundo-services.png')",
          backgroundPosition: "center",
        }}
      >
        <container className="flex items-center w-[94%] h-[90%] ml-[-10px]">
          <ul className="flex flex-col w-[34%] h-[98%] justify-between items-center py-12 rounded-[25px] bg-[#9F53FF]">
            {tabsOptions.map((text, index) => (
              <li
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`font-alfa cursor-pointer hover:bg-customPurple300 ease-out w-[90%] duration-500 flex items-center py-4 justify-center px-2 rounded-[25px] ${
                  activeIndex === index
                    ? "active bg-customPurple300"
                    : " bg-[#808CF5]"
                }`}
              >
                <button className="text-center text-[11px] md:text-[18px] text-white font-thin">
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
          <div className="flex flex-col w-[66%] h-[98%] items-center p-4 bg-customPurple300 rounded-[25px]">
            <h1 className="font-alfa text-white text-[18px] md:text-[30px] text-center h-fit mb-10 font-thin">
              {services[activeIndex].title}
            </h1>
            <p className="text-white text-[16px] md:text-[25px]">{services[activeIndex].description}</p>

            <div className="grid grid-cols-2 gap-2 z-1 mt-4 md:mt-12 w-full">
              <div className="bg-gray-100 content-center text-center px-[4px] md:min-h-[99px] py-[12px] rounded-lg">
                <p className="text-[#030022] text-[12px] md:text-[25px]">{services[activeIndex].conteudo_1}</p>
              </div>
              <div className="bg-gray-100 content-center text-center px-[4px] md:min-h-[99px] py-[12px] rounded-lg">
                <p className="text-[#030022] text-[12px] md:text-[25px]">{services[activeIndex].conteudo_2}</p>
              </div>
              <div className="bg-gray-100 content-center text-center px-[4px] md:min-h-[99px] py-[12px] rounded-lg">
                <p className="text-[#030022] text-[12px] md:text-[25px]">{services[activeIndex].conteudo_3}</p>
              </div>
              <div className="bg-gray-100 content-center text-center px-[4px] md:min-h-[99px] py-[12px] rounded-lg">
                <p className="text-[#030022] text-[12px] md:text-[25px]">{services[activeIndex].conteudo_4}</p>
              </div>
            </div>
          </div>
        </container>
      </section>
    </>
  );
}
