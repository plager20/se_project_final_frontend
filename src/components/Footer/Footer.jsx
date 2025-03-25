import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__credits'>©2025 Supersite, Powered by News API</p>
      <div className='footer__links'>
        <a href='/'>
          <button className='footer__home'>Home</button>
        </a>
        <a href='https://tripleten.com' target='_blank'>
          <button className='footer__tripleten'>TripleTen</button>
        </a>
        <a href='https://github.com/plager20' target='_blank'>
          <button className='footer__git'></button>
        </a>
        <a
          href='https://www.linkedin.com/in/gerald-planty-681971293/'
          target='_blank'
        >
          <button className='footer__socialmedia'></button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
