import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">About Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
                        <p className="mb-4">
                            Hello! I'm [Gerardo], a passionate web developer with a keen interest in creating
                            beautiful and functional websites. I specialize in front-end development,
                            with expertise in React, Next.js, and Tailwind CSS.
                        </p>
                        <p>
                            When I'm not coding, you can find me [3D animation videos, AI reasearch, code testing and app developments].
                            I believe that a well-rounded developer brings creativity from various aspects of life into their work.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Started learning web development in [2022]</li>
                            <li>Completed [relevant course or bootcamp] in [year]</li>
                            <li>Worked on [4] freelance projects</li>
                            <li>Currently focusing on [becoming a senior backend dev]</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;