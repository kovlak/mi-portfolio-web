import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
                <li><Link href="/skills" className="hover:text-gray-300">Skills</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;

