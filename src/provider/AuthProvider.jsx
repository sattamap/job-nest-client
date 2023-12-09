import { createContext, useEffect, useState} from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
   
    
    
    const createUser = (name, email, password, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Add the user's first name and last name to their profile
            const user = userCredential.user;
            return updateProfile(user, {
              displayName: `${name}`,
              photoURL: photoURL || "" ,
            });
          })
          .catch((error) => {
            console.error("Error creating user:", error);
            throw error; // Propagate the error to the caller
          });
      };


      const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider)

    }

    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          const userEmail = currentUser?.email || user?.email;
          const loggedUser = {email: userEmail};
          setUser(currentUser);
      

            setUser(currentUser);
            setLoading(false);
            if(currentUser){
              
              axios.post('https://job-nest-server.vercel.app/jwt',loggedUser,{withCredentials: true })
              .then(res=>{
                  console.log('token response:',res.data);
              })
          }
          else{
            axios.post('https://job-nest-server.vercel.app/logout',loggedUser,{
                withCredentials: true
            })
            .then(res=>{
                console.log(res.data);
            })
        }
    });
    return () => {
        return unSubscribe();
    }
}, [])

      
  

    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        loading,
        setLoading,
       
    };
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node ,
}

export default AuthProvider;
