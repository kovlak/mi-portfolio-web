import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-xl font-bold">Your Name</div>
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Menu
                    </button>
                    <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                        <ul className="flex flex-col md:flex-row md:space-x-4">
                            <li><Link href="/" className="block py-2 md:py-0 hover:text-gray-300">Home</Link></li>
                            <li><Link href="/about" className="block py-2 md:py-0 hover:text-gray-300">About</Link></li>
                            <li><Link href="/projects" className="block py-2 md:py-0 hover:text-gray-300">Projects</Link></li>
                            <li><Link href="/skills" className="block py-2 md:py-0 hover:text-gray-300">Skills</Link></li>
                            <li><Link href="/contact" className="block py-2 md:py-0 hover:text-gray-300">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header