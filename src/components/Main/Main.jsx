import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main() {
  return (
    <main>
      <section className='newscards'>
        <p className='newscards__text'>Search Results</p>
        <NewsCardList />
        <div className='newscard__button-container'>
          <button className='newscards__show-more'>Show more</button>
        </div>
      </section>
    </main>
  );
}

export default Main;
