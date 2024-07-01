import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, pageTitle = "Portfolio" }) => {
  const siteTitle = "Your Name" // Reemplaza con tu nombre real
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{`${siteTitle} - ${pageTitle}`}</title>
        <meta name="description" content={`Portfolio of ${siteTitle} - Web Developer`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout