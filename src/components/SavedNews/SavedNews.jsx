import './SavedNews.css';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ savedArticles, handleLogOut, handleSaveArticle }) {
  const { currentUser, isLoggedIn } = useContext(UserContext);
  return (
    <div className='savedNews'>
      <SavedNewsHeader
        handleLogOut={handleLogOut}
        savedArticles={savedArticles}
      />
      <ul className='saved-news'>
        {savedArticles.map((article) => (
          <NewsCard
            handleSaveArticle={handleSaveArticle}
            key={article._id}
            {...article}
          />
        ))}
      </ul>
    </div>
  );
}

export default SavedNews;
