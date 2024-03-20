import React from 'react'
import { useTranslation } from 'react-i18next'
import timerPhoto from '../../public/assets/images/timer-photo1.jpg'
import wordlePhoto from '../../public/assets/images/wordle-logo.png'
import moviePhoto from '../../public/assets/images/moviedatabase-logo.png'
import poemsPhoto from '../../public/assets/images/shakespeare-icon.jpg'
import stocksPhoto from '../../public/assets/images/stocks.jpg'
import spotifyPhoto from '../../public/assets/images/spotify-logo.png'
function Projects() {
  const { t } = useTranslation()
  const Projects = [
    {
      title: 'Movie Catalog',
      paragraph: t('movie_project'),
      githubLink: 'https://github.com/guipontifice/the-movie-database',
      webLink: 'https://guipontifice.github.io/the-movie-database/',
      image: moviePhoto,
      technologies: ['Online', 'React', 'JavaScript', 'TailwindCSS', 'Vite']
    },
    {
      title: 'Poems Vee',
      paragraph: t('poems_project'),
      githubLink: 'https://github.com/guipontifice/poems-vee',
      webLink: 'https://guipontifice.github.io/poems-vee/',
      image: poemsPhoto,
      technologies: ['Online', 'React', 'JavaScript', 'TailwindCSS', 'Vite']
    },
    {
      title: 'Valorama Assets',
      paragraph: t('investing_project'),
      githubLink: 'https://github.com/guipontifice/investing-values',
      webLink: '',
      image: stocksPhoto,
      technologies: ['Beta', 'React', 'JavaScript', 'NodeJS', 'Puppeteer']
    },
    {
      title: 'Spotify Query',
      paragraph: t('investing_project'),
      githubLink: 'https://github.com/guipontifice/songs-query',
      webLink: '',
      image: spotifyPhoto,
      technologies: ['Beta', 'React', 'TypeScript', 'NodeJS']
    },
    {
      title: 'Wordle',
      paragraph: t('investing_project'),
      githubLink: 'https://github.com/guipontifice/wordle-typescript',
      webLink: '',
      image: wordlePhoto,
      technologies: ['Beta', 'React', 'TypeScript']
    },
    {
      title: 'Timer',
      paragraph: t('investing_project'),
      githubLink: 'https://github.com/guipontifice/cronometro-react',
      webLink: '',
      image: timerPhoto,
      technologies: ['Beta', 'React', 'TypeScript']
    },
  ]
  return (
    <>
      <div className='xxs:hidden xs:hidden sm:hidden flex flex-col justify-center mt-40 w-10/12 font-roboto'>
        <h1 className='text-white text-5xl font-semibold'>Trabalhos e Projetos</h1>
        <div className='mt-10 grid grid-cols-3 justify-center cursor-pointer'>
          {
            Projects.map((project, index) => (
              <div key={index} className='w-10/12 p-7 m-5 border rounded-2xl text-purple hover:bg-purple hover:bg-opacity-10 hover:border-0'>
                <div className='flex flex-col items-start'>
                  <h2 className='text-white font-semibold text-xl'>{project.title}</h2>
                  <p className='text-gray text-md mt-5'>{project.paragraph}</p>
                </div>
                <div className='flex w-auto h-auto mt-2'>
                  {
                    project.technologies.map((technology, index) => (
                      <span key={index} className={`flex text-purple p-1 px-2 items-center rounded-xl my-3 mr-2  border text-opacity-50 ${technology === 'Online' ? 'text-black' : 'text-black'}`}>{technology}</span>
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