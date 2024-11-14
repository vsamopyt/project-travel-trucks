import CampersItem from '../CampersItem/CampersItem';
import css from './CampersList.module.css';

const CampersList = ({ items }) => {
  return (
    <>
      <ul className={css.campersList}>
        {items.map(item => {
          return (
            <li className={css.campersListItem} key={item.id}>
              <CampersItem item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default CampersList;
