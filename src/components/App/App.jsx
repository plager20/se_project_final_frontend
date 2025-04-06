import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Footer from '../Footer/Footer';
import SignInModal from '../SignInModal/SignInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import RegistrationConfirmationModal from '../RegistrationConfirmationModal/RegistrationConfirmationModal';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import { register } from '../../utils/auth';

function App() {
  //useStates
  const [activeModal, setActiveModal] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //Modal Functions
  const handleSignInModal = () => {
    console.log(isLoggedIn);
    setActiveModal('signin');
  };

  const handleSignUpModal = () => {
    setActiveModal('signup');
  };

  const handleRegistrationConfirmationModal = () => {
    console.log('opening');
    setActiveModal('registrationconfirmation');
  };

  const closeActiveModal = () => {
    setActiveModal('');
  };

  //Signup and Signin
  const handleRegistration = ({ username, email, password }) => {
    register(username, password, email)
      .then(() => {
        handleRegistrationConfirmationModal();
      })
      .catch(console.error);
  };

  const handleLogIn = ({ email, password }) => {
    login(email, password)
      .then(() => {})
      .catch(console.error);
  };

  return (
    <BrowserRouter>
      <div className='app'>
        <div className='app_content'>
          <Routes>
            <Route
              path='/'
              element={
                <Main
                  handleSignInModal={handleSignInModal}
                  isLoggedin={isLoggedIn}
                />
              }
            ></Route>
            <Route
              path='/saved-news'
              element={<SavedNews isLoggedin={isLoggedIn} />}
            ></Route>
          </Routes>
          <Footer />
        </div>
        <SignInModal
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === 'signin'}
          handleSignUpModal={handleSignUpModal}
        />
        <SignUpModal
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === 'signup'}
          handleSignInModal={handleSignInModal}
          handleRegistration={handleRegistration}
        />
        <RegistrationConfirmationModal
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          handleSignInModal={handleSignInModal}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
