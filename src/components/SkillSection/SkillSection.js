import React from 'react';

import SkillTable from './SkillTable/SkillTable';

const skillSection = props => {
    const skillTitle = 'Skills & Tools';
    const skills = {
        'Web Development': {
            Language: ['HTML', 'CSS', 'JavaScript'],
            Frameworks: ['React', 'Express.js'],
            Packages: ['Node.js', 'redux', 'React Hooks', 'Webpack', 'jQuery'],
            Database: ['PostgreSQL']
        },
        'Data Science': {
            Language: ['Python'],
            Packages: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Tensorflow', 'PyTorch'],
            Models: ['RandomForest', 'Clustering (K-Means)', 'ANN', 'CNN', 'RNN, LSTM'],
            IDE: ['Jupyter Notebook', 'Google Colaboratory', 'Spyder']
        },
        Other: {
            PM: ['Project Management', 'Agile Development'],
            'Web skill': ['Git + Github', 'Heroku', 'Firebase', 'Unit Testing'],
            Statistics: ['Statistics & Probabilities', 'Tableau']
        }
    }
    
    const skillTableContent = Object.keys(skills).map(title => {
        return <SkillTable key={title} title={title} table={skills[title]}/>
    });

    return (
        <div className="w-full min-h-screen justify-start flex flex-col mt-4 xl:mt-20 lg:mt-16 md:mt-12 sm:mt-8 px-4 xl:px-32 lg:px-24 md:px-16 sm:px-8 font-sans text-indigo-800">
            <h2 className="text-lg my-3 xl:text-2xl md:text-xl font-bold underline">{skillTitle}</h2>
            {skillTableContent}
        </div>
    );

};

export default skillSection;