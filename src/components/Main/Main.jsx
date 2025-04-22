import './Main.css';
import NewsCards from '../NewsCards/NewsCards';
import About from '../About/About';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

function Main({
  handleSignInModal,
  handleLogOut,
  handleSearch,
  handleSaveArticle,
  newsArticles,
  visibleArticles,
}) {
  return (
    <main>
      <Header
        handleSignInModal={handleSignInModal}
        handleLogOut={handleLogOut}
        handleSearch={handleSearch}
      />
      <Preloader />

      <NewsCards
        handleSaveArticle={handleSaveArticle}
        newsArticles={newsArticles}
        visibleArticles={visibleArticles}
      />

      <About />
    </main>
  );
}

export default Main;
