import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/FirebaseUtils';

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
        <label>Display name</label>
        <input
          type='text'
          required
          value={displayName}
          name='displayName'
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type='email'
          required
          value={email}
          name='email'
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type='password'
          required
          value={password}
          name='password'
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
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
