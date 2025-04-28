import './SavedNews.css';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ savedArticles, handleLogOut }) {
  const { currentUser, isLoggedIn } = useContext(UserContext);
  console.log('savedArticles:', savedArticles);
  return (
    <div className='savedNews'>
      <SavedNewsHeader handleLogOut={handleLogOut} />
      <ul className='saved-news'>
        {savedArticles.map((article) => (
          <NewsCard key={article._id} {...article} />
        ))}
      </ul>
    </div>
  );
}

export default SavedNews;
