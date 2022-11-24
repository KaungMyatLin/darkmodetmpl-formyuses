import type { NextPage } from "next";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className={styles.container} >
      <Head>
        <title>Nextjs with tailwind theme</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main >
        <h1>
          NEXT JS Template For Toggling themes using Tailwind CSS. This is a
          template repository that you can use for creating a new repo based on
          it.
        </h1>
        <div>
          <h1>
            <a href="https://github.com/hossein13m/nextjs-tailwind-dark-theme"
              target="blank" >
                <button type="button">
                  <span>GitHub Repository</span>
                  <Image
                    src="/github.png"
                    alt="Github Logo"
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
