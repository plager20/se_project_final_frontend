import './SavedNews.css';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews() {
  const { currentUser, isLoggedIn } = useContext(UserContext);

  return (
    <div className='savedNews'>
      <SavedNewsHeader />
    </div>
  );
}

export default SavedNews;
