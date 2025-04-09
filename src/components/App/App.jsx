import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Footer from '../Footer/Footer';
import SignInModal from '../SignInModal/SignInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import RegistrationConfirmationModal from '../RegistrationConfirmationModal/RegistrationConfirmationModal';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import { register, login, checkToken } from '../../utils/auth';
import UserContext from '../../context/UserContext';

function App() {
  //useStates
  const [activeModal, setActiveModal] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  const handleLogIn = async (email, password, e) => {
    try {
      const response = await login();
      if (response.token) {
        localStorage.setItem('token', response.token);
        handleCheckToken();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckToken = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await checkToken(token);
      if (response.data) {
        setIsLoggedIn(true);
        const { name, email, _id } = response.data;
        setCurrentUser({ name, email, _id });
        //fetchArticles();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  return (
    <BrowserRouter>
      <div className='app'>
        <UserContext.Provider value={{ currentUser, isLoggedIn }}>
          <div className='app_content'>
            <Routes>
              <Route
                path='/'
                element={
                  <Main
                    handleSignInModal={handleSignInModal}
                    handleLogOut={handleLogOut}
                  />
                }
              ></Route>
              <Route path='/saved-news' element={<SavedNews />}></Route>
            </Routes>
            <Footer />
          </div>
          <SignInModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === 'signin'}
            handleSignUpModal={handleSignUpModal}
            handleLogIn={handleLogIn}
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
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
