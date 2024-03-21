import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import avatar from '../../public/assets/images/avatar.png';
import EmojiPicker, { EmojiStyle } from 'emoji-picker-react';
import { Emoji } from 'emoji-picker-react';
import download from 'downloadjs';
import cv from '../../public/assets/download/CV Guilherme Pontifice - Desenvolvedor React.pdf';

function Home({ id }) {
  const { t } = useTranslation()
  const downloadCv = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(cv)
      // const response = await fetch('https://guipontifice.github.io/portfolio/assets/download/CV%20Guilherme%20Pontifice%20-%20Desenvolvedor%20React.pdf');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const blob = await response.blob();
      download(blob, 'CV Guilherme Pontifice.pdf')
    } catch (error) {
      console.log('Error', error);
    }

  }
  return (
    <>
      {/* Desktop  */}
      <div id={id} className='xxs:hidden xs:hidden sm:hidden md:hidden flex flex-row items-center justify-between mt-40 font-roboto w-10/12 mb-40'>
        <div className='text-white h-96 mt-36'>
          <div className='flex flex-row justify-center items-center bg-purple bg-opacity-10 hover:bg-opacity-20 border-0 rounded-2xl w-36 h-16 text-purple text-2xl font-semibold mb-10'>
            <span className='mx-1'>{<Emoji unified="1f44b" size="25" />}</span>
            <p className='mx-1'>Olá!</p>
          </div>
          <h1 className='font-bold text-5xl mb-5 break-normal'>
            Guilherme Pontifice
          </h1>
          <p className='text-lg mb-1 text-white text-opacity-50'>Front-end Developer</p>
          <div className='mt-5 text-2xl flex-start text-white text-opacity-50'>
            <a
              href='https://github.com/guipontifice'
              className='text-3xl mr-2 cursor-pointer hover:text-white'
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
          <div className='flex m-2 mt-32 justify-end hover:opacity-50 hover:transition-opacity' onClick={(event) => downloadCv(event)}>
            Baixar CV
            <div className='ml-2'>
              <ion-icon name="download-outline"></ion-icon>
            </div>
          </div>
          <a
            href='https://wa.me/5511977645536'
            className='flex justify-center p-3 border w-52 h-12 items-center text-md rounded-xl hover:bg-purple hover:bg-opacity-20 hover:border-0'
            rel='noopener noreferrer'
            target='_blank'
          >
            <div className='flex items-center mr-2'>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            Vamos Conversar!
          </a>
        </div>
      </div>
      {/* Mobile */}
      <div className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden 5xl:hidden w-10/12'>
        <div className='flex flex-col items-center text-gray mt-8'>
          <div>
            <a
              href='https://github.com/guipontifice'
              className='text-3xl mr-2'
              aria-label='GitHub'
              rel='noopener'
              target='_blank'
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href='https://www.linkedin.com/in/guilhermepontifice'
              className='text-3xl mr-2 '
              aria-label='Linkedin'
              rel='noopener'
              target='_blank'
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
          <div className='w-56 mt-20'>
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className='flex flex-col items-start text-white w-6/12 justify-start font-roboto mt-20'>
          <div className='flex flex-row items-center justify-center py-4 w-20 h-10 text-purple bg-purple bg-opacity-20 rounded-lg font-semibold'>
            <h2 className='mr-2'>👋 Olá!</h2>
          </div>
          <div className='text-3xl font-semibold mt-5'>
            <h1>Guilherme Pontifice</h1>
          </div>
          <div className='mt-2 text-white text-opacity-30'>
            <h5>Front-end Developer</h5>
          </div>
          <div className='flex flex-row justify-start w-10/12'>
            <div className='flex flex-row justify-start items-center w-full  mt-5 '>
              <span className='flex flex-row items-center w-6/12 mr-2 text-purple text-opacity-50 hover:text-opacity-20 cursor-pointer' onClick={(event) => downloadCv(event)}>Baixar CV
                <div className='ml-2'>
                  <ion-icon name="download-outline"></ion-icon>
                </div>
              </span>
              <div className='flex flex-row justify-center items-center border border-purple rounded-lg w-full py-2 px-1 text-purple text-opacity-50 hover:text-opacity-50 hover:border-0 hover:bg-purple hover:bg-opacity-5'>
                <a
                  href="https://wa.me/5511977645536"
                  className='flex items-center'>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                  <span className='ml-0.5'>Vamos Conversar!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home