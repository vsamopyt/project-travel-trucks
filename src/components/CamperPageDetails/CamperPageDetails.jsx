import CampersRating from '../CampersRating/CampersRating';
import CampersPrice from '../CampersPrice/CampersPrice';
import css from './CamperPageDetails.module.css';

const CamperPageDetails = ({ item }) => {
  const { name, rating, reviews, location, gallery, description, price } = item;
  return (
    <div className="container">
      <h1 className={css.campersPageDetailsHeadline}>{name}</h1>
      <div className={css.campersPageDetailsRating}>
        <CampersRating rating={rating} reviews={reviews} location={location} />
      </div>
      <div className={css.campersPageDetailsPrice}>
        <CampersPrice price={price} />
      </div>
      <ul className={css.campersPageDetailsList}>
        {gallery.map((item, index) => {
          return (
            <li className={css.itemContainerImage} key={index}>
              <img className={css.itemImg} src={item.thumb} alt="" />
            </li>
          );
        })}
      </ul>
      <p className={css.campersPageDetailDescription}>{description}</p>
    </div>
  );
};

export default CamperPageDetails;
