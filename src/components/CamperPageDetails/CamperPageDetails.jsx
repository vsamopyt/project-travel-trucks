import CampersRating from '../CampersRating/CampersRating';
import css from "./CamperPageDetails.module.css"

const CamperPageDetails = ({ item }) => {
  const { name, rating, reviews, location, gallery, description, } = item;

  return (
  

    <div className='container'>
      <h1>{name}</h1>
      <CampersRating rating={rating} reviews={reviews} location={location} />
      <ul className={css.campersPageDetailsList}>
        {gallery.map((item, index) => {
          return (
            <li className={css.itemContainerImage} key={index}>
              <img className={css.itemImg} src={item.thumb} alt="" />
            </li>
          );
        })}
       
      </ul>
      <p>{description}</p>
    </div>
  
  );
};

export default CamperPageDetails;
