import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/FirebaseUtils';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import Button from '../../components/button/Button';
import SignInForm from '../../components/sign-in-form/SignInForm';

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
      <Button buttonType='google' onClick={logGoogleUser}>
        Sign in with Google Popup
      </Button>
    </div>
  );
};

export default Authentication;
