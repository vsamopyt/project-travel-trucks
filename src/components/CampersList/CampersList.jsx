
import CampersItem from '../CampersItem/CampersItem';
import css from './CampersList.module.css';

const CampersList = ({ items }) => {



  return (
    <>
      <ul className={css.campersList}>
        {items.map((item, index)=> {
          return (
            <li className={css.campersListItem} key={item.id}>
              {/* <CampersItem item={item} /> */}
              {index === 0?  <CampersItem item={item} /> : <CampersItem item={item} loading={"lazy"} /> }
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default CampersList;
