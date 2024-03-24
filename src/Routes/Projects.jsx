import React from 'react'
import { useTranslation } from 'react-i18next'
import timerPhoto from '../../public/assets/images/timer-photo1.jpg'
import wordlePhoto from '../../public/assets/images/wordle-logo.png'
import moviePhoto from '../../public/assets/images/moviedatabase-logo.png'
import poemsPhoto from '../../public/assets/images/shakespeare-icon.jpg'
import stocksPhoto from '../../public/assets/images/stocks.jpg'
import spotifyPhoto from '../../public/assets/images/spotify-logo.png'
function Projects({ id }) {
  const { t } = useTranslation()
  const Projects = [
    {
      title: 'Movie Catalog',
      paragraph: 'Catálogo de Filmes que mostra as descrições e informações de filmes',
      githubLink: 'https://github.com/guipontifice/the-movie-database',
      webLink: 'https://guipontifice.github.io/the-movie-database/',
      image: moviePhoto,
      technologies: ['Online', 'React', 'JavaScript', 'TailwindCSS', 'Vite']
    },
    {
      title: 'Poems Vee',
      paragraph: "Site de Poemas que apresenta poemas ingleses, com a possibilidade de favoritar poemas e pesquisar autores.",
      githubLink: 'https://github.com/guipontifice/poems-vee',
      webLink: 'https://guipontifice.github.io/poems-vee/',
      image: poemsPhoto,
      technologies: ['Online', 'React', 'JavaScript', 'TailwindCSS', 'Vite']
    },
    {
      title: 'Valorama Assets',
      paragraph: "App feito com JavaScript para uso interno de um colaborador em uma empresa de investimentos, onde a cada 10 minutos é reapresenta os dados mais importantes das ações.",
      githubLink: 'https://github.com/guipontifice/investing-values',
      webLink: '',
      image: stocksPhoto,
      technologies: ['React', 'JavaScript', 'NodeJS', 'Puppeteer']
    },
    {
      title: 'Spotify Query',
      paragraph: 'App que pesquisa letras de músicas no spotify, mostrando também o áudio.',
      githubLink: 'https://github.com/guipontifice/songs-query',
      webLink: '',
      image: spotifyPhoto,
      technologies: ['React', 'TypeScript', 'NodeJS']
    },
    {
      title: 'Wordle',
      paragraph: "App que simula o famoso jogo Wordle, feito com React e TypeScript.",
      githubLink: 'https://github.com/guipontifice/wordle-typescript',
      webLink: '',
      image: wordlePhoto,
      technologies: ['React', 'TypeScript']
    },
    {
      title: 'Timer',
      paragraph: 'Cronômetro digital, com a possibilidade de pausar, reiniciar e parar o cronômetro a qualquer momento.',
      githubLink: 'https://github.com/guipontifice/cronometro-react',
      webLink: '',
      image: timerPhoto,
      technologies: ['React', 'TypeScript']
    },
  ]
  return (
    <>
      <div id={id} className='xxs:hidden xs:hidden sm:hidden md:hidden flex flex-col justify-center mt-40 w-10/12 font-roboto'>
        <div className=' flex justify-center w-2/12 mb-10'>
          <h2 className='flex items-center justify-center mt-32 text-purple text-xl bg-purple bg-opacity-20 rounded-xl p-3 w-full font-bold'>🛠️ Portfólio</h2>
        </div>
        <h1 className='text-white text-5xl font-semibold'>Trabalhos e Projetos</h1>
        <div className='mt-10 grid grid-cols-3 justify-center cursor-pointer'>
          {
            Projects.map((project, index) => (
              <div key={index} className='w-10/12 p-7 m-5 border rounded-2xl text-purple hover:bg-purple hover:bg-opacity-10 hover:border-0'>
                <div className='flex flex-col items-start w-full'>
                  <h2 className='text-white font-semibold text-xl'>{project.title}</h2>
                  <p className='text-gray text-md mt-5'>{project.paragraph}</p>
                </div>
                <div className='flex flex-wrap mt-2 mx-1'>
                  {
                    project.technologies.map((technology, index) => (
                      <span key={index} className={`inline-flex text-md px-2 items-center rounded-md my-1 mr-2  ${technology === 'Online' ? 'text-green bg-green bg-opacity-20' : 'text-purple bg-purple bg-opacity-20'}`}>{technology}</span>
                    ))
                  }
                </div>
                <div className='flex flex-row justify-center mt-10 items-center'>
                  <img src={project.image} alt="" className='w-64 h-56 rounded-md ' />
                </div>
                <div className='flex flex-row mt-10 text-white opacity-50 hover:opacity-100'>
                  <a
                    href={project.githubLink}
                    className='text-4xl mr-2 cursor-pointer hover:text-purple'
                    aria-label='GitHub'
                    rel='noopener'
                    target='_blank'
                  >
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  {
                    project.webLink !== '' &&
                    <a
                      href={project.webLink}
                      className='text-4xl mr-2 cursor-pointer hover:text-purple'
                      aria-label='Web'
                      rel='noopener'
                      target='_blank'
                    >
                      <ion-icon name="globe-outline"></ion-icon>
                    </a>
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden border-t border-purple border-opacity-20 mt-20 w-10/12 font-roboto'>
        <div className='flex flex-row items-center justify-center py-4 w-32 h-10 text-purple bg-purple bg-opacity-20 rounded-lg font-semibold mt-10'>
          <h2 className='mr-2'>🛠️ Portfólio</h2>
        </div>
        <div className='text-white text-3xl font-semibold mt-8'>
          <h1>Trabalhos e Projetos</h1>
        </div>
        <div className='mt-5 grid grid-cols-2 justify-center cursor-pointer'>
          {
            Projects.map((project, index) => (
              <div key={index} className='w-10/12 p-7 m-5 border rounded-2xl text-purple hover:bg-purple hover:bg-opacity-10 hover:border-0'>
              <div className='flex flex-col items-start w-full'>
                <h2 className='text-white font-semibold text-xl'>{project.title}</h2>
                <p className='text-gray text-md mt-5'>{project.paragraph}</p>
              </div>
              <div className='flex flex-wrap mt-2 mx-1'>
                {
                  project.technologies.map((technology, index) => (
                    <span key={index} className={`inline-flex text-md px-2 items-center rounded-md my-1 mr-2 ${technology === 'Online' ? 'text-green bg-green bg-opacity-20' : 'text-purple bg-purple bg-opacity-20'}`}>{technology}</span>
                  ))
                }
              </div>
              <div className='flex flex-row justify-center mt-10 items-center'>
                <img src={project.image} alt="" className='w-64 h-56 rounded-md ' />
              </div>
              <div className='flex flex-row mt-10 text-white opacity-50 hover:opacity-100'>
                <a
                  href={project.githubLink}
                  className='text-4xl mr-2 cursor-pointer hover:text-purple'
                  aria-label='GitHub'
                  rel='noopener'
                  target='_blank'
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                {
                  project.webLink !== '' &&
                  <a
                    href={project.webLink}
                    className='text-4xl mr-2 cursor-pointer hover:text-purple'
                    aria-label='Web'
                    rel='noopener'
                    target='_blank'
                  >
                    <ion-icon name="globe-outline"></ion-icon>
                  </a>
                }
              </div>
            </div>
        ))
          }
        </div>
      </div>
    </>
  )
}

export default Projects