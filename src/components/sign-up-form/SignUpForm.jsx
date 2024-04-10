import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/FirebaseUtils';
import FormInput from '../form-input/FormInput';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormField = () => setFormFields(defaultFormFields);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, {
        displayName,
      });

      resetFormField();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use')
        alert('Cannot create user, email already in use');
      else console.log('error user signup with email and password', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          required
          label='Display Name'
          value={displayName}
          name='displayName'
          onChange={handleChange}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          value={confirmPassword}
          name='confirmPassword'
          onChange={handleChange}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
