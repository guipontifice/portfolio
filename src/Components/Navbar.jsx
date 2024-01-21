import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector2 from './LanguageSelector2';
import DarkMode from './DarkMode';

function Navbar() {
  const { t } = useTranslation()
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDarkMode, setDarkMode] = useState(false);
 
  const handleLinkClick = (link) => {
    setShowSidebar(false);
  }
  const Links = [
    { name: t('home'), link: '/portfolio' },
    { name: t('about_me'), link: '/AboutMe' },
    { name: t('projects'), link: '/Projects' },
    { name: t('contact'), link: '/Contact' },
  ]

  return (
    <>
      <div className='mt-3 dark:bg-zinc900 bg-white w-full md:hidden h-10 lg:hidden xl:hidden 2xl:hidden absolute'>
        {/* Mobile Navigation */}
        <div className='mx-5 my-3 md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-row justify-between dark:bg-zinc900'>
          <div className=''><LanguageSelector2 /></div>
          <div className=''><DarkMode /></div>
        </div>
      </div>
      <div className="xxs:hidden xs:hidden sm:hidden flex flex-row justify-between w-8/12 mt-4 md:flex-wrap-reverse absolute">
        {/* Desktop Navigation */}
        <div className='flex'>
          <LanguageSelector2 />
        </div>
        <div className="flex h-8 mx-10 border-x-2 ring-1 ring-white rounded-full border-[#e5e7eb] dark:bg-zinc900 bg-white font-bold dark:text-gray text-zinc800">
          {Links.map((link) => (
            <Link key={link.name} to={link.link} className="flex-row items-center mt-2 mb-2 justify-center text-xs dark:hover:text-white hover:text-black font-roboto">
              <span className="mx-5">{link.name}</span>
            </Link>
          ))}
        </div>
        <div className='flex h-10 text-xl cursor-pointer rounded-md dark:bg-zinc900 bg-white font-bold text-gray w-11 ring-1 ring-inset ring-gray-300 justify-center items-center'>
          <DarkMode />
        </div>
      </div>
    </>
  )
}

export default Navbar