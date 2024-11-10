import css from './EquipmentList.module.css';
import GeneralIcon from "../GeneralIcon/GeneralIcon"
const EquipmentList = ({ item, equipments }) => {
  const equipmentList = [];
  for (const key in item) {
    if (item[key] && equipments.includes(key)) {
      equipmentList.push({ name: key, value: item[key] });
    }
  }

  return (
    <>
      {equipmentList.map((item, index) => {
        return (
          <li className={css.equipmentsItem} key={index}>
            
            <GeneralIcon 
          name ={item.name}
          className={css.equipmentIcon}
          />
            {item.value === true ? item.name : item.value}
          </li>
        );
      })}
    </>
  );
};
export default EquipmentList;
