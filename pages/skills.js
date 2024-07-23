import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useLanguageTransition } from '../components/LanguageTransitionContext';
import Head from 'next/head';

const SkillCategory = React.memo(({ title, skills }) => {
    const { t } = useTranslation('common');
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{t(title)}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md">
                        <p className="font-semibold text-gray-800 dark:text-gray-200">{t(skill.name)}</p>
                        <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2.5 mt-2">
                            <div
                                className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                                style={{ width: `${skill.level}%` }}
                                aria-valuenow={skill.level}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                role="progressbar"
                                aria-label={`${t(skill.name)} skill level`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

SkillCategory.displayName = 'SkillCategory';

const skillsData = [
    {
        category: "programmingLanguages",
        skills: [
            { name: "JavaScript", level: 70 },
            { name: "Python", level: 75 },
            { name: "TypeScript", level: 75 },
            { name: "Java", level: 70 },
        ]
    },
    {
        category: "frameworksAndLibraries",
        skills: [
            { name: "React", level: 85 },
            { name: "NextJs", level: 80 },
            { name: "NodeJs", level: 75 },
            { name: "Express", level: 70 },
        ]
    },
    {
        category: "toolsAndTechnologies",
        skills: [
            { name: "Git", level: 85 },
            { name: "Docker", level: 70 },
            { name: "AWS", level: 65 },
            { name: "GraphQL", level: 60 },
        ]
    }
];

export default function Skills() {
    const { t } = useTranslation('common');
    const { isTransitioning, setIsTransitioning } = useLanguageTransition();

    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => setIsTransitioning(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning, setIsTransitioning]);

    return (
        <>
            <Head>
                <title>{t('mySkills')} | {t('yourName')}</title>
                <meta name="description" content={t('skillsDescription', 'Explore my technical skills and expertise in various programming languages, frameworks, and tools.')} />
            </Head>
            <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">{t('mySkills')}</h1>
                    {skillsData.map((category, index) => (
                        <SkillCategory
                            key={category.category}
                            title={category.category}
                            skills={category.skills}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}