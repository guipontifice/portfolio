  import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
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
    { name: 'Home', link: 'portfolio' },
    { name: 'Sobre mim', link: 'AboutMe' },
    { name: 'Projetos', link: 'Projects' },
    { name: 'Skills', link: 'Skills' },
    { name: 'Carreira', link: 'Works' },
    { name: 'Contato', link: 'Contact' },
  ]

  return (
    <>
      <div className='fixed xxs:hidden xs:hidden sm:hidden md:hidden flex justify-center w-0/12 h-14 mt-5 bg-purple bg-opacity-20 rounded-2xl font-roboto'>
        {/* <div className='w-12'><img src={avatarImg} alt="" /></div> */}
        <div className='flex justify-end items-center'>
          {Links.map((link, index) => (
            <Link
              onClick={() => scroll(link.link)}
              to={link.link}
              key={index}
              spy={true}
              offset={20} 
              smooth={true}
              duration={500}
              className='text-white text-opacity-70 mx-4 m-2 hover:text-purple  text-md cursor-pointer'
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