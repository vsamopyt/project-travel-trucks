import BasicIcons from '../BasicIcons/BasicIcons';
import css from './CampersRating.module.css';

const CampersRating = ({ rating, reviews, location }) => {
  const ratingString = `${rating}(${reviews.length} Rewievs)`;
  return (
    <div className={css.campersRatingContainer}>
      <div className={css.campersRatingContainerIcon}>
        <BasicIcons name={'star-pressed'} />

        <span className={css.campersRating}>{ratingString}</span>
      </div>
      <span className={css.campersLocation}>
        {' '}
        <BasicIcons
          name={'Map'}
          classNameSize={css.campersRatingLocationIcon}
        />
        {location}
      </span>
    </div>
  );
};
export default CampersRating;
