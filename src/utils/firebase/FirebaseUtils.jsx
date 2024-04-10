import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBTTEiDvUKfsT--UJZYUAKcXOehyDzBNSE',
  authDomain: 'crwn-clothing-db-2c217.firebaseapp.com',
  projectId: 'crwn-clothing-db-2c217',
  storageBucket: 'crwn-clothing-db-2c217.appspot.com',
  messagingSenderId: '261087912356',
  appId: '1:261087912356:web:848758976b6117caaea131',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
