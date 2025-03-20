import { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SignUpModal({ isOpen, closeActiveModal, handleSignInModal }) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const resetForm = () => {
    setEmail(''), setPassword(''), setUsername('');
  };

  useEffect(() => {
    if (isOpen) {
      resetForm;
    }
  });

  return (
    <ModalWithForm title='Sign up' isOpen={isOpen} onClose={closeActiveModal}>
      <label htmlFor='signup-email' className='modal__label'>
        Email
        <input
          type='email'
          className='modal__input'
          name='signup-email'
          id='signup-email'
          placeholder='Enter email'
          minLength='1'
          value={data.email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor='signup-password' className='modal__label'>
        Password
        <input
          type='password'
          className='modal__input'
          name='signup-password'
          id='signup-password'
          placeholder='Enter Password'
          minLength='1'
          value={data.password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <label htmlFor='signup-username' className='modal__label'>
        Username
        <input
          type='text'
          className='modal__input'
          id='signup-username'
          name='username'
          placeholder='Enter your username'
          minLength='1'
          maxLength='30'
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </label>

      <button type='submit' className='modal__submit'>
        Sign up
      </button>
      <div className='login_button-container'>
        <span>
          or
          <button
            className='modal__redirect-button'
            type='button'
            onClick={handleSignInModal}
          >
            Sign in
          </button>
        </span>
      </div>
    </ModalWithForm>
  );
}

export default SignUpModal;
