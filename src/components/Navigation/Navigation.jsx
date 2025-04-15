import { Link, useLocation } from 'react-router';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

import './Navigation.css';
import logout from '../../assets/logout.svg';
import logoutBlack from '../../assets/logout-black.svg';

function Navigation({ handleSignInModal, handleLogOut }) {
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
      <div className='navigation__button-container'>
        <Link to='/'>
          <button className='navigation__home-button' id='/'>
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
            <button className='navigation__savednews'>Saved articles</button>
          </Link>
        )}
        {isLoggedIn && (
          <button className='navigation__signout' onClick={handleLogOut}>
            {currentUser.name}
            <img
              className='navigation__logout'
              src={isSavedNews ? logoutBlack : logout}
              alt='logout symbol'
            />
          </button>
        )}
      </div>
    </div>
  );
}
export default Navigation;
