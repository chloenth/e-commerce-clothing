import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/FirebaseUtils';
import SignUpForm from '../../components/sign-up-form/SignUpForm';

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignUpForm />
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default Signin;
