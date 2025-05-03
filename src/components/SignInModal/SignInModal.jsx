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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn({ email: data.email, password: data.password });
    closeActiveModal();
  };

  const resetForm = () => {
    setData('');
  };

  useEffect(() => {
    if (isOpen) {
      resetForm;
    }
  });

  return (
    <ModalWithForm
      title='Sign in'
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={closeActiveModal}
    >
      <label htmlFor='signin-email' className='modal__label'>
        Email
        <input
          type='email'
          className='modal__input'
          name='email'
          id='signin-email'
          placeholder='Enter email'
          minLength='1'
          value={data.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor='signin-password' className='modal__label'>
        Password
        <input
          type='password'
          className='modal__input'
          name='password'
          id='signin-password'
          placeholder='Enter Password'
          minLength='1'
          value={data.password}
          onChange={handleChange}
          required
        />
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
