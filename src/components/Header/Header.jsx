import './Header.css';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header({
  handleSignInModal,
  handleNavMenuModal,
  isLoggedIn,
  handleLogOut,
  handleSearch,
  activeModal,
}) {
  return (
    <header className='header'>
      <Navigation
        handleSignInModal={handleSignInModal}
        handleNavMenuModal={handleNavMenuModal}
        isLoggedin={isLoggedIn}
        handleLogOut={handleLogOut}
        activeModal={activeModal}
      />
      <div className='header__text'>
        <h1 className='header__title'>What's going on in the world?</h1>
        <p className='header__subtext'>
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm handleSearch={handleSearch} />
    </header>
  );
}

export default Header;
