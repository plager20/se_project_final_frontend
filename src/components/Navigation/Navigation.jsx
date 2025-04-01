import { useLocation } from 'react-router';

import './Navigation.css';

function Navigation({ handleSignInModal, isLoggedin }) {
  const location = useLocation();
  const isSavedNews = location.pathname === '/saved-news';

  return (
    <div
      className={`navigation ${isSavedNews ? 'navigation__saved-news' : ''}`}
    >
      <a href='/'>
        <p className='navigation__logo'>NewsExplorer</p>
      </a>
      <div className='navigation__button-container'>
        <a href='/'>
          <button className='navigation__home-button' id='/'>
            Home
          </button>
        </a>
        {!isLoggedin && (
          <button
            className='navigation__signin-button'
            onClick={handleSignInModal}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
export default Navigation;
