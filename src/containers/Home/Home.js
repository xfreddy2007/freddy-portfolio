import React from 'react';

import Introduction from '../../components/Introduction/Introduction';
import WorkGallery from '../../components/WorkGallery/WorkGallery';

const home = props => (
    <div className="w-full min-h-screen justify-start flex flex-col px-4 xl:px-32 lg:px-24 md:px-16 sm:px-8 font-sans text-indigo-800">
        <Introduction />
        <WorkGallery />
    </div>
);

export default home;