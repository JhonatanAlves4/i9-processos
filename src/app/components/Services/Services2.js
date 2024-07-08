'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Services2() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [alignment, setAlignment] = useState('left');

    const services = [
        {
            title: "Desenvolvimento de software",
            description: "Aqui iremos poder desenvolver algum texto sobre a plataforma, com algumas características ideias, funcionamentos e resultados ilustrativos. Aqui iremos poder desenvolver algum texto sobre a plataforma, com algumas características ideias, funcionamentos e resultados ilustrativos"
        },
        {
            title: "Consultoria e gestão de projetos",
            description: "Descrição para Consultoria e gestão de projetos"
        },
        {
            title: "Outsourcing",
            description: "Descrição para Outsourcing"
        },
        {
            title: "SurveyPro",
            description: "Descrição para SurveyPro"
        },
        {
            title: "NextSuite",
            description: "Descrição para NextSuite"
        },
        {
            title: "Rifa Fácil",
            description: "Descrição para Rifa Fácil"
        },
        {
            title: "I9 Car",
            description: "Descrição para I9 Car"
        },
        {
            title: "RP",
            description: "Descrição para RP"
        }
    ];

    useEffect(() => {
        if (activeIndex < 4) {
            setAlignment('left');
        } else {
            setAlignment('right');
        }
    }, [activeIndex]);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section id="Services" className="relative w-[100vw] px-2 bg-gray-200 -skew-y-3 mt-14 py-20 hidden lg:block" 
                 style={{ backgroundImage: "url('/fundo-services.png')", backgroundPosition: 'center' }}>
            <div className="absolute w-100 h-60 inset-0 bg-gradient-to-b from-white to-transparent "></div>
            <div className="relative skew-y-3 text-center pb-14">
                <h1 className='font-alfa font-semibold text-customPurple300 text-[50px] '>Conheça nossa suíte de soluções empresariais</h1>
                <p className='text-[30px] ' >Tudo organizado para potencializar os seus resultados.</p>
            </div>
            <div className="relative">
                <ul className="buttons flex justify-between mx-10 rounded-lg px-4 py-2">
                    {["Desenvolvimento de software", "Consultoria e gestão de projetos", "Outsourcing", "SurveyPro", "NextSuite", "Rifa Fácil", "I9 Car", "RP"].map((text, index) => (
                        <li key={index} className={`font-alfa flex-1 flex items-center justify-center px-2 py-2 mx-2 rounded-lg text-lg font-medium ${activeIndex === index ? 'active' : ''}`}>
                            <button onClick={() => handleButtonClick(index)} className="text-center">
                                {text.split(' ').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < text.split(' ').length - 1 && ' '}
                                    </React.Fragment>
                                ))}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`content-services relative mt-1 mx-10 rounded-lg w-[70%] ${alignment === 'left' ? 'ml-10' : 'ml-auto'}`}>
                <div className="skew-y-3 grid grid-cols-2 gap-20 px-10 pt-14 pb-6 text-white">
                    <div className='text-white'>
                        <h1 className="font-alfa text-4xl mb-10 font-semibold">{services[activeIndex].title}</h1>
                        <p className='text-xl'>{services[activeIndex].description}</p>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-8 mb-4 z-1">
                            <div className="cards bg-gray-100 px-12 py-12 rounded-lg">
                                <p>algum conteúdo aqui</p>
                            </div>
                            <div className="cards bg-gray-100 px-12 py-12 rounded-lg">
                                <p>algum conteúdo aqui</p>
                            </div>
                            <div className="cards bg-gray-100 px-12 py-12 rounded-lg">
                                <p>algum conteúdo aqui</p>
                            </div>
                            <div className="cards bg-gray-100 px-12 py-12 rounded-lg">
                                <p>algum conteúdo aqui</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`relative skew-y-3 bg-customPurple300 mx-10 rounded-lg h-24 -top-14 w-[70%] ${alignment === 'left' ? 'ml-10' : 'ml-auto'}`} style={{ zIndex: -1 }}></div>
        </section>
    );
}
