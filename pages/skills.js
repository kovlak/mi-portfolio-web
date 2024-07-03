import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useLanguageTransition } from '../components/LanguageTransitionContext';
import { useEffect } from 'react';

export default function Contact() {
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
                <h1 className="text-4xl font-bold mb-6">{t('contactPage')}</h1>
                {/* Add your contact form or contact information here */}
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