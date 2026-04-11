import Head from 'next/head'
import 'src/styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Max Proske – Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
