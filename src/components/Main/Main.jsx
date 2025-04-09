import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Header from '../Header/Header';

function Main({ handleSignInModal, handleLogOut }) {
  return (
    <main>
      <Header
        handleSignInModal={handleSignInModal}
        handleLogOut={handleLogOut}
      />
      <section className='newscards'>
        <p className='newscards__text'>Search Results</p>
        <NewsCardList />
        <div className='newscard__button-container'>
          <button className='newscards__show-more'>Show more</button>
        </div>
      </section>
      <About />
    </main>
  );
}

export default Main;
