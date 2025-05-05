import { Link } from 'react-router';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

import './NavMenuModal.css';
import logout from '../../assets/logout.svg';

function NavMenuModal(activeModal) {
  const { currentUser, isLoggedIn } = useContext(UserContext);

  return (
    <div
      className={`navmenumodal ${
        activeModal === 'navmenu' ? 'navmenumodal_opened' : ''
      }`}
    >
      <div className='navmenumodal__content'>
        <div className='navmenumodal__header'>
          <Link to='/'>
            <p className='navmenumodal__icon'>NewsExplorer</p>
          </Link>
          <button className='navmenumodal__close-btn'></button>
        </div>
        <div className='navemenumodal__routes'>
          <Link to='/'>
            <p className='navmenumodal__home'>Home</p>
          </Link>
          {isLoggedIn && (
            <Link to='/saved-news'>
              <p className='navmenumodal__savednews'>Saved Articles</p>
            </Link>
          )}
        </div>
        <div className='navmenumodal__signin-signout-btn-container'>
          {!isLoggedIn && (
            <button className='navmenumodal__signin'>Sign in</button>
          )}
          {isLoggedIn && (
            <button className='navmenumodal__logout'>
              {currentUser.name}
              <img
                src={logout}
                alt='logout icon'
                className='navmenumodal__logout-icon'
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavMenuModal;
