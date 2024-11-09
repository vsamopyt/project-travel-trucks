import css from './EquipmentList.module.css';
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
            {item.value === true ? item.name : item.value}
          </li>
        );
      })}
    </>
  );
};
export default EquipmentList;
