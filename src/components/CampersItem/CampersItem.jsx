import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from "clsx";
import { FiHeart } from 'react-icons/fi';
import { deleteFavourites, addFavourites } from '../../redux/favourites/slice';
import CampersPrice from '../CampersPrice/CampersPrice';
import EquipmentList from '../EquipmentList/EquipmentList';
import CampersRating from '../CampersRating/CampersRating';
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
  const { id, name, rating, reviews, location, description, price, gallery } =
    item;
  const dispatch = useDispatch();
  const {favourites} = useSelector(state => state.favourites);
  const descriptionShort = description.slice(0, 61) + '...';
  const isFavourites = favourites.some(item=>item.id === id);
 
  
  
  const nameShort = name => {
    return name.length <= 30 ? name : `${name.slice(0, 26)}...`;
  };

  const handleFavourites = () => {
  const isFavourites = favourites.some(item=>item.id === id);
  if(isFavourites) {
    dispatch(deleteFavourites(id))
  } else {
    dispatch(addFavourites(item));
  }

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
            reviews={reviews}
            location={location}
          />
        </div>
      
        <p className={css.campersItemDescription}>{descriptionShort}</p>
        <ul className={css.campersItemEquipmentsList}>
          <EquipmentList item={item} equipments={optionList} />
        </ul>

        <Link className={css.campersItemButton} to={`/catalog/${id}`}>
          Show more
        </Link>
      
        <div className={css.campersItemPrice}>
          <span>
            <CampersPrice price={price} />
          </span>

          <button className={css.campersPageButtonHeart} type="button">
            <FiHeart
              className={clsx(css.campersPageIconHeart, isFavourites && css.campersPageIconHeartActive)}
              onClick={handleFavourites}
             
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CampersItem;
