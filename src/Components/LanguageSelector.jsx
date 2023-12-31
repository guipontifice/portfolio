import React, { useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie'

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'pt',
        name: 'Português',
        country_code: 'br'
    },
    {
        code: 'es',
        name: 'Español',
        country_code: 'es'
    }
]

function LanguageSelector() {
    const currentLanguageCode = cookies.get('i18next') || 'en';
    const currentLanguage = languages.find(lang => lang.code === currentLanguageCode);

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr';
    })

    return (
        <div className='bg-zinc900'>
            <div className='dropdown'>
                <Menu as="div" className="relative inline-block text-left w-35">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg- px-12 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        // leaveFr om="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <ul className="dropwdown-menu bg-[#9ca3af]" aria-labelledby='dropdownMenuButton1'>
                            {languages.map(({ code, name, country_code }) => (
                                <li className='hover:bg-sky-700' key={country_code} >
                                    <button className='dropdown-item' onClick={() => i18next.changeLanguage(code)}
                                        disabled={code === currentLanguageCode}
                                    >
                                        <span className={`flag-icon flag-icon-${country_code} items-center mx-2`}></span>
                                        {name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default LanguageSelector