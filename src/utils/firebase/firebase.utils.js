import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDysdBNf4OUsm-vOUoy9ghOP_lA6H1v0tk",
    authDomain: "crown-clothing-db-81f90.firebaseapp.com",
    projectId: "crown-clothing-db-81f90",
    storageBucket: "crown-clothing-db-81f90.appspot.com",
    messagingSenderId: "957972943040",
    appId: "1:957972943040:web:d28038ebb3a8555f435d25"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => 
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    // if user data exists
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

    // if user data does not exist
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};