import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Portfolio of Your Name - Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout