import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguageTransition } from '../components/LanguageTransitionContext';
import { useEffect } from 'react';

export default function Home() {
    const { t } = useTranslation('common');
    const { isTransitioning, setIsTransitioning } = useLanguageTransition();

    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => setIsTransitioning(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning, setIsTransitioning]);

    return (
        <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t('welcome')}</h1>
                    <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
                        {t('intro')}
                    </p>
                    <Link href="/projects" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                        {t('viewMyWork')}
                    </Link>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/images/profile.jpg"
                        alt={t('profilePicture')}
                        width={400}
                        height={400}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}