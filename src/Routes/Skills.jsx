import React from 'react';
import { Emoji } from 'emoji-picker-react';
import reactSvg from '../../public/assets/images/react-icon.svg';
import typescriptSvg from '../../public/assets/images/typescript-icon.svg';
import javascriptSvg from '../../public/assets/images/javascript-icon.svg';
import tailwindSvg from '../../public/assets/images/tailwind-icon.svg';
import cssSvg from '../../public/assets/images/css-icon.svg';
import htmlSvg from '../../public/assets/images/html-icon.svg';
import gitSvg from '../../public/assets/images/git-icon.svg';
import githubSvg from '../../public/assets/images/github-icon.svg';
import nodeJsSvg from '../../public/assets/images/nodejs-icon.svg';
import postgresSvg from '../../public/assets/images/postgres-icon.svg';
import mongodbSvg from '../../public/assets/images/mongo-icon.svg';
import mysqlSvg from '../../public/assets/images/mysql-icon.svg';
import dockerSvg from '../../public/assets/images/docker-icon.svg';
import figmaSvg from '../../public/assets/images/figma-icon.svg';
import sassSvg from '../../public/assets/images/sass-icon.svg';
function Skills({ id }) {
  return (
    <>
      {/* Desktop */}
      <div id={id} className='w-10/12 flex flex-col items-center xxs:hidden xs:hidden sm:hidden md:hidden'>
        <div className='xxs:hidden xs:hidden sm:hidden md:hidden w-2/12 flex justify-center'>
          <h2 className='flex items-center justify-center mt-32 text-purple text-xl bg-purple bg-opacity-20 rounded-xl p-3 w-full font-semibold font-roboto'>
            👨‍💻 Skills
          </h2>
        </div>
        <div className='flex items-center justify-center mt-8'>
          <h1 className='flex justify-center text-white text-3xl font-semibold font-roboto'>Tecnologias e Habilidades</h1>
        </div>
        <div className='flex flex-col justify-center mt-20'>
          <p className='flex justify-center text-gray text-lg'>Techs que uso no dia a dia:</p>
          <div className='flex flex-row mt-10'>
            <img src={reactSvg} alt="React" title='hover' className='mx-3' />
            <img src={typescriptSvg} alt="" className='mx-3' />
            <img src={javascriptSvg} alt="" className='mx-3' />
            <img src={tailwindSvg} alt="" className='mx-3' />
            <img src={cssSvg} alt="" className='mx-3' />
            <img src={htmlSvg} alt="" className='mx-3' />
            <img src={gitSvg} alt="" className='mx-3' />
            <img src={githubSvg} alt="" className='mx-3' />
            <img src={nodeJsSvg} alt="" className='mx-3' />
            <img src={figmaSvg} alt="" className='mx-3' />
          </div>
          <p className='flex justify-center text-gray text-lg mt-20'>Techs que já usei no passado: </p>
          <div className='flex flex-row justify-center mt-10'>
            <img src={postgresSvg} alt="" className='mx-3' />
            <img src={mongodbSvg} alt="" className='mx-3' />
            <img src={mysqlSvg} alt="" className='mx-3' />
            <img src={dockerSvg} alt="" className='mx-3' />
            <img src={sassSvg} alt="" className='mx-3' />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden border-t border-purple w-10/12 mt-10 border-opacity-20'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-row items-center justify-center py-4 w-20 h-10 text-purple bg-purple bg-opacity-20 rounded-lg font-semibold mt-10'>
            <h2 className='mr-2'>👨‍💻 Skills</h2>
          </div>
          <div className='flex items-center justify-center mt-8'>
            <h1 className='flex justify-center text-white text-3xl font-semibold font-roboto'>Tecnologias e Habilidades</h1>
          </div>
          <div className='flex flex-col items-center mt-20'>
            <p className='flex justify-center text-gray text-md'>Techs que uso no dia a dia:</p>
            <div className='flex flex-row justify-center w-10 mt-10'>
              <img src={reactSvg} alt="React" title='hover' className='mx-1' />
              <img src={typescriptSvg} alt="" className='mx-1' />
              <img src={javascriptSvg} alt="" className='mx-1' />
              <img src={tailwindSvg} alt="" className='mx-1' />
              <img src={cssSvg} alt="" className='mx-1' />
              <img src={htmlSvg} alt="" className='mx-1' />
              <img src={gitSvg} alt="" className='mx-1' />
              <img src={githubSvg} alt="" className='mx-1' />
              <img src={nodeJsSvg} alt="" className='mx-1' />
              <img src={figmaSvg} alt="" className='mx-1' />
            </div>
            <p className='flex justify-center text-gray text-lg mt-20'>Techs que já usei no passado: </p>
            <div className='flex flex-row justify-center w-10 mt-10'>
              <img src={postgresSvg} alt="" className='mx-1' />
              <img src={mongodbSvg} alt="" className='mx-1' />
              <img src={mysqlSvg} alt="" className='mx-1' />
              <img src={dockerSvg} alt="" className='mx-1' />
              <img src={sassSvg} alt="" className='mx-1' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills