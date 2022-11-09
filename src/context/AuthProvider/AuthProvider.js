import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/Firebase.config';
// import {getAuth} from 'firebase/app';
// import {getAuth} from 'firebase/app';
export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = ( email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const emailLogIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const logOut = () =>{
        localStorage.removeItem('token');
        return signOut(auth);
    }
    
    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, (previousUser) =>{
          setUser(previousUser);
          setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    } ,[])
    const authInfo = {
          user,
          loading,
          createUser,
          emailLogIn,
          logOut,
          googleLogin
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;