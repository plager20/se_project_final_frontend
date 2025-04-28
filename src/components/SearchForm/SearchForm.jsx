import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ handleSearch }) {
  const [data, setData] = useState({
    keyword: '',
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    let keyword = data.keyword;

    if (!keyword) {
      return;
    }

    handleSearch(keyword);
    data.keyword = '';
    console.log(handleSearch());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className='searchform'>
      <div className='searchform__input-container'>
        <input
          type='text'
          className='searchform_input'
          name='keyword'
          placeholder='Enter topic'
          minLength='1'
          value={data.keyword}
          onChange={handleChange}
          required
        />
        <button
          className='searchfrom__submit-button'
          type='submit'
          onClick={handleSearchSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
