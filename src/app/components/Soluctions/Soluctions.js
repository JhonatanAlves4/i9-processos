'use client'

import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Soluctions() {
    return (
        <section className="h-[auto] w-[100vw] xl:px-80 py-20 hidden lg:block">
            <h1 className="font-alfa text-4xl font-semibold mb-20 text-center text-white">
                Nos relacionamos com o ecossistema da sua <br />
                empresa para inovar e atingir resultados extraordinários
            </h1>
            <div className="grid lg:grid-cols-2 gap-28">
                <div className="">
                    <div className='mb-10'>
                        <h1 className='font-alfa text-3xl font-semibold mb-6 text-customPurple300'>Mais De 24 Anos De Experiência, Oferecemos Serviços De TI</h1>
                        <p className='text-[25px] text-white'>
                            Visualize colaborativamente cadeias de
                            suprimentos amigáveis ​​ao usuário e imperativo
                            de unidade cruzada. Fabrique recursos
                            competitivos e holísticos de forma autoritária.
                            Restaure holisticamente recursos em tempo real,
                            enquanto redes padronizadas.
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        <div className='flex space-x-4'>
                            <div className='bg-customPurple300 rounded-full'>
                                <div className='bg-customBlue100 w-[87px] h-[87px] rounded-full text-white  flex items-center justify-center m-1 border-[4px] border-customPurple100'>
                                    <h1 className='text-[30px] font-bold'>100%</h1>
                                </div>
                            </div>
                            <div>
                                <h2 className='font-alfa text-[25px] text-customPurple300 font-bold'>Crescimento empresarial</h2>
                                <p className='text-white text-[18px] mt-4'>Transite ideias de primeira linha com eficiência antes do mercado</p>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <div className='bg-customPurple300 rounded-full'>
                                <div className='bg-customBlue100 w-[87px] h-[87px] rounded-full text-white  flex items-center justify-center m-1 border-[4px] border-customPurple100'>
                                    <h1 className='text-[30px] font-bold'>100%</h1>
                                </div>
                            </div>
                            <div>
                                <h2 className='font-alfa text-[25px] text-customPurple300 font-bold'>Crescimento empresarial</h2>
                                <p className='text-white text-[18px] mt-4'>Transite ideias de primeira linha com eficiência antes do mercado</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center lg:justify-end">
                    <Image src="/Frame.svg" alt="fundo" layout="responsive" width={500} height={500} className="max-w-full h-auto" />
                </div>
            </div>
        </section>
    );
}
