import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;