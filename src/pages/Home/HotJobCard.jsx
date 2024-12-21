import { title } from 'motion/react-client';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {

    const {_id, title, company, company_logo, requirements, description, salaryRange,
            jobType, category, applicationDeadline, location} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="flex gap-2 m-2">
                <figure>
                    <img
                    className='w-16'
                    src={company_logo}
                    alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className='flex gap-1 items-center'><FaMapMarkerAlt></FaMapMarkerAlt>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}<div className="badge badge-secondary">NEW</div></h2>
                <p>{description}</p>
                <div className='flex gap-x-3 gap-y-2 flex-wrap'>
                    {
                        requirements.map(skill =>
                            <p className='border bg-slate-100 rounded-md text-center px-2'>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end mt-4">
                    <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply Now</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;