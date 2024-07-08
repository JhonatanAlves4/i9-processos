'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const slideRef = useRef(null);
  const states = [
    { zIndex: 1, width: 447, height: 476, top: 69, left: 234, scale: 0.5, blur: '6px', opacity: 0 },
    { zIndex: 2, width: 447, height: 476, top: 6, left: -100, scale: 0.7, blur: '2px', opacity: 1 },
    { zIndex: 3, width: 447, height: 476, top: 12, left: 100, scale: 0.85, blur: '1px', opacity: 1 },
    { zIndex: 4, width: 447, height: 476, top: 0, left: 400, scale: 1, blur: '0px', opacity: 1 },
    { zIndex: 3, width: 447, height: 476, top: 12, left: 700, scale: 0.85, blur: '1px', opacity: 1 },
    { zIndex: 2, width: 447, height: 476, top: 6, left: 900, scale: 0.7, blur: '2px', opacity: 1 },
    { zIndex: 1, width: 447, height: 476, top: 69, left: 1100, scale: 0.5, blur: '5px', opacity: 0 },
  ];

  const contents = [
    { id: 1, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
    { id: 2, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
    { id: 3, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
    { id: 4, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
    { id: 5, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
    { id: 6, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
    { id: 7, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
  ];

  const move = () => {
    const lis = slideRef.current.children;
    Array.from(lis).forEach((li, index) => {
      const state = states[index];
      li.style.zIndex = state.zIndex;
      li.style.width = `${state.width}px`;
      li.style.height = `${state.height}px`;
      li.style.top = `${state.top}px`;
      li.style.left = `${state.left}px`;
      li.style.transform = `scale(${state.scale})`;
      li.style.filter = `blur(${state.blur})`;
      li.style.opacity = state.opacity;
    });
  };

  const next = () => {
    states.unshift(states.pop());
    move();
  };

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    move();
  }, []);

  return (
    <div className="relative w-full h-full mx-auto flex justify-center items-center">
      <ul ref={slideRef} className="relative w-[1240px] h-full list-none m-0 p-0 flex justify-center items-center">
        {contents.map((content, index) => (
          <li key={index} className="absolute bg-white border-2 border-customPurple100 rounded-[50px] cursor-pointer transition-all duration-1000 ease-in-out flex items-center justify-center text-white p-4">
            <div className=''>
              <div>
                <img src={content.imageUrl} alt={content.title} className="absolute -top-5 -right-5 h-26 w-26 object-cover mb-4 rounded-lg" />
              </div>
              <div className='absolute left-8 top-0 h-full w-6 bg-customPurple100'></div>
              <div><Image src='/logo-card.svg' width={76} height={76} alt='logo' className='absolute left-1 bottom-2' /> </div>
              <div className='pl-12 px-14 text-customPurple300'>
                <h2 className='text-[25px] font-semibold'>Feedbacks dos nossos clientes</h2>
                <div className='w-full h-1 bg-customPurple100'></div>
                <div className="flex mb-2 w-full ">
                  {Array.from({ length: content.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-4xl">★</span>
                  ))}
                  {Array.from({ length: 5 - content.stars }).map((_, i) => (
                    <span key={i} className="text-gray-300 text-4xl">★</span>
                  ))}
                </div>
                <h2 className="text-[25px] font-base mb-2">{content.title}</h2>
                <p className=" text-[18px]">{content.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
