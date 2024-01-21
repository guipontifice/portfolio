import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import profile_photo from '../../public/assets/images/profile-photo.jpeg'
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
function Home() {
  const { t } = useTranslation()

  return (
    <>
      <div className='xxs:hidden xs:hidden sm:hidden flex flex-col justify-start mt-40 font-roboto w-8/12 dark:text-white text-black'>
        <div className='flex w-8/12'>
          <img src={`${profile_photo}`} alt="" className='w-32 rounded-full h-32 mb-10' />
        </div>
        <div>
          <h1 className='font-bold text-4xl mb-5'>
            {t('welcome_message')}
          </h1>
          <p className='font-medium text-md mb-1'>{t('introduction')} </p>
        </div>
        <div className=''>
          <p>{t('main')}</p>
        </div>
        <div className='mt-5 text-2xl flex justify-start'>
          <a
            href='https://github.com/guipontifice'
            className='text-2xl mr-2 cursor-pointer'
            aria-label='GitHub'
            rel='noopener'
            target='_blank'
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            href='https://www.linkedin.com/in/guilhermepontifice'
            className='text-2xl mr-2 cursor-pointer'
            aria-label='Linkedin'
            rel='noopener'
            target='_blank'
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      <div className='md:hidden lg:hidden xl:hidden 2xl:hidden w-full dark:text-white text-black mx-4 mt-4'>
        <div className=' flex justify-start mt-16'>
          <h1 className='font-bold text-3xl'>
            {t('welcome_message')}
          </h1>
        </div>
        <div className='mt-5'>
          <p className='font-normal'>{t('introduction')}</p>
        </div>
        <div className='mt-4'>
          <p>{t('main')}</p>
        </div>
        <div className='mt-5 text-xl '>
          <a
            href='https://github.com/guipontifice'
            className='text-2xl mr-2 cursor-pointer'
            aria-label='GitHub'
            rel='noopener'
            target='_blank'
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            href='https://www.linkedin.com/in/guilhermepontifice'
            className='text-2xl mr-2 cursor-pointer'
            aria-label='Linkedin'
            rel='noopener'
            target='_blank'
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
        <div className='mt-16 flex justify-center'>
          <img src={profile_photo} alt="" className='w-32 rounded-full h-32 mb-10' />
        </div>
        <div>
          <AboutMe />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default Home