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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setData('');
  };

  useEffect(() => {
    if (isOpen) {
      resetForm;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };

  return (
    <ModalWithForm
      title='Sign up'
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor='signup-email' className='modal__label'>
        Email
        <input
          type='email'
          className='modal__input'
          name='email'
          id='signup-email'
          placeholder='Enter email'
          minLength='1'
          value={data.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor='signup-password' className='modal__label'>
        Password
        <input
          type='password'
          className='modal__input'
          name='password'
          id='signup-password'
          placeholder='Enter Password'
          minLength='1'
          value={data.password}
          onChange={handleChange}
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
          value={data.username}
          onChange={handleChange}
          required
        />
      </label>

      <button type='submit' className='modal__submit' onSubmit={handleSubmit}>
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
