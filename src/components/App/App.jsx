import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SignInModal from '../SignInModal/SignInModal';
import SignUpModal from '../SignUpModal/SignUpModal';

function App() {
  const [activeModal, setActiveModal] = useState('');

  const handleSignInModal = () => {
    setActiveModal('signin');
  };

  const handleSignUpModal = () => {
    setActiveModal('signup');
  };

  const closeActiveModal = () => {
    setActiveModal('');
  };

  return (
    <div className='app'>
      <div className='app_content'>
        <Header handleSignInModal={handleSignInModal}></Header>
        <About></About>
        <Footer></Footer>
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
      />
    </div>
  );
}

export default App;
