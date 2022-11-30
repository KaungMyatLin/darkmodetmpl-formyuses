/* init create-next-app index.css
import type { NextPage } from "next";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className={styles.container} >
      <Head>
        <title>Nextjs with darkmode by tailwind</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="
      flex flex-col justify-center items-center">
        <h1 className="text-2xl">
          NEXT JS Template For Toggling themes using Tailwind CSS. This is a
          template repository that you can use for creating a new repo based on
          it.
        </h1>
        <div>
          <h1 className="text-2xl mt-10">
            <a href="https://github.com/hossein13m/nextjs-tailwind-dark-theme"
            target="_blank"
            >
                <button className="px-1 py-1 bg-zinc-800 text-gray-100 dark:bg-zinc-100 dark:text-gray-800 rounded
                " type="button">
                  <span className="mr-2">GitHub Repository</span>
                  <Image className="white-filter dark:dark-filter"
                    src="/github.png"
                    alt="Github Logo"
                    width={20}
                    height={20}
                    />
                </button>
            </a>
          </h1>
          <h1 className="text-2xl mt-10">
            <a href="https://javascript.plainenglish.io/how-to-implement-dark-light-themes-in-a-next-js-app-using-context-hook-tailwindcss-336558dd4579"
            target="_blank"
            >
              <button className="px-1 py-1 mx-2 bg-zinc-800 text-gray-100 dark:bg-zinc-100 dark:text-gray-800 rounded
              " type="button">
                <span className="mr-2">Medium article</span>
                <Image className="white-filter dark:dark-filter"
                src="/medium.png"
                alt=""
                width={20}
                height={20}
                />
              </button>
            </a>
          </h1>
        </div>
      </main>

    </div>
  )
}

export default Home; 
*/
