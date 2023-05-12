'use client';

import { app } from './firebase'
import React, { useState, createContext } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from 'next/navigation';

export const auth = getAuth(app);


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const router = useRouter();

    const loginComEmailESenha = async (email, password ) => {
      try{
        await signInWithEmailAndPassword (auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;       
            console.log(user)
            router.push('/HomePage')
          })
      } catch (error) {
    }}
    
  
    const logout = () => {
      console.log('logout');
      setUser(null);
      router.push('/LoginPage')
    };
  
    return (
        <AuthContext.Provider value={{authenticated: !!user, user, loginComEmailESenha, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthContext = createContext();
