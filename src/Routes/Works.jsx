import React from 'react'

function Works() {
    return (
        <>
            <div className='xxs:hidden xs:hidden sm:hidden md:hidden font-roboto'>
                <h2 className='flex items-center justify-center mt-32 text-purple text-xl bg-purple bg-opacity-20 rounded-xl p-3 w-full font-semibold'>
                    💼 Carreira
                </h2>
            </div>
            <div className='flex flex-col justify-center items-center align-middle mt-10 font-roboto w-10/12 text-green '>
                <h1 className='text-5xl text-white font-bold'>Trajetória até aqui</h1>
                <div className='mt-10 border border-green bg-green bg-opacity-20 rounded-xl w-2/6 p-8 hover:bg-opacity-10 hover:border-0'>
                    <h1 className='text-white text-xl font-semibold'>
                        Desenvolvedor Front-end
                    </h1>
                    <p className='text-white text-opacity-60 text-md mt-4 mb-4'>Como engenheiro de software, meu foco é criar e manter sistemas eficientes,
                        utilizando JavaScript, React e TypeScript. Desenvolvo interfaces web com NodeJS
                        no backend, otimizando para velocidade e desempenho. Implemento práticas de
                        segurança, adoto Desenvolvimento Orientado a Testes com Jest e utilizo Git para
                        um versionamento eficiente. Minha abordagem visa garantir códigos limpos, seguros
                        e de fácil manutenção, proporcionando a melhor experiência ao usuário
                    </p>
                    <div className='flex flex-row items-center justify-start mt-10'>
                        <span className='flex items-center mr-2 text-xl animate-ping text-green'>&#8226;</span>
                        <span className='font-bold text-green'>Jan/23 - Atualmente</span>
                    </div>
                </div>
                <div className='mt-10 border border-purple bg-opacity-20 rounded-xl w-2/6 p-8 hover:bg-purple hover:bg-opacity-10 hover:border-0'>
                    <h1 className='text-white text-xl font-semibold'>
                        Auxiliar de Pricing
                    </h1>
                    <p className='text-white text-opacity-60 text-md mt-4 mb-4'>Como Auxiliar de Pricing, a minha responsabilidade era criar preços condizentes com as características das empresas e com a nossa estratégia.
                        Também conduzir análises de preços, onde o foco era descobrir os motivos das disparidades de preços e aberturas que poderíamos tomar vantajens. Nessas atribuições, eram muito usados PowerBI e Excel,
                        além de outras ferramentas de análise de dados.
                    </p>
                    <div className='flex flex-row items-center justify-start mt-10'>
                        <span className='font-bold text-purple'>Jul/22 - Ago/23</span>
                    </div>
                </div>
                <div className='mt-10 border border-purple bg-opacity-20 rounded-xl w-2/6 p-8 hover:bg-purple hover:bg-opacity-10 hover:border-0'>
                    <h1 className='text-white text-xl font-semibold'>
                        Curso Técnico em Informática
                    </h1>
                    <p className='text-white text-opacity-60 text-md mt-4 mb-4'>
                        Junto ao ensino médio, fiz um curso técnico de Informática durante três anos, onde tive diversas matérias,
                        sendo essas também condizentes com o Tecnólogo em Análise e Desenvolvimento de Sistemas.
                        No final do curso, fiz um TCC Individual onde desenvolvi um sistema de gerenciamento de estoque para uma empresa fictícia.
                        E um coletivo onde desenvolvemos os sistemas de arrefecimento, irrigação e luz de uma casa sustentável.
                    </p>
                    <div className='flex flex-row items-center justify-start mt-10'>
                        <span className='font-bold text-purple'>Jan/17 - Dez/19</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works