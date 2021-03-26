import React from 'react';

import AboutTitle from '../../components/AboutTitle/AboutTitle';
import SelfIntroduction from '../../components/SelfIntroduction/SelfIntroduction';
import SkillSection from '../../components/SkillSection/SkillSection';
import Certification from '../../components/Certification/Certification';

const about = props => (
    <div className="w-full min-h-screen justify-start flex flex-col">
        <AboutTitle />
        <SelfIntroduction />
        <SkillSection />
        <Certification />
    </div>
);

export default about;