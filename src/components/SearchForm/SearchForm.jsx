import './SearchForm.css';

function SearchForm() {
  return (
    <div className='searchform'>
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
