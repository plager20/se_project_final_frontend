import { useContext } from 'react';
import { useLocation } from 'react-router';
import UserContext from '../../context/UserContext';

import './NewsCard.css';

function NewsCard(article, handleSaveArticle) {
  const { isLoggedIn } = useContext(UserContext);
  const isSavedNews = location.pathname === '/saved-news';
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

  const handleSave = (e) => {
    e.preventDefault();
    handleSaveArticle();
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
        <button className='newscard__save-button' onClick={handleSave}>
          {!isLoggedIn && (
            <p className='newscard__signin-to-save'>Sign in to save articles</p>
          )}
        </button>
      )}
      {isSavedNews && (
        <button className='newscard__remove-button'>
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
