import { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SignInModal({ isOpen, closeActiveModal, handleSignUpModal }) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
  };

  return (
    <ModalWithForm title='Sign in' isOpen={isOpen} onClose={closeActiveModal}>
      <label htmlFor='signin-email' className='modal__label'>
        Email
        <input
          type='email'
          className='modal__input'
          name='signin-email'
          id='signin-email'
          placeholder='Enter email'
          minLength='1'
          value={data.email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor='signin-password' className='modal__label'>
        Password
        <input
          type='password'
          className='modal__input'
          name='signin-password'
          id='signin-password'
          placeholder='Enter Password'
          minLength='1'
          value={data.password}
          onChange={handlePasswordChange}
          required
        />
      </label>

      <button type='submit' className='modal__submit'>
        Login
      </button>
      <div className='login_button-container'>
        <span>
          or
          <button
            className='modal__redirect-button'
            type='button'
            onClick={handleSignUpModal}
          >
            Sign up
          </button>
        </span>
      </div>
    </ModalWithForm>
  );
}

export default SignInModal;
