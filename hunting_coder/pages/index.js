import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <nav className={styles.main_nav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link> 
        </ul>
      </nav> */}
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            A blog for hunting coders by a&nbsp;
            <code className={styles.code}>hunting coder</code>
          </p>
          {/* <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div> */}
        </div>

        <div className={styles.center}>
          <h1>Hunting Coder</h1>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
        </div>
        <div className={styles.imagewrap}>
          <Image className={styles.myImg} src="/homeimg.jpg" width={237} height={158} />
        </div>
        <h2 className={styles.center}>Popular Blogs</h2>
        <div className={styles.grid}>
          <div className="blogItem">
            <h3 className={styles.h3}>How to start with JS ?</h3>
            <p>JS is a language used to design web logic.</p>
          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>How to start with JS ?</h3>
            <p>JS is a language used to design web logic.</p>
          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>How to start with JS ?</h3>
            <p>JS is a language used to design web logic.</p>
          </div>
          {/* <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a> */}
        </div>
      </main>
    </>
  )
}