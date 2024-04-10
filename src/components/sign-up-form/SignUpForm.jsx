import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
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
          require
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

        <button type='submit'>Sign UP</button>
      </form>
    </div>
  );
};

export default SignUpForm;
