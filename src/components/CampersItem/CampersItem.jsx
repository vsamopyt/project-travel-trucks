import { Link } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import CampersPrice from "../CampersPrice/CampersPrice"
import EquipmentList from '../EquipmentList/EquipmentList';
import CampersRating from "../CampersRating/CampersRating"
import css from './CampersItem.module.css';

const optionList = [
  'AC',
  'TV',
  'bathroom',
  'transmission',
  'engine',
  'kitchen',
];

const CampersItem = ({ item }) => {

  const { id, name, rating, reviews, location, description, price, gallery } = item;
const descriptionShort = description.slice(0,61)+"..."
// const ratingString =`${rating}(${reviews.length} Rewievs)`
const nameShort = (name)=> {
  return name.length<=30? name:`${name.slice(0,26)}...`
};

  return (
    <div className={css.campersItemContainer}>
      <div className={css.itemContainerImage}>
        <img className={css.itemImg} src={gallery[0].original} alt={name} />
      </div>
      <div className={css.itemContainerText}>
        <h2 className={css.campersItemTitle}>{nameShort(name)}</h2>
        <div className={css.campersItemRating}>
          
        <CampersRating
        rating={rating}
        reviews ={reviews}
        location ={location}
        
        />
        </div>
        {/* <span className={css.campersItemRating}>a {ratingString}</span> */}
        {/* <span>({reviews.length}Rewievs)</span> */}
        {/* <span className={css.campersItemLocation}>{location}</span> */}
        {/* <p>{description}</p> */}
           <p className={css.campersItemDescription}>{descriptionShort}</p>
        <ul className={css.campersItemEquipmentsList}>
          <EquipmentList item={item} equipments={optionList} />
        </ul>

<Link className={css.campersItemButton} to={`/catalog/${id}`}>Show more</Link>
        {/* <div to={/catalog/:id}>Show more</div> */}
        <div className={css.campersItemPrice}>
          <span><CampersPrice
          price ={price}
          />
          </span>
      
          <button type="button"><FiHeart/> </button>
        </div>
      </div>
    </div>
  );
};
export default CampersItem;
