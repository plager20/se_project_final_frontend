import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation';

function SavedNewsHeader(isLoggedIn) {
  return (
    <div className='savedNewsHeader'>
      <Navigation className='navigation-black' isLoggedIn={isLoggedIn} />
      <div className='savedNewsHeader__text-container'>
        <p className='savedNewsHeader__saved'>Saved articles</p>
        <h2 className='savedNewsHeader__info'>
          Elise, you have 5 saved articles
        </h2>
        <h3 className='savedNewsHeader__keywords'>
          By keywords: <span>Nature, Yellowstone, and 2 other</span>
        </h3>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
