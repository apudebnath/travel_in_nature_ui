import { useEffect, useState } from 'react';
import initAuthentication from '../components/pages/Login/firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
           const user = result.user;
           setUser(user);
           setError('');
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
            else {
                setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    }, [])

    // LogOut
    const logOut = () => {
        signOut(auth)
        .then(() => {

       })
       .catch((error) => {

       })
       .finally(() => setIsLoading(false))
       setUser({})
    }
    return{
        user,
        error,
        isLoading,
        googleSignIn,
        logOut
    }
}    
 
export default useFirebase;