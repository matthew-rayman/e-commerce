import React, { createContext, useEffect, useState } from 'react'
import app from "../firebase/firebase.config"
import {GoogleAuthProvider,getAuth,createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"


export const AuthContext = createContext()
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
       setUser({ email: email });
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const signUpWithGoogle = ()=>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
    }
    
    const login = (email,password)=>{
      setLoading(true)
      setUser({ email: email });
      return signInWithEmailAndPassword(auth,email,password)

    }
    const logout = ()=>{
      setUser(null)
      return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentuser =>{
        setUser(currentuser);
        setLoading(false)
      })
      return ()=> {
        return unsubscribe()
      }
    })
    const authInfo = {
        user,
        loading,
        createUser,
        signUpWithGoogle,
        login,
        logout
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
