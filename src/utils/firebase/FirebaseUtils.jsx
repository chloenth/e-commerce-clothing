import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  // if user data exist
  // return userDocRef
  return userDocRef;
};
