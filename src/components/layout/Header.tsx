import Image from 'next/image'
import {useContext} from 'react'
import MyThemeContext from '../../store/myThemeContext'

export default function Header() {
    const themeCtx:{isDarkMode?: boolean; togThemeHdl: () => void } = useContext(MyThemeContext)
    const togThemeHdl = ():void => {
        themeCtx.togThemeHdl()
    }

    return (
        <>
            <div className='px-2 py-4 w-full
            flex justify-between items-center
            bg-stone-200 dark:bg-stone-800'>
                <div>
                    <a className='flex items-center' href="https://github.com/hossein13m/nextjs-tailwind-dark-theme"
                    target="blank" >
                        <Image
                        className=''
                        src="/github.png"
                        alt='github logo'
                        width={27}
                        height={27} 
                        />
                    <h1> Github Repository</h1>
                    </a>
                </div>
                <button className='px-2 py-1 
                bg-zinc-800 text-white dark:bg-zinc-200 dark:text-gray-800 rounded' type='button' onClick={togThemeHdl}>Toggle theme</button>
            </div>
        </>
    )
}