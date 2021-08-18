import Head from 'next/head'
import Image from 'next/image'
import AboutContent from '../components/AboutContent'
import ContactContent from '../components/ContactContent'
import HeaderContent from '../components/HeaderContent'
import NavBar from '../components/NavBar'
import ProjectContent from '../components/ProjectContent'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.App}>
      <Head>
        <title>Tushar Raj Gupta</title>
        <meta name="description" content="Tushar Raj's official website powered by NextJS hosted on Azure Static Web Apps" />
        <meta name="keywords" content="Tushar Raj Gupta, UWP, ReactJS, Developer, Lucknow, Official"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#101835"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Tushar Raj Gupta"/>
        <meta name="twitter:description" content="Tushar Raj's official website powered by NextJS and hosted on Azure Static Web App"/>
        <meta name="twitter:site" content="@"/>
        <meta name="twitter:creator" content="@"/>
        <meta name="twitter:image" content="/android-chrome-512x512.png"/>
        <meta property="og:title" content="Tushar Raj Gupta"/>
        <meta property="og:description" content="Tushar Raj's official website powered by NextJS and hosted on Azure Static Web App"/>
        <meta property="og:url" content="www.tusharrajgupta.com"/>
        <meta property="og:site_name" content="undefined"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="/android-chrome-512x512.png"/>
        {/* <link rel="manifest" href="/site.webmanifest"></link> */}
      </Head>
      <NavBar/>
      <HeaderContent/>
      <AboutContent/>
      <ProjectContent/>
      <ContactContent/>
      <footer className={styles.ftr}>
        <div> &copy; {new Date().getFullYear()}. All Rights Reserved.</div>
        <div> Build with <span style={{color:"red"}}>❤</span> by Tushar Raj Gupta</div>
      </footer>
    </div>
  )
}
