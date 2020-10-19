import Head from 'next/head'
import 'src/styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Max Proske / Full Stack Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128642324-1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-128642324-1');
                `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
