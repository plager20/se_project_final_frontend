import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

function App() {
  return (
    <div className='app'>
      <div className='app_content'>
        <Header></Header>
        <SearchForm></SearchForm>
      </div>
    </div>
  );
}

export default App;
