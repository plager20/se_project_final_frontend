import { Link, useLocation } from 'react-router';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

import './Navigation.css';
import logout from '../../assets/logout.svg';
import logoutBlack from '../../assets/logout-black.svg';

function Navigation({ handleSignInModal, handleNavMenuModal, handleLogOut }) {
  const { currentUser, isLoggedIn } = useContext(UserContext);
  const location = useLocation();
  const isSavedNews = location.pathname === '/saved-news';

  return (
    <div
      className={`navigation ${isSavedNews ? 'navigation__saved-news' : ''}`}
    >
      <Link to='/'>
        <p className='navigation__logo'>NewsExplorer</p>
      </Link>
      <button
        className='navigation__mobile-menu'
        onClick={handleNavMenuModal}
      ></button>
      <div className='navigation__button-container'>
        <Link to='/'>
          <button
            className={
              isSavedNews
                ? 'navigation__home-button_black'
                : 'navigation__home-button'
            }
            id='/'
          >
            Home
          </button>
        </Link>
        {!isLoggedIn && (
          <button
            className='navigation__signin-button'
            onClick={handleSignInModal}
          >
            Sign In
          </button>
        )}
        {isLoggedIn && (
          <Link to='/saved-news'>
            <button
              className={
                isSavedNews
                  ? 'navigation__savednews-button_black'
                  : 'navigation__savednews-button'
              }
            >
              Saved articles
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <button className='navigation__signout' onClick={handleLogOut}>
            {currentUser.name}
            <img
              className='navigation__logout'
              src={isSavedNews ? logoutBlack : logout}
              alt='logout icon'
            />
          </button>
        )}
      </div>
    </div>
  );
}
export default Navigation;
