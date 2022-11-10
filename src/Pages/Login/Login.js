import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login2-pic.webp';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

  const { emailLogIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    emailLogIn(email, password)
      .then(result => {
        const user = result.user;

        const currentUser = {
          email: user.email
        }
        console.log(currentUser);


        fetch(`https://mr-traveller-server-two.vercel.app/jwt`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)

        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem('token', data.token);
          })
        navigate(from, { replace: true });

      })
      .catch(error => console.error(error));
  }
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    googleLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))

  }
  return (
    <div className="hero w-full my-20">
      <div className="hero-content gap-20 flex-col grid md:grid-cols-2 lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='w-full' src={login} alt=''></img>

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type='submit' value='login'></input>

            </div>
          </form>

          <p className='text-center'>New to Mr Traveller <Link className='text-orange-600 font-bold' to='/signin'> Sign In</Link></p>

          <button onClick={handleGoogleSignIn} className="btn btn-secondary m-5">
            <FaGoogle className='m-3'></FaGoogle>Google SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Login;