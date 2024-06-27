import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                    <p className="text-xl mb-6">
                        Hi, I'm [Your Name]. I'm a passionate web developer creating amazing digital experiences.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                        View My Work
                    </button>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/images/profile.jpg"
                        alt="Profile picture"
                        width={400}
                        height={400}
                        className="rounded-full"
                    />
                </div>
            </div>
        </Layout>
    )
}