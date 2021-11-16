import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Header } from '../components/Header'
import { Home } from '../components/Home'
import styles from '../styles/Page.module.scss'

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vitor</title>
        <meta name="description" content="landing page do Vitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Home />
        <About />
        <Contact />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Page
