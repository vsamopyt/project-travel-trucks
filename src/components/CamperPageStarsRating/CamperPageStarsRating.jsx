import GeneralIcon from '../GeneralIcon/GeneralIcon';
import css from "./CamperPageStarsRating.module.css"
const CamperPageStarsRating = ({ rating, scale, filledIcon, emptyIcon }) => {
  const ratingArray = new Array(scale).fill('1').map((item, index) => {
    if (index + 1 <= rating) {
      item = filledIcon;
    } else {
      item = emptyIcon;
    }
    return item;
  });
  console.log(ratingArray);
  return (
    <>
      <ul className={css.camperPageStarsRatingList}>
        {ratingArray.map((item, index) => {
          return (
            <li key={index}>
              <GeneralIcon name={item} className={css.camperPageStarsRatingIcon} />
            </li>
          );
        })}
      </ul>
    
    </>
  );
};
export default CamperPageStarsRating;
