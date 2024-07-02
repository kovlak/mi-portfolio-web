import { useRouter } from 'next/router';
import Image from 'next/image';

const LanguageToggle = () => {
    const router = useRouter();

    const changeLanguage = (locale) => {
        router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <div className="flex space-x-2">
            <button onClick={() => changeLanguage('es')} aria-label="Cambiar a español">
                <Image src="/images/es-flag.png" alt="Bandera de España" width={24} height={24} />
            </button>
            <button onClick={() => changeLanguage('en')} aria-label="Change to English">
                <Image src="/images/en-flag.png" alt="UK Flag" width={24} height={24} />
            </button>
        </div>
    );
};

export default LanguageToggle;