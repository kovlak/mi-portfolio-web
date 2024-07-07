import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLanguageTransition } from './LanguageTransitionContext';

const LanguageToggle = () => {
    const router = useRouter();
    const { changeLanguage } = useLanguageTransition();

    const handleLanguageChange = (lang) => {
        if (lang !== router.locale) {
            changeLanguage(lang);
        }
    };

    return (
        <div className="flex space-x-2">
            <button
                onClick={() => handleLanguageChange('es')}
                aria-label="Cambiar a español"
                className={`p-1 rounded ${router.locale === 'es' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                title="Cambiar a español"
            >
                <Image src="/images/es-flag.png" alt="Bandera de España" width={24} height={24} />
                <span className="sr-only">Español</span>
            </button>
            <button
                onClick={() => handleLanguageChange('en')}
                aria-label="Change to English"
                className={`p-1 rounded ${router.locale === 'en' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                title="Change to English"
            >
                <Image src="/images/en-flag.png" alt="UK Flag" width={24} height={24} />
                <span className="sr-only">English</span>
            </button>
        </div>
    );
};

export default LanguageToggle;