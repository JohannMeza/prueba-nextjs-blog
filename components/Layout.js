import Head from "next/head";
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/Utils.module.css';
import Image from "next/image";
import Link from "next/link";
const name = 'Johann'
export default function Layout({children, title, description, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.mark}>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        {
          home ? (
            <>
              <Image 
                priority
                src="/imagen/1.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{title}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image 
                 priority
                 src="/imagen/1.jpg"
                 className={utilStyles.borderCircle}
                 height={100}
                 width={100}
                 alt={name}
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">{name}</Link>
              </h2>
            </>
          )
        }
      </header>

      <nav>
        <Link href="/">Inicio | </Link>
        <Link href="/blog">Blog | </Link>
        <Link href="/about">About | </Link>
        <Link href="/contact">Contacto | </Link>
      </nav>

      <main>
        {children}
      </main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">BACK TO HOME</Link>
        </div>
      )}
    </div>
  )
}

Layout.defaultProos = {
  title: "Next.js | Mi sitio web",
  description: "Descripcion de mi sitio web"
}