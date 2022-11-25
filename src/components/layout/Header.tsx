import Image from 'next/image'
import {useContext} from 'react'
import MyThemeContext from '../../store/myThemeContext'

export default function Header() {
    const themeCtx:{isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext)
    const togThemeHdl = ():void => {
        
    }

    return (
        <>
            <div>
                <a href="https://github.com/hossein13m/nextjs-tailwind-dark-theme"
                target="blank" >
                    <Image
                    src="/github.png"
                    alt='github logo'
                    />
                <h1> Github Repository</h1>
                </a>
            </div>
            <button type='button' onClick={togThemeHdl}>Toggle theme</button>
        </>
    )
}