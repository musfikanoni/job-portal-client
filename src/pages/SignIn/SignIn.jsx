import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import signInLottieJSON from '../../assets/lottie/signIn.json'
import AuthContext from '../../context/AuthContext/AuthContext';
const SignIn = () => {

    const { signInUser } = useContext(AuthContext);

        const handleSignIn = (e) => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);

            signInUser(email, password)
            .then(result => {
                console.log('sign In', result.user)
            })
            .catch(error => {
                console.log('error', error);
            })
        }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-[40%]">
                    <Lottie animationData={signInLottieJSON}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl ml-2 mt-4 font-bold text-center">Sign In</h1>
                <form onSubmit={handleSignIn} className="card-body">
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
                    <button className="btn btn-primary">Sign In</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignIn;