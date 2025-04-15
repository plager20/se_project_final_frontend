import './NewsCards.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCards() {
  return (
    <section className='newscards'>
      <h2 className='newscards__title'>Search Results</h2>
      <ul className='newscards__list'>
        <NewsCard />
      </ul>
      <div className='newscard__button-container'>
        <button className='newscards__show-more'>Show more</button>
      </div>
    </section>
  );
}

export default NewsCards;
