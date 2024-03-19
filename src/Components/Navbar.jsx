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
      <div className='fixed xxs:hidden xs:hidden sm:hidden flex justify-center w-11/12 h-14 mt-8 bg-navbar bg-opacity-50 rounded-2xl '>
        <div className='flex items-center'>
          {Links.map((link, index) => (
            <Link
              to={link.link}
              key={index}
              className='text-white text-opacity-50 m-2 hover:text-purple hover:text-opacity-50'
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar