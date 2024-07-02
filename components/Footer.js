import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link href="/" className="hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200">About</Link></li>
                            <li><Link href="/projects" className="hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200">Projects</Link></li>
                            <li><Link href="/skills" className="hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200">Skills</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer