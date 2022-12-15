// import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width"/>
          <meta charSet="utf-8"/><title>Conversion test</title>
            <link rel="icon" href="/favicon.ico"/>
              <meta name="next-head-count" content="5">
                <link rel="preload" href="/_next/static/css/d7103672eb18c283a687.css" as="style"/>
                  <link rel="stylesheet" href="/_next/static/css/d7103672eb18c283a687.css" data-n-g=""/>
                    <link rel="preload" href="/_next/static/css/9a89afcbe95084ea8b90.css" as="style"/>
                      <link rel="stylesheet" href="/_next/static/css/9a89afcbe95084ea8b90.css" data-n-p=""/>
                        <noscript data-n-css=""></noscript>
                        <link rel="preload" href="/_next/static/chunks/main-1fee81af3413b0132bb3.js" as="script"/>
                          <link rel="preload" href="/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js" as="script">
                            <link rel="preload" href="/_next/static/chunks/framework.d886aa606cb477fe4641.js" as="script"/>
                              <link rel="preload" href="/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.78706e8cfec9a95b753d.js" as="script"/>
                                <link rel="preload" href="/_next/static/chunks/pages/_app-ecd00fcb2dfa3b2beec2.js" as="script"/>
         <link rel="preload" href="/_next/static/chunks/pages/index-330f6884e1baa1d159b8.js" as="script"/>
        <script async src="https://cdn.loycus.jp/script.min.js?whc=1612251050161"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
