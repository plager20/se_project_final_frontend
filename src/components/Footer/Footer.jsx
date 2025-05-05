import './Footer.css';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__credits'>©2025 Supersite, Powered by News API</p>
      <div className='footer__links'>
        <div className='footer__link-group-1'>
          <Link to='/'>
            <button className='footer__home'>Home</button>
          </Link>
          <Link to='https://tripleten.com' target='_blank'>
            <button className='footer__tripleten'>TripleTen</button>
          </Link>
        </div>{' '}
        <div className='footer__link-group-2'>
          <Link to='https://github.com/plager20' target='_blank'>
            <button className='footer__git'></button>
          </Link>
          <Link
            to='https://www.linkedin.com/in/gerald-planty-681971293/'
            target='_blank'
          >
            <button className='footer__socialmedia'></button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
