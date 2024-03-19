import React from 'react'
import { useTranslation } from 'react-i18next'
import profile_photo from '../../public/assets/images/profile-photo-1.jpeg'

function AboutMe() {
  const { t } = useTranslation()

  return (
    <>
      <div className="w-10/12 flex flex-row items-center justify-between align-middle ">
        <div className=''>
          <img src={profile_photo} alt="" className='w-60 h-64 rounded-full' />
        </div>
        
       <div className='flex flex-col  mr-56'>
          <h2 className='text-purple font-  medium text-xl w-40 text-center rounded-2xl bg-purple bg-opacity-30 p-2'>Sobre Mim</h2>
          <h1 className='text-white text-3xl font-semibold mt-10'>
            Guilherme Pontifice Pauferro
          </h1>
          <div className='flex flex-col text-sm mt-7 m-3'>
            <p className='text-white text-opacity-50'>+1 ano desenvolvendo e programando interfaces com JavaScript, TypeScript e React.</p>
            <p className='ml-3 text-white text-opacity-50'>Meus interesses são em Front-end com ReactJS, React Native, e também back-end.</p>
            <p className='ml-3 text-white text-opacity-50'>Experência com análise de dados, PowerBI e Excel.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutMe