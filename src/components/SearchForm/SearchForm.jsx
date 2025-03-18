import './SearchForm.css';

function SearchForm() {
  return (
    <div className='searchform'>
      <h1 className='searchform__header'>What's going on in the world?</h1>
      <p className='searchform__subtext'>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className='searchform__input-container'>
        <input
          type='text'
          placeholder='Enter topic'
          className='searchform_input'
        />
        <button className='searchfrom__submit-button' type='submit'>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
