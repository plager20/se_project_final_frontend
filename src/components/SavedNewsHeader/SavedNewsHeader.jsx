import './SavedNewsHeader.css';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Navigation from '../Navigation/Navigation';

function SavedNewsHeader({
  handleLogOut,
  savedArticles,
  handleNavMenuModal,
  activeModal,
}) {
  const { currentUser } = useContext(UserContext);

  const savedArticleKeywords = [
    ...new Set(Object.values(savedArticles).map((article) => article.keyword)),
  ];

  const capitalizedSavedArticleKeywords = savedArticleKeywords.map(
    (savedArticleKeyword) => {
      return (
        savedArticleKeyword.charAt(0).toUpperCase() +
        savedArticleKeyword.slice(1)
      );
    }
  );

  const displayedKeywords = capitalizedSavedArticleKeywords.slice(0, 3);

  const remainingKeywords =
    savedArticleKeywords.length - displayedKeywords.length;

  return (
    <div className='savedNewsHeader'>
      <Navigation
        handleLogOut={handleLogOut}
        handleNavMenuModal={handleNavMenuModal}
        activeModal={activeModal}
        className='navigation-black'
      />
      <div className='savedNewsHeader__text-container'>
        <p className='savedNewsHeader__saved'>Saved articles</p>
        <h2 className='savedNewsHeader__info'>
          {currentUser
            ? `${currentUser.name}, you have ${savedArticles.length} saved articles`
            : 'Loading...'}
        </h2>
        <h3 className='savedNewsHeader__keywords'>
          By keywords:{' '}
          <span className='savedNewsHeader__keywords-bold'>
            {displayedKeywords.join(', ')}
            {remainingKeywords > 0
              ? ` and ${remainingKeywords} other${
                  remainingKeywords > 1 ? 's' : ''
                }`
              : ''}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
