import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useLanguageTransition } from '../components/LanguageTransitionContext';
import Head from 'next/head';

const AboutPage = () => {
    const { t } = useTranslation('common');
    const { isTransitioning, setIsTransitioning } = useLanguageTransition();

    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => setIsTransitioning(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning, setIsTransitioning]);

    const journeyItems = [
        { key: 'journeyItem1', year: '2022' },
        { key: 'journeyItem2' },
        { key: 'journeyItem3', count: '4' },
        { key: 'journeyItem4' }
    ];

    return (
        <>
            <Head>
                <title>{t('aboutMe')} | {t('yourName')}</title>
                <meta name="description" content={t('aboutIntro', { name: t('yourName') })} />
            </Head>
            <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('aboutMe')}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{t('whoIAm')}</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                {t('aboutIntro', { name: t('yourName') })}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                {t('aboutHobbies')}
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{t('myJourney')}</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                {journeyItems.map((item, index) => (
                                    <li key={index}>{t(item.key, item)}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default AboutPage;