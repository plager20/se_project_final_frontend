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

  const [marked, setIsMarked] = useState(false);

  const handleSave = () => {
    if (!isLoggedIn) return;

    const updateMarked = !marked;

    setIsMarked(updateMarked);

    const updatedArticle = {
      _id,
      isSaved: updateMarked,
      title,
      urlToImage,
      keyword,
      content,
      publishedAt,
      author,
    };

    handleSaveArticle({ _id, isSaved: updateMarked, article: updatedArticle });
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
            marked ? 'newscard__save-button_marked' : ''
          }`}
          onClick={handleSave}
        >
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
