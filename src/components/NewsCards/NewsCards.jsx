import './NewsCards.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCards({ handleSaveArticle, newsArticles, visibleArticles }) {
  console.log(newsArticles);
  return (
    <section className='newscards'>
      <h2 className='newscards__title'>Search Results</h2>
      <ul className='newscards__list'>
        {newsArticles.slice(0, visibleArticles).map((article, index) => (
          <NewsCard
            key={index}
            handleSaveArticle={handleSaveArticle}
            {...article}
          />
        ))}
      </ul>
      <div className='newscard__button-container'>
        <button className='newscards__show-more'>Show more</button>
      </div>
    </section>
  );
}

export default NewsCards;
