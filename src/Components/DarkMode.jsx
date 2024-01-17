import React, { useEffect, useState } from 'react'

function DarkMode() {
    const [showDarkMode, setDarkMode] = useState(false);
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    })
    const handleThemeSwitch = () => {
        setDarkMode(!showDarkMode);
        setTheme(theme === 'dark' ? 'light' : 'dark');
        console.log(theme)
    }
    return (
        <div>
            <button
                id='menuButton'
                type='button'
                className='text-2xl z-20'
                aria-label='Menu'
                aria-expanded='true'
                onClick={handleThemeSwitch}
            >
                <ion-icon name={showDarkMode ? 'sunny-outline' : 'moon-outline'} className='fixed z-50'></ion-icon>
            </button>
        </div>
    )
}

export default DarkMode