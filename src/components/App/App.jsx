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
import getNewsArticles from '../../utils/NewsApi';
import { saveArticles, getArticles } from '../../utils/api';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  //useStates
  const [activeModal, setActiveModal] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [newsArticles, setNewsArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [visibleArticles, setVisableArticles] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  //Modal Functions
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
      const response = await login(email, password);
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
        fetchArticles();
      }
    } catch (err) {
      console.error(err);
    }
  };

  //NewsApi
  const fetchArticles = async () => {
    const articles = await getArticles();
    setSavedArticles(articles);
  };

  const handleSaveArticle = async ({ _id, isSaved, article }) => {
    try {
      const updatedArticles = await saveArticles({
        _id,
        isSaved,
        article,
        savedArticles,
      });

      setSavedArticles(updatedArticles);
    } catch (err) {
      console.error('Error saving article:', err);
    }
  };

  const handleCardRender = () => {
    if (visibleArticles > newsArticles.length) {
      setVisableArticles(newsArticles.length);
    }
    setVisableArticles((prevCount) => prevCount + 3);
  };

  const handleSearch = async (keyword) => {
    setIsLoading(true);

    try {
      const articleData = await getNewsArticles(keyword);
      ('');

      const articleObj = articleData.map((article) => ({
        _id: crypto.randomUUID(),
        isSaved: false,
        ...article,
        keyword,
      }));

      if (!hasSearched) {
        setHasSearched(true);
      }

      setNewsArticles(articleObj);
      setVisableArticles(0);
      handleCardRender();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffects
  useEffect(() => {
    handleCheckToken();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, isLoggedIn }}>
        <div className='app'>
          <div className='app_content'>
            <Routes>
              <Route
                path='/'
                element={
                  <Main
                    handleSignInModal={handleSignInModal}
                    handleLogOut={handleLogOut}
                    handleSearch={handleSearch}
                    handleSaveArticle={handleSaveArticle}
                    newsArticles={newsArticles}
                    visibleArticles={visibleArticles}
                    handleCardRender={handleCardRender}
                    isLoading={isLoading}
                    hasSearched={hasSearched}
                  />
                }
              ></Route>

              <Route
                path='/saved-news'
                element={
                  <ProtectedRoute>
                    <SavedNews
                      savedArticles={savedArticles}
                      handleLogOut={handleLogOut}
                      handleSaveArticle={handleSaveArticle}
                    />
                  </ProtectedRoute>
                }
              ></Route>
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
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
