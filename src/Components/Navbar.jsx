import React from 'react'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useTranslation } from 'react-i18next';
import avatarImg from '../../public/assets/images/avatar.png'
import scroll from '../utils/smoothScroll';

function Navbar() {
  const { t } = useTranslation()
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDarkMode, setDarkMode] = useState(false);

  const handleLinkClick = (link) => {
    setShowSidebar(false);
  }
  const Links = [
    { name: 'Home', link: '/portfolio' },
    { name: 'Sobre mim', link: '/AboutMe' },
    { name: 'Projetos', link: '/Projects' },
    { name: 'Skills', link: '/Skills' },
    { name: 'Trabalhos', link: '/Works' },
    { name: 'Contato', link: '/Contact' },
  ]

  return (
    <>
      <div className='fixed xxs:hidden xs:hidden sm:hidden flex justify-around w-11/12 h-14 mt-8 bg-navbar rounded-2xl font-roboto'>
        <div className='w-12'><img src={avatarImg} alt="" /></div>
        <div className='flex justify-end items-center'>
          {Links.map((link, index) => (
            <div
            onClick={() => scroll(link.link)}
              to={link.link}
              key={index}
              className='text-gray m-2 hover:text-purple hover:text-opacity-50 cursor-pointer'
              smooth={true}
              duration={500}
            >
              {link.name}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar