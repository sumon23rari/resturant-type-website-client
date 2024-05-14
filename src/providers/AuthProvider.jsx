import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();
    const axiosPublic=useAxiosPublic();
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userProfileUpdate=(name,photo)=>{
        setLoading(true)
       return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,currentUser=>{
setUser(currentUser)
if (currentUser) {
    const userInfo={email:currentUser.email}
    axiosPublic.post('/jwt',userInfo)
    .then((res)=>{
        console.log(res)
        if (res.data.token) {
            localStorage.setItem('access-token',res.data.token)
            setLoading(false)
        }
        else{
            localStorage.removeItem('access-token')
            setLoading(false)
        }
    })
} else {
    
}

})
return ()=>{
    return unSubscribe()
}
},[axiosPublic])
    const authInfo={
        user,
        loading,
        googleSignIn,
        createUser,
        signInUser,
        logOut,
        userProfileUpdate
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;