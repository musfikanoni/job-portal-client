import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import animationLottieData from '../../assets/lottie/register.json';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogIn from '../shared/SocialLogIn';
const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleReegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        //password Validation
        //show password validation error

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-[45%]">
                    <Lottie animationData={animationLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl ml-2 mt-4 font-bold text-center">Register now!</h1>
                <form onSubmit={handleReegister} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className="divider px-8">OR</div>
                <div className='flex justify-center pt-2 pb-7'>
                    <SocialLogIn></SocialLogIn>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;