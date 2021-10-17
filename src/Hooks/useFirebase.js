import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/Firebase.init';

initializeAuthentication();


const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();
    const singInUseInGoogle = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)

            })

    }

    return {
        user,
        singInUseInGoogle

    }
};

export default useFirebase;