import React from 'react'

function DarkMode() {
    const [showDarkMode, setDarkMode] = useState(false);
    return (
        <div>
            <button
                id='menuButton'
                type='button'
                className='text-2xl z-20'
                aria-label='Menu'
                aria-expanded='true'
                onClick={() => setDarkMode(!showDarkMode)}
            ></button>
            <ion-icon name={showDarkMode ? 'sunny-outline' : 'moon-outline'} className='absolute fixed z-50'></ion-icon>
        </div>
    )
}

export default DarkMode