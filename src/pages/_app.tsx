import { AppProps } from 'next/app';
import Head from 'next/head'
import './styles/styles.modules.css'
import GlobalStyles from './styles/global'

function App({ Component, pageProps }: AppProps) {
   return (
    <>
      <Head>
        <title>FreeCode-Br</title>
        <link rel="shortcut icon" href="/img/ico.png" />
        <link rel="apple-touch-icon" href="/img/ico.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <meta name="description" content="A simple example showing the new Image Component from NextJS 10"/>

            </Head>
        <Component {...pageProps} />
      <GlobalStyles/>
    
    </>
  )
        }

export default App

