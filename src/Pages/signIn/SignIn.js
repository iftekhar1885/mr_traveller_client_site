import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import  login from '../../assets/login2-pic.webp';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



   

const SignIn = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
      .catch(error => console.error(error));
    }
    return (
        <div className="hero w-full my-20">
        <div className="hero-content gap-20 flex-col grid md:grid-cols-2 lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={login} alt=''></img>

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <form onSubmit={handleSignIn} className="card-body">
                    <h1 className="text-5xl text-center font-bold">Sign In</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type='submit' value='SignUp'></input>

                    </div>
                </form>

                <p className='text-center'>ALready Have An Account? <Link className='text-orange-600 font-bold' to='/login'> Login</Link></p>

                <button className="btn btn-secondary m-5">
                <FaGoogle className='m-3'></FaGoogle>Google SignUp</button>
            </div>
        </div>
    </div>
    );
};

export default SignIn;