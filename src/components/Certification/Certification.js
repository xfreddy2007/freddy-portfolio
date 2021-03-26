import React from 'react';

import CardItems from '../UI/CardItems/CardItems';

const certification = props => {
    const certifications = {
        'Web Development': [
            {title: 'React - The Complete Guide', institute: 'Udemy', link: "https://www.udemy.com/certificate/UC-38cee1da-6f31-454c-9716-3427659284ac/"},
            {title: 'The Complete Web Developer in 2021: Zero to Mastery', institute: 'Udemy', link: "https://www.udemy.com/certificate/UC-4727e48b-d9b0-48de-9ab1-a687122d1a2f/"},
            {title: 'JavaScript Web Projects: 20 Projects to Build Your Portfolio', institute: 'Udemy', link: "https://www.udemy.com/certificate/UC-c1c912e7-6bbc-4766-96a9-a7dd6be3cd2b/"}
        ],
        'Data Science': [
            {title: 'Deep Learning A-Z™: Hands-On Artificial Neural Networks', institute: 'Udemy', link: "https://www.udemy.com/certificate/UC-6899604a-91de-4428-9fdb-7dda749e4e89/"},
            {title: 'Complete Machine Learning & Data Science Bootcamp', institute: 'Udemy', link: "https://www.udemy.com/certificate/UC-398b3862-1be9-431c-a51d-1c318cf146d5/"},
            {title: 'The Data Science Course 2021: Complete Data Science Bootcamp', institute: 'Udemy', link: "https://www.udemy.com/certificate/UC-L974P1FJ/"}
        ],
        Other: [
            {title: 'PMP Course completion', institute: 'PMI'}
        ]
    }

    const cardContainer = Object.keys(certifications).map(item => {
        return <CardItems key={item} title={item} items={certifications[item]}/>
    });

    return (
        <div className="w-full min-h-screen justify-start flex flex-col my-4 xl:mt-20 lg:mt-16 md:mt-12 sm:mt-8 px-4 xl:px-32 lg:px-24 md:px-16 sm:px-8 font-sans text-indigo-800">
            <h2 className="text-lg my-3 xl:text-2xl md:text-xl underline">Certifications</h2>
            {cardContainer}
        </div>
    );

};

export default certification;