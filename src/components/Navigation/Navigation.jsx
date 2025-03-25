import './Navigation.css';
import logo_white from '../../assets/logo_white.svg';

function Navigation({ handleSignInModal }) {
  return (
    <div className='navigation'>
      <img src={logo_white} alt='' className='navigation__logo' />
      <div className='navigation__button-container'>
        <button className='navigation__home-button' id='/'>
          Home
        </button>
        <button
          className='navigation__signin-button'
          onClick={handleSignInModal}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
export default Navigation;
