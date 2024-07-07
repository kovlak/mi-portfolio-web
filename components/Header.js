import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation('common')
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = () => setIsOpen(false)
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    const isActive = (pathname) => router.pathname === pathname

    return (
        <header className="bg-gray-800 dark:bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-4">
                        <div className="text-xl font-bold">{t('yourName')}</div>
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                    <button
                        className="md:hidden bg-gray-700 dark:bg-gray-800 px-3 py-1 rounded"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? t('closeMenu') : t('openMenu')}
                    >
                        {isOpen ? t('close') : t('menu')}
                    </button>
                    <nav
                        id="mobile-menu"
                        className={`${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}
                    >
                        <ul className="flex flex-col md:flex-row md:space-x-4">
                            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item === 'home' ? '' : item}`}
                                        className={`block py-2 md:py-0 hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200
                                            ${isActive(`/${item === 'home' ? '' : item}`) ? 'text-blue-400' : ''}`}
                                    >
                                        {t(item)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header