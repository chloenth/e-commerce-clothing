import { useState } from 'react';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/FirebaseUtils';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import './styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-credential':
          alert('invalid credential');
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='signin-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          required
          label='Email'
          value={email}
          name='email'
          onChange={handleChange}
        />

        <FormInput
          type='password'
          required
          label='Password'
          value={password}
          name='password'
          onChange={handleChange}
        />

        <div className='button-box'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
