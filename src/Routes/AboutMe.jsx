import React from 'react'
import { useTranslation } from 'react-i18next'
import profile_photo from '../../public/assets/images/profile-photo-1.jpeg'
import { Emoji } from 'emoji-picker-react'
function AboutMe({ id }) {
  const { t } = useTranslation()

  return (
    <>
      <div id={id} className='w-10/12'>
        <div className='xxs:hidden xs:hidden sm:hidden md:hidden flex justify-center mb-10'>
          <h2 className='flex items-center justify-center mt-32 text-purple text-xl bg-purple bg-opacity-20 rounded-xl p-3 w-2/12 font-semibold'>👋 Sobre Mim</h2>
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
    </>
  )
}

export default AboutMe