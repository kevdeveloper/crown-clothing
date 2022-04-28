import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDysdBNf4OUsm-vOUoy9ghOP_lA6H1v0tk",
    authDomain: "crown-clothing-db-81f90.firebaseapp.com",
    projectId: "crown-clothing-db-81f90",
    storageBucket: "crown-clothing-db-81f90.appspot.com",
    messagingSenderId: "957972943040",
    appId: "1:957972943040:web:d28038ebb3a8555f435d25"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);