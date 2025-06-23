import { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SignInModal({
  isOpen,
  closeActiveModal,
  handleLogIn,
  handleSignUpModal,
}) {
  const [data, setData] = useState({
    email: '',
    password: '',
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

    setErrors(newErrors);
    console.log('Validation result:', newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      handleLogIn({ email: data.email, password: data.password });
      closeActiveModal();
    } else {
      console.log('Validation failed', errors);
    }
  };

  const resetForm = () => {
    setData({ email: '', password: '' });
    setErrors({ email: '', password: '' });
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title='Sign in'
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={closeActiveModal}
      noValidate
    >
      <label htmlFor='signin-email' className='modal__label'>
        Email
        <input
          type='email'
          className={`modal__input ${errors.email ? 'modal__input_error' : ''}`}
          name='email'
          id='signin-email'
          placeholder='Enter email'
          minLength='1'
          value={data.email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <span className='modal__error-message'>{errors.email}</span>
        )}
      </label>
      <label htmlFor='signin-password' className='modal__label'>
        Password
        <input
          type='password'
          className={`modal__input ${
            errors.password ? 'modal__input_error' : ''
          }`}
          name='password'
          id='signin-password'
          placeholder='Enter Password'
          minLength='6'
          value={data.password}
          onChange={handleChange}
          required
        />
        <span className='modal__error-message'>{errors.password}</span>
      </label>

      <button type='submit' className='modal__submit'>
        Login
      </button>
      <div className='login_button-container'>
        <button
          className='modal__redirect-button'
          type='button'
          onClick={handleSignUpModal}
        >
          <span className='modal__span'>or </span>
          Sign up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default SignInModal;
