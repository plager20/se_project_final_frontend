import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='app'>
      <div className='app_content'>
        <div className='app__background-wrapper'>
          <Header></Header>
          <SearchForm></SearchForm>
        </div>
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
