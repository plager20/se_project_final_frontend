import './Preloader.css';

function Preloader({ isLoading }) {
  return (
    <div className='preloader'>
      <div
        className={
          isLoading
            ? 'circle-preloader'
            : 'circle-preloader circle-preloader_stop'
        }
      ></div>
      {!isLoading && (
        <div className='preloader__nothing-found'>Nothing Found</div>
      )}
      <h2
        className={
          isLoading
            ? 'preloader__text'
            : 'preloader__text preloader__text-nothing-found'
        }
      >
        {isLoading ? (
          'Searching for news...'
        ) : (
          <>
            Sorry but nothing matched
            <span className='preloader__text-second-line'>
              your search terms
            </span>
          </>
        )}
      </h2>
    </div>
  );
}

export default Preloader;
