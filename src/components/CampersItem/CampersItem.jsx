import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { FiHeart } from 'react-icons/fi';
import { deleteFavourites, addFavourites } from '../../redux/favourites/slice';
import CampersPrice from '../CampersPrice/CampersPrice';
import EquipmentList from '../EquipmentList/EquipmentList';
import CampersRating from '../CampersRating/CampersRating';
import { OptionList } from '../../constants/constants';
import css from './CampersItem.module.css';

const CampersItem = ({ item }) => {
  const { id, name, rating, reviews, location, description, price, gallery } =
    item;
  const dispatch = useDispatch();
  const { favourites } = useSelector(state => state.favourites);
  const isFavourites = favourites.some(item => item.id === id);
  const nameShort = name => {
    return name.length <= 30 ? name : `${name.slice(0, 26)}...`;
  };
  const handleFavourites = () => {
    const isFavourites = favourites.some(item => item.id === id);
    if (isFavourites) {
      dispatch(deleteFavourites(id));
    } else {
      dispatch(addFavourites(item));
    }
  };

  return (
    <div className={css.campersItemContainer}>
      <div className={css.itemContainerImage}>
      <img className={css.itemImg} src={gallery[0].original} alt={name} loading="lazy"  width={"256"} height={"144"}/>
      </div>
      <div className={css.itemContainerText}>
        <h2 className={css.campersItemTitle}>{nameShort(name)}</h2>

        <div className={css.campersItemIconRatingContainer}>
          <div className={css.campersItemRating}>
            <CampersRating
              rating={rating}
              reviews={reviews}
              location={location}
            />
          </div>
        </div>

        <div className={css.campersItemPrice}>
          <span>
            <CampersPrice price={price} />
          </span>

          <button className={css.campersPageButtonHeart}  type="button" aria-label ="favourites">
            <FiHeart
              className={clsx(
                css.campersPageIconHeart,
                isFavourites && css.campersPageIconHeartActive
              )}
              onClick={handleFavourites}
            />
          </button>
        </div>

        <p className={css.campersItemDescription}>{description}</p>
        <ul className={css.campersItemEquipmentsList}>
          <EquipmentList item={item} equipments={OptionList} />
        </ul>

        <Link className={css.campersItemButton} to={`/catalog/${id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
};
export default CampersItem;
