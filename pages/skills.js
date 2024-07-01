import React from 'react';
import Layout from '../components/Layout';

const SkillCategory = ({ title, skills }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
                    <p className="font-semibold">{skill.name}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${skill.level}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function Skills() {
    const skillsData = [
        {
            category: "Lenguajes de Programación",
            skills: [
                { name: "JavaScript", level: 90 },
                { name: "Python", level: 80 },
                { name: "TypeScript", level: 75 },
                { name: "Java", level: 70 },
            ]
        },
        {
            category: "Frameworks y Librerías",
            skills: [
                { name: "React", level: 85 },
                { name: "Next.js", level: 80 },
                { name: "Node.js", level: 75 },
                { name: "Express", level: 70 },
            ]
        },
        {
            category: "Herramientas y Tecnologías",
            skills: [
                { name: "Git", level: 85 },
                { name: "Docker", level: 70 },
                { name: "AWS", level: 65 },
                { name: "GraphQL", level: 60 },
            ]
        }
    ];

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Mis Habilidades</h1>
                {skillsData.map((category, index) => (
                    <SkillCategory
                        key={index}
                        title={category.category}
                        skills={category.skills}
                    />
                ))}
            </div>
        </Layout>
    );
}