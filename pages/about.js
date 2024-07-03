import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useLanguageTransition } from '../components/LanguageTransitionContext';

const AboutPage = () => {
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
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">{t('aboutMe')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">{t('whoIAm')}</h2>
                        <p className="mb-4">
                            {t('aboutIntro', { name: 'Gerardo' })}
                        </p>
                        <p>
                            {t('aboutHobbies')}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">{t('myJourney')}</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>{t('journeyItem1', { year: '2022' })}</li>
                            <li>{t('journeyItem2')}</li>
                            <li>{t('journeyItem3', { count: '4' })}</li>
                            <li>{t('journeyItem4')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
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