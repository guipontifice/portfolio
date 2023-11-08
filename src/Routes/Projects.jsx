import React from 'react'
import Footer from '../Components/Footer'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import timerPhoto from '../../public/assets/images/timer-photo1.jpg'
import wordlePhoto from '../../public/assets/images/wordle-logo.png'
import moviePhoto from '../../public/assets/images/moviedatabase-logo.png'

function Projects() {
  const { t } = useTranslation()
  const Projects = [
    { 
      title: 'Timer', 
      paragraph: t('timer_project'), 
      githubLink: 'https://github.com/guipontifice/cronometro-react', 
      image: timerPhoto 
    },
    { 
      title: 'Movie Catalog', 
      paragraph: t('movie_project'), 
      githubLink: 'https://github.com/guipontifice/movie-catalog', 
      image: moviePhoto 
    },
    { 
      title: 'Wordle Clone', 
      paragraph: t('wordle_project'), 
      githubLink: 'https://github.com/guipontifice/WordleClone/tree/main/wordle_project', 
      image: wordlePhoto
    },
  ]
  return (
    <>
      <div className='xxs:hidden xs:hidden sm:hidden flex flex-col justify-start mt-40 font-roboto w-8/12 font-roboto'>
        <div className=''>
          <h1 className='font-bold text-4xl text-white'>{t('projects_title')}</h1>
          <p className='text-md text-gray mt-4'>{t('projects_paragraph')}</p>
        </div>
        <div className='flex flex-row mt-10'>
          {
            Projects.map(({ title, paragraph, githubLink, image }) => (
              <div className='flex flex-col p-2 h-60 hover:bg-zinc800 w-2/6 border-2 border-zinc900 rounded-2xl'>
                <img src={image} alt="" className='w-12 h-12 rounded-full' />
                <h1 className='mt-6 text-white font-medium text-lg'>{title}</h1>
                <p className='text-gray text-sm'>{paragraph}</p>
                <div className='mt-5 text-white text-xl flex'>
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
                    href={githubLink}
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
      <div className='md:hidden lg:hidden xl:hidden 2xl:hidden flex mr-4 mt-20 font-roboto w-11/12  flex flex-col'>
        <div className=''>
          <h1 className='font-bold text-5xl text-white'>Projects that I made</h1>
          <p className='text-md text-gray mt-4'>I've worked on a number of projects, but these are my main ones. From time to time, I still look at them and check if something needs to be renewed or recoded.</p>
          <div className='flex flex-col items-center'>
            {
              Projects.map(({ title, paragraph, githubLink, image }) => (
                <div className='flex flex-col p-2 h-60 hover:bg-zinc800 border-2 border-zinc900 w-7/12 rounded-2xl'>
                  <img src={image} alt="" className='w-12 h-12 rounded-full' />
                  <h1 className='mt-6 text-white font-medium text-lg'>{title}</h1>
                  <p className='text-gray text-sm'>{paragraph}</p>
                  <div className='mt-5 text-white text-xl flex'>
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
                      href={githubLink}
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