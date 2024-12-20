import React from 'react';
import { easeOut, motion } from "framer-motion";
import team1 from '../../assets/team/team-1.avif';
import team2 from '../../assets/team/team-2.avif';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                <motion.img
                    src={team1}
                    className="max-w-sm w-72 border-l-4 border-b-4
                     border-blue-400 rounded-t-3xl rounded-br-3xl 
                     shadow-2xl" 
                     animate={{ y: [50, 100, 50]}}
                     transition={{duration: 10, delay:1, repeat: Infinity}}/>
                    <motion.img
                    src={team2}
                    className="max-w-sm w-72 border-l-4 border-b-4
                     border-blue-400 rounded-t-3xl rounded-br-3xl 
                     shadow-2xl" 
                     animate={{ x: [100, 150, 100]}}
                     transition={{duration: 10, delay:5, repeat: Infinity}}/>
                </div>
                <div className='flex-1'>
                <motion.h1
                    animate={{x : [0, 50, 0], color : ['#05264E']}}
                    transition={{duration : 10, delay : 1, 
                        ease: easeOut, repeat: Infinity}}
                    className="text-5xl font-bold">
                Latest <motion.span
                
                    animate={{color:['#20818C', '#AE38FE', '#3C65F5']}}
                    transition={{duration : 2, delay : 1, 
                        ease: easeOut, repeat: Infinity}}
                    >Jobs</motion.span> For You!</motion.h1>
            
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;