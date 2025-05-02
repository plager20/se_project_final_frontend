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
  handleCardRender,
  isLoading,
  hasSearched,
}) {
  return (
    <main>
      <Header
        handleSignInModal={handleSignInModal}
        handleLogOut={handleLogOut}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <Preloader isLoading={isLoading} />
      ) : newsArticles.length > 0 ? (
        <NewsCards
          handleSaveArticle={handleSaveArticle}
          newsArticles={newsArticles}
          visibleArticles={visibleArticles}
          handleCardRender={handleCardRender}
        />
      ) : hasSearched ? (
        <Preloader />
      ) : null}

      <About />
    </main>
  );
}

export default Main;
