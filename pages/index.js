import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Reetail by Devstroop</title>
        <meta name="description" content="a cutting-edge ERP solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Coming soon{/*&nbsp;*/}
            {/*<code className={styles.code}>pages/index.js</code>*/}
          </p>
          <div>
            <a
              href="https://devstroop.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/devstroop.svg"
                alt="Devstroop Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/reetail.svg"
            alt="Next.js Logo"
            width={240}
            height={72}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/erp.svg"
              alt="13"
              width={48}
              height={32}
              priority
            />
          </div>
        </div>

        <div>
          <h2 className={inter.className}>
            Overview
          </h2>
          <p className={inter.className}>
            {'Meet Reetail, a cutting-edge ERP solution that combines the simplicity of traditional software with the advanced features of modern technology. With Reetail, businesses can streamline their operations, optimize their workflows, and make informed decisions faster than ever before. Whether you\'re a small startup looking to grow or an established enterprise seeking to improve efficiency, Reetail has something to offer. Give it a try and see the difference it can make for your organization.'}
          </p>
        </div>
{/*

          <a
            href="https://"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>
*/}

      </main>
    </>
  )
}
