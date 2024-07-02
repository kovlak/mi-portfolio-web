import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation('common')

    return (
        <header className="bg-gray-800 dark:bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-4">
                        <div className="text-xl font-bold">Your Name</div>
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                    <button
                        className="md:hidden bg-gray-700 dark:bg-gray-800 px-3 py-1 rounded"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Menu
                    </button>
                    <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                        <ul className="flex flex-col md:flex-row md:space-x-4">
                            <li><Link href="/" className="block py-2 md:py-0 hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200">{t('home')}</Link></li>
                            <li><Link href="/about" className="block py-2 md:py-0 hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200">{t('about')}</Link></li>
                            <li><Link href="/projects" className="block py-2 md:py-0 hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200">{t('projects')}</Link></li>
                            <li><Link href="/skills" className="block py-2 md:py-0 hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200">{t('skills')}</Link></li>
                            <li><Link href="/contact" className="block py-2 md:py-0 hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200">{t('contact')}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header