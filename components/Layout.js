import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, pageTitle = "Portfolio" }) => {
  const siteTitle = "Your Name" // Replace with your actual name

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
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