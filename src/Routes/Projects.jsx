import React from 'react'
import { useTranslation } from 'react-i18next'
import timerPhoto from '../../public/assets/images/timer-photo1.jpg'
import wordlePhoto from '../../public/assets/images/wordle-logo.png'
import moviePhoto from '../../public/assets/images/moviedatabase-logo.png'
import poemsPhoto from '../../public/assets/images/shakespeare-icon.jpg'
import stocksPhoto from '../../public/assets/images/stocks.jpg'
function Projects() {
  const { t } = useTranslation()
  const Projects = [
    { 
      title: 'Movie Catalog', 
      paragraph: t('movie_project'), 
      githubLink: 'https://github.com/guipontifice/the-movie-database', 
      webLink: 'https://guipontifice.github.io/the-movie-database/',
      image: moviePhoto 
    },
    { 
      title: 'Poems Vee', 
      paragraph: t('poems_project'), 
      githubLink: 'https://github.com/guipontifice/poems-vee', 
      webLink: 'https://guipontifice.github.io/poems-vee/',
      image: poemsPhoto
    },
    { 
      title: 'Valorama Assets', 
      paragraph: t('investing_project'), 
      githubLink: 'https://github.com/guipontifice/investing-values',
      webLink: 'https://github.com/guipontifice/investing-values',
      image: stocksPhoto 
    },
  ]
  return (
    <>
      <div className='xxs:hidden xs:hidden sm:hidden flex flex-col justify-start mt-40 font-roboto w-8/12'>
        <div className=''>
          <h1 className='font-bold text-4xl dark:text-white text-black'>{t('projects_title')}</h1>
          <p className='text-md dark:text-gray text-zinc800 mt-4'>{t('projects_paragraph')}</p>
        </div>
        <div className='flex flex-row mt-10'>
          {
            Projects.map(({ title, paragraph, githubLink, webLink, image }) => (
              <div className='flex flex-col p-2 h-60 w-2/6 border-2 dark:hover:bg-zinc800 hover:bg-whiteShade border-zinc900 rounded-2xl'>
                <img src={image} alt="" className='w-12 h-12 rounded-full' />
                <h1 className='mt-6 dark:text-white text-black font-medium text-lg'>{title}</h1>
                <p className='dark:text-gray text-zinc800 text-sm'>{paragraph}</p>
                <div className='mt-5 dark:text-white text-black text-xl flex'>
                  <a
                    href={githubLink}
                    className='text-2xl mr-2 cursor-pointer justify-start items-center flex'
                    aria-label='GitHub'
                    rel='noopener'
                    target='_blank'
                  >
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a
                    href={webLink}
                    className='text-2xl mr-2 cursor-pointer justify-start items-center flex'
                    aria-label='GitHub'
                    rel='noopener'
                    target='_blank'
                  >
                    <ion-icon name="logo-google"></ion-icon>
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='md:hidden lg:hidden xl:hidden 2xl:hidden flex mr-4 mt-20 font-roboto w-11/12 flex-col'>
        <div className=''>
          <h1 className='font-bold text-5xl dark:text-white text-black'>Projects that I made</h1>
          <p className='text-md dark:text-gray text-zinc800 mt-4'>I've worked on a number of projects, but these are my main ones. From time to time, I still look at them and check if something needs to be renewed or recoded.</p>
          <div className='flex flex-col items-center'>
            {
              Projects.map(({ title, paragraph, githubLink, webLink, image }) => (
                <div className='flex flex-col p-2 h-60 dark:hover:bg-gray hover:bg-gray border-2 dark:border-zinc900 border-gray w-7/12 rounded-2xl'>
                  <img src={image} alt="" className='w-12 h-12 rounded-full' />
                  <h1 className='mt-6 dark:text-white text-black font-medium text-lg'>{title}</h1>
                  <p className='dark:text-gray text-zinc800 text-sm'>{paragraph}</p>
                  <div className='mt-5 dark:text-white text-black text-xl flex'>
                    <a
                      href={githubLink}
                      className='text-2xl mr-2 cursor-pointer justify-start items-center flex'
                      aria-label='GitHub'
                      rel='noopener'
                      target='_blank'
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a
                      href={webLink}
                      className='text-2xl mr-2 cursor-pointer justify-start items-center flex'
                      aria-label='GitHub'
                      rel='noopener'
                      target='_blank'
                    >
                      <ion-icon name="logo-google"></ion-icon>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects