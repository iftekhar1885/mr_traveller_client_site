import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/pic-8.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch();
  }

    const navItems = <>
       <li><Link className='font-semi-bold' to='/'>Home</Link></li>
       <li><Link className='font-semi-bold' to='/blog'>Blog</Link></li>

       {
         user?.email ?
         <>
           <li><Link className='font-semi-bold' to='/reviews'>Reviews</Link></li>
           <li><p className='font-semi-bold'>{user?.displayName}</p></li>
           <li><p>
            {user.photoURL ?
            <img style={{height: '25px'}} roundedCircle src={user?.photoURL} alt=''></img>
            : <FaUser></FaUser>
          }
          
            </p></li>
          <li className='font-semibold'>
            <button onClick={handleSignOut} className='btn-ghost'>Log Out</button>
          </li>
         </>
         :
        <li><Link className='font-semi-bold' to='/login'>LogIn</Link></li>
       }

    </>
    return (
        <div className="navbar h-20 mt-2 p-10 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {navItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">
      <img className='w-1/2' src={logo} alt=''></img>
    </Link>
    <h2 className='text-4xl font-bold'>Mr Traveller</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
    );
};

export default Header;