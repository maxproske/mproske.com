import Head from 'next/head'
import 'src/styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Max Proske – Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Max Proske is a Director of Software Engineering and Docker Captain based in Vancouver, Canada."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="alternate" type="application/rss+xml" title="Max Proske – Blog" href="/rss.xml" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
