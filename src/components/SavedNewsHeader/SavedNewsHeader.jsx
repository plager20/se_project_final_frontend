import './SavedNewsHeader.css';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Navigation from '../Navigation/Navigation';

function SavedNewsHeader() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className='savedNewsHeader'>
      <Navigation className='navigation-black' />
      <div className='savedNewsHeader__text-container'>
        <p className='savedNewsHeader__saved'>Saved articles</p>
        <h2 className='savedNewsHeader__info'>
          {currentUser.name}, you have 5 saved articles
        </h2>
        <h3 className='savedNewsHeader__keywords'>
          By keywords: <span>Nature, Yellowstone, and 2 other</span>
        </h3>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
