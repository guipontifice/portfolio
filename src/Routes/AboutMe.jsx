import React from 'react'
import { useTranslation } from 'react-i18next'
import profile_photo from '../../public/assets/images/profile-photo-1.jpeg'
import { Emoji } from 'emoji-picker-react'
function AboutMe({ id }) {
  const { t } = useTranslation()

  return (
    <>
      {/* Desktop */}
      <div id={id} className='flex flex-col items-center w-10/12'>
        <div className='xxs:hidden xs:hidden sm:hidden md:hidden flex justify-center w-2/12 mb-10'>
          <h2 className='flex items-center justify-center mt-32 text-purple text-xl bg-purple bg-opacity-20 rounded-xl p-3 w-full font-bold'>🔎 Sobre</h2>
        </div>
        <div className="xxs:hidden xs:hidden sm:hidden md:hidden w-10/12 flex flex-row items-center justify-between align-middle">
          <div className=''>
            <img src={profile_photo} alt="" className='w-60 h-64 rounded-full mr-5' />
          </div>
          <div className='flex flex-col ml-10 2xl:mr-44'>
            <h1 className='text-white text-3xl font-bold mt-10'>
              Guilherme Pontifice Pauferro
            </h1>
            <div className='flex flex-col mt-7 m-3 text-lg'>
              <div className='flex flex-row mb-4'>
                <span className='text-lg'>💡</span>
                <p className='text-white text-opacity-50 ml-2'>+1 ano desenvolvendo e programando interfaces com JavaScript, TypeScript e React.</p>
              </div>
              <div className='flex flex-row mb-4'>
                <span className="text-lg">🥷</span>
                <p className='ml-3 text-white text-opacity-50'>Meus interesses são em Front-end com ReactJS, React Native, e também back-end.</p>
              </div>
              <div className='flex flex-row mb-4'>
                <span className='text-lg'>👨‍💻</span>
                <p className='ml-3 text-white text-opacity-50'>Experência com análise de dados, PowerBI e Excel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden border-t border-purple border-opacity-20 mt-20 w-10/12 font-roboto'>
        <div className='flex flex-col mt-20'>
          <div className='flex justify-center'>
            <img src={profile_photo} alt="" className='rounded-full w-60 h-60 ' />
          </div>
          <div className='flex flex-row items-center justify-center py-4 w-20 h-10 text-purple bg-purple bg-opacity-20 rounded-lg font-semibold'>
            <h2 className='mr-2'>🔎 Sobre</h2>
          </div>
          <div className='mt-5'>
            <h1 className='text-2xl text-white font-bold'>
              Guilherme Pontifice Pauferro
            </h1>
            <div className='flex flex-col mt-3'>
              <div className='flex flex-row mt-1'>
                <span className=''>💡</span>
                <p className='text-white text-opacity-50'>+1 ano desenvolvendo e programando interfaces com JavaScript, TypeScript e React.</p>
              </div>
              <div className='flex flex-row mt-1'>
                <span className="">🥷</span>
                <p className='text-white text-opacity-50'>Meus interesses são em Front-end com ReactJS, React Native, e também back-end.</p>
              </div>
              <div className='flex flex-row mt-1'>
                <span className=''>👨‍💻</span>
                <p className='text-white text-opacity-50'>Experência com análise de dados, PowerBI e Excel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe