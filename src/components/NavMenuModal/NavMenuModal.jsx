import { Link } from 'react-router';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

import './NavMenuModal.css';
import logout from '../../assets/logout.svg';

function NavMenuModal({
  activeModal,
  closeActiveModal,
  handleSignInModal,
  handleLogOut,
}) {
  const { currentUser, isLoggedIn } = useContext(UserContext);

  return (
    <div
      className={`navmenumodal ${
        activeModal === 'navmenu' ? 'navmenumodal_opened' : ''
      }`}
    >
      <div className='navmenumodal__content'>
        <div className='navmenumodal__header'>
          <Link to='/' onClick={closeActiveModal}>
            <p className='navmenumodal__icon'>NewsExplorer</p>
          </Link>
          <button
            className='navmenumodal__close-btn'
            onClick={closeActiveModal}
          ></button>
        </div>
        <div className='navemenumodal__routes'>
          <Link to='/' onClick={closeActiveModal}>
            <p className='navmenumodal__home'>Home</p>
          </Link>
          {isLoggedIn && (
            <Link to='/saved-news' onClick={closeActiveModal}>
              <p className='navmenumodal__savednews'>Saved Articles</p>
            </Link>
          )}
        </div>
        <div className='navmenumodal__signin-signout-btn-container'>
          {!isLoggedIn && (
            <button
              className='navmenumodal__signin'
              onClick={handleSignInModal}
            >
              Sign in
            </button>
          )}
          {isLoggedIn && (
            <button className='navmenumodal__logout' onClick={handleLogOut}>
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
