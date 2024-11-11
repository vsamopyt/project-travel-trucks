import css from './EquipmentList.module.css';
import GeneralIcon from '../GeneralIcon/GeneralIcon';
import BasicIcons from '../BasicIcons/BasicIcons';
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
            <BasicIcons
              name={item.name}
              classNameSize={css.icon}
              clasNameStroke={css.iconStroke}
              clasNameFill={css.iconFill}
              classNameBoth={css.iconBoth}
            />
            {/* <GeneralIcon 
          name ={item.name}
          
          className={css.equipmentIcon}
          /> */}

            {item.value === true ? item.name : item.value}
          </li>
        );
      })}
    </>
  );
};
export default EquipmentList;
