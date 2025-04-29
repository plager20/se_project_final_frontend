import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useLocation } from 'react-router';

import './NewsCard.css';

function NewsCard({ handleSaveArticle, ...article }) {
  const { isLoggedIn } = useContext(UserContext);
  const location = useLocation().pathname;
  const isSavedNews = location === '/saved-news';
  const {
    _id,
    isSaved,
    title,
    urlToImage,
    keyword,
    content,
    publishedAt,
    author,
  } = article;

  const [saved, setisSaved] = useState(false);

  const handleToggleSave = () => {
    if (!isLoggedIn) return;

    const updateSaved = !saved;
    setisSaved(updateSaved);

    const updatedArticle = {
      _id,
      isSaved: updateSaved,
      title,
      urlToImage,
      keyword,
      content,
      publishedAt,
      author,
    };

    if (isSavedNews || saved) {
      handleSaveArticle({ _id, isSaved: false, article: updatedArticle });
    } else {
      handleSaveArticle({ _id, isSaved: updateSaved, article: updatedArticle });
    }
  };

  return (
    <li className='newscard'>
      <img
        src={urlToImage}
        alt='News article image'
        className='newscard__image'
      />
      {isSavedNews && <p className='newscard__keyword'>{keyword}</p>}
      {!isSavedNews && (
        <button
          className={`newscard__save-button ${
            saved ? 'newscard__save-button_marked' : ''
          }`}
          onClick={handleToggleSave}
        >
          {!isLoggedIn && (
            <p className='newscard__signin-to-save'>Sign in to save articles</p>
          )}
        </button>
      )}
      {isSavedNews && (
        <button className='newscard__remove-button' onClick={handleToggleSave}>
          <p className='newscard__remove-banner'>Remove from saved</p>
        </button>
      )}
      <div className='newscard__content'>
        <p className='newscard__published-date'>{publishedAt}</p>
        <h2 className='newscard__title'>{title}</h2>
        <p className='newscard__description'>{content}</p>
        <p className='newscard__publisher'>{author}</p>
      </div>
    </li>
  );
}

export default NewsCard;
