import './Main.css';
import NewsCards from '../NewsCards/NewsCards';
import About from '../About/About';
import Header from '../Header/Header';

function Main({ handleSignInModal, handleLogOut }) {
  return (
    <main>
      <Header
        handleSignInModal={handleSignInModal}
        handleLogOut={handleLogOut}
      />
      <NewsCards />
      <About />
    </main>
  );
}

export default Main;
