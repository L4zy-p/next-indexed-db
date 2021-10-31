import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
      <link rel='icon' type='image/x-icon' href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`} />
      <title>Todo list</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
