import React from 'react'
import { useTranslation } from 'react-i18next'
import profile_photo from '../../public/assets/images/profile-photo.jpeg'

function AboutMe() {
  const { t } = useTranslation()
  const Experiences = [
    {
      name: t('about_me_studying'),
      job: t('job_frontend_software_developer'),
      date: '01/2023-Present',
      key: 'job0',
      key2: 'div0',
    },
    {
      name: 'LSG Sky Chefs',
      job: t('job_pricing_assistant'),
      date: '07/2022-08/2023',
      key: 'job1',
      key2: 'div1',
    },
    {
      name: 'Mary Help',
      job: t('job_mary_help'),
      date: '01/2021-12/2022',
      key: 'job2',
      key2: 'div2',
    },
  ];

  const Works = [
    { name: 'Freelance', job: 'Front-End Software Developer', date: '2023-Present', key: 'job0', key2: 'div0' },
    { name: 'LSG Sky Chefs', job: 'Pricing Assistant', date: '2022-2023', key: 'job1', key2: 'div1' },
    { name: 'Mary Help', job: 'Administrative', date: '2021-2022', key: 'job2', key2: 'div2' },
  ]
  return (
    <>
      <div className='xxs:hidden xs:hidden sm:hidden flex flex-row justify-start mt-40 w-8/12 font-roboto'>
        <div className='flex flex-col w-3/6 '>
          <h1 className='text-2xl font-medium dark:text-white text-black'>{t('about_me_title')}</h1>
          <div className='dark:text-gray text-zinc800 mt-7'>
            <p>{t('about_me_text')}</p>
          </div>
          <div className='dark:text-gray text-zinc800 mt-5'>
            <p>{t('about_me_text_2')}</p>
          </div>
          <div className='dark:text-gray text-zinc800 mt-5'>
            <p>{t('about_me_text_3')}</p>
          </div>
          <div className='flex flex-col mt-10  rounded-2xl dark:text-zinc800 text-gray p-2'>
            <h1 className='dark:text-white text-black font-medium text-2xl'>Work:</h1>
            <div className='mt-2'>
              {
                Experiences.map(({ name, job, date, key, key2 }) => (
                  <div key={key2} className='flex flex-col'>
                    <h1 key={name} className='ml-1 dark:text-white text-black text-md'>{name}</h1>
                    <div key={key} className='flex flex-row justify-between items-center '>
                      <p key={job} className='ml-2 dark:text-gray text-zinc800 text-sm'>{job}</p>
                      <p key={date} className='flex justify-end dark:text-gray text-zinc800 text-xs'>{date}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center w-6/12 ml-20 '>
          <img src={profile_photo} alt="" className='w-40 rounded-full h-40 mb-10' />
          <div className='mt-5 text-2xl flex flex-col dark:text-white text-gray'>
            <a
              href='https://github.com/guipontifice'
              className='flex text-2xl z-20 m-1 cursor-pointer'
              aria-label='GitHub'
              rel='noopener'
              target='_blank'
            >
              <ion-icon name="logo-github"></ion-icon>
              <span className='text-xs mt-1 ml-1'>GitHub</span>
            </a>
            <a
              href='https://www.linkedin.com/in/guilhermepontifice'
              className='flex text-2xl z-20 m-1 cursor-pointer'
              aria-label='Linkedin'
              rel='noopener'
              target='_blank'
            >
              <ion-icon name="logo-linkedin"></ion-icon>
              <span className='text-xs mt-1 ml-1'>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className='md:hidden lg:hidden xl:hidden 2xl:hidden mr-4 mt-20 font-roboto w-11/12 flex flex-col'>
        <div className='flex flex-col text-left  mr-4 p-2'>
          <h1 className='text-3xl font-medium dark:text-white text-black'>{t('about_me_title')}</h1>
          <div className='text-lg dark:text-gray text-zinc800 mt-7'>
            <p>{t('about_me_text')}</p>
          </div>
          <div className='text-lg  dark:text-gray text-zinc800 mt-5'>
            <p>{t('about_me_text_2')}</p>
          </div>
          <div className='text-lg dark:text-gray text-zinc800 mt-5'>
            <p>{t('about_me_text_3')}</p>
          </div>
        </div>
        <div className='flex justify-center mt-7'>
          <img src={profile_photo} alt="" className='w-40 rounded-full h-40 mb-10' />
        </div>
        <div className='flex flex-col justify-start font-roboto dark:text-white text-black'>
          <a
            href='https://github.com/guipontifice'
            className='flex text-2xl z-20 m-1 cursor-pointer'
            aria-label='GitHub'
            rel='noopener'
            target='_blank'
          >
            <ion-icon name="logo-github"></ion-icon>
            <span className='text-xs mt-1 ml-1'>GitHub</span>
          </a>
          <a
            href='https://www.linkedin.com/in/guilhermepontifice'
            className='flex text-2xl z-20 m-1 cursor-pointer'
            aria-label='Linkedin'
            rel='noopener'
            target='_blank'
          >
            <ion-icon name="logo-linkedin"></ion-icon>
            <span className='text-xs mt-1 ml-1'>LinkedIn</span>
          </a>
        </div>
        <div className='flex flex-col mt-6 border-2 rounded-2xl dark:text-zinc800 text-gray p-2'>
          <h1 className='text-2xl dark:text-white text-black font-medium'>Work:</h1>
          <div className='mt-5'>
            {
              Works.map(({ name, job, date, key, key2 }) => (
                <div key={key2} className='flex flex-col'>
                  <h1 key={name} className='ml-1 dark:text-white text-black text-md'>{name}</h1>
                  <div key={key} className='flex flex-row justify-between items-center '>
                    <p key={job} className='ml-2 dark:text-gray text-zinc800 text-sm'>{job}</p>
                    <p key={date} className='flex justify-end dark:text-gray text-zinc800 text-xs'>{date}</p>
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

export default AboutMe