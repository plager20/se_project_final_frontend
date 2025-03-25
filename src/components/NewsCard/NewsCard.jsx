import './NewsCard.css';
import test from '../../assets/news-article-image.svg';

function NewsCard() {
  return (
    <li className='newscard'>
      <img src={test} alt='News article image' className='newscard__image' />
      <button className='newscard__save-button'></button>
      <div className='newscard__content'>
        <p className='newscard__published-date'>November 4, 2020</p>
        <h2 className='newscard__title'>
          Everyone Needs a Special 'Sit Spot' in Nature
        </h2>
        <p className='newscard__description'>
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className='newscard__publisher'>treehugger</p>
      </div>
    </li>
  );
}

export default NewsCard;
