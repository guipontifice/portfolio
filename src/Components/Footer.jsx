import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation()
    const Links = [
        { name: t('home'), link: '/'},
        { name: t('about_me'), link: '/aboutme'},
        { name: t('projects'), link: '/projects'},
        { name: t('contact'), link: '/contact'},
    ]
    return (
        <div className='mt-14 border-t-2 border-zinc800 w-full flex flex-row justify-center'>
            <div className='flex flex-row w-8/12'>
                {
                    Links.map((link) => (
                        <div key={link.name} className='flex flex-row justify-start mx-5 my-3'>
                            <Link to={link.link} className={`text-white text-sm`}>
                                <span className={`p-2 rounded-lg hover:bg-zinc800 border-2 border-zinc900 hover:text-white`}>{link.name}</span>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <p className='text-gray text-xs my-3'>2023 - All rights reserved &#169;</p>
        </div>
    )
}

export default Footer