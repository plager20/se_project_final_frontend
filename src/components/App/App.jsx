import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SignInModal from '../SignInModal/SignInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import RegistrationConfirmationModal from '../RegistrationConfirmationModal/RegistrationConfirmationModal';
import Main from '../Main/Main';

function App() {
  const [activeModal, setActiveModal] = useState('');

  const handleSignInModal = () => {
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

  return (
    <div className='app'>
      <div className='app_content'>
        <Header handleSignInModal={handleSignInModal} />
        <Main />
        <About />
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
        handleRegistrationConfirmationModal={
          handleRegistrationConfirmationModal
        }
      />
      <RegistrationConfirmationModal
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        handleSignInModal={handleSignInModal}
      />
    </div>
  );
}

export default App;
