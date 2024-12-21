import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="grid gap-7 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    jobs.map(job => 
                    <HotJobCard job={job}
                    key={job._id}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;