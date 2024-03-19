import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import avatar from '../../public/assets/images/avatar.png';
import EmojiPicker, { EmojiStyle } from 'emoji-picker-react';
import { Emoji } from 'emoji-picker-react';

function Home() {
  const { t } = useTranslation()

  return (
    <>
      <div className='xxs:hidden xs:hidden sm:hidden md:hidden flex flex-row items-center justify-between mt-40 font-roboto w-10/12 dark:text-white text-black mb-64'>
        <div className='text-white h-96 mt-36'>
          <div className='flex flex-row justify-center items-center bg-purple bg-opacity-10 hover:bg-opacity-20 border-0 rounded-2xl w-36 h-16 text-purple text-2xl font-semibold mb-10'>
            <span className='mx-1'>{<Emoji unified="1f44b" size="25" />}</span>
            <p className='mx-1'>Olá!</p>
          </div>
          <h1 className='font-bold text-5xl mb-5 break-normal'>
            Guilherme Pontifice
          </h1>
          <p className='text-lg mb-1 text-white text-opacity-50'>Front-end Developer</p>
          <div className='mt-5 text-2xl flex justify-start text-white text-opacity-50'>
            <a
              href='https://github.com/guipontifice'
              className='text-4xl mr-2 cursor-pointer hover:text-white'
              aria-label='GitHub'
              rel='noopener'
              target='_blank'
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href='https://www.linkedin.com/in/guilhermepontifice'
              className='text-4xl mr-2 cursor-pointer hover:text-white'
              aria-label='Linkedin'
              rel='noopener'
              target='_blank'
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
        <div className='flex w-10/12 justify-center'>
          <img src={`${avatar}`} alt="" className='w-2/6 rounded-full h-2/6 mb-10' />
        </div>
        <div className='flex flex-col text-lg text-purple text-opacity-50 cursor-pointer mt-36  h-96'>
          <div className='flex m-2 mt-32 justify-end hover:opacity-50 hover:transition-opacity'>
            Baixar CV
            <div className='ml-2'>
              <ion-icon name="download-outline"></ion-icon>
            </div>
          </div>
          <div className='flex justify-center p-3 border w-52 h-12 items-center text-md rounded-xl hover:bg-purple hover:bg-opacity-20 hover:border-0'>
            <div className='flex items-center mr-2'>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            Vamos Conversar!
          </div>

        </div>
      </div>
    </>
  )
}

export default Home