import './Header.css';
import logo_white from '../../assets/logo_white.svg';

function Header() {
  return (
    <header className='header'>
      <img src={logo_white} alt='' className='header__logo' />
      <div className='header__button-container'>
        <button className='header__home-button' id='home'>
          Home
        </button>
        <button className='header__signin-button'>Sign In</button>
      </div>
    </header>
  );
}

export default Header;
