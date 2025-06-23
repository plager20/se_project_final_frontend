import { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SignUpModal({
  isOpen,
  closeActiveModal,
  handleSignInModal,
  handleRegistration,
}) {
  const [data, setData] = useState({
    email: '',
    password: '',
    username: '',
  });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!data.password) {
      newErrors.password = 'Password is required';
    } else if (data.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!data.username) {
      newErrors.username = 'Username is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      handleRegistration(data);
    } else {
      console.log('Validation failed', errors);
    }
  };

  const resetForm = () => {
    setData({ email: '', password: '', username: '' });
    setErrors({ email: '', password: '', username: '' });
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title='Sign up'
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
      noValidate
    >
      <label htmlFor='signup-email' className='modal__label'>
        Email
        <input
          type='email'
          className={`modal__input ${errors.email ? 'modal__input_error' : ''}`}
          name='email'
          id='signup-email'
          placeholder='Enter email'
          minLength='1'
          value={data.email}
          onChange={handleChange}
          required
        />
        <span className='modal__error-message'>{errors.email}</span>
      </label>
      <label htmlFor='signup-password' className='modal__label'>
        Password
        <input
          type='password'
          className={`modal__input ${
            errors.password ? 'modal__input_error' : ''
          }`}
          name='password'
          id='signup-password'
          placeholder='Enter Password'
          minLength='6'
          value={data.password}
          onChange={handleChange}
          required
        />
        <span className='modal__error-message'>{errors.password}</span>
      </label>
      <label htmlFor='signup-username' className='modal__label'>
        Username
        <input
          type='text'
          className={`modal__input ${
            errors.username ? 'modal__input_error' : ''
          }`}
          id='signup-username'
          name='username'
          placeholder='Enter your username'
          minLength='1'
          maxLength='30'
          value={data.username}
          onChange={handleChange}
          required
        />
        <span className='modal__error-message'>{errors.username}</span>
      </label>

      <button type='submit' className='modal__submit' onSubmit={handleSubmit}>
        Sign up
      </button>
      <div className='login_button-container'>
        <button
          className='modal__redirect-button'
          type='button'
          onClick={handleSignInModal}
        >
          <span className='modal__span'>or </span>
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default SignUpModal;
