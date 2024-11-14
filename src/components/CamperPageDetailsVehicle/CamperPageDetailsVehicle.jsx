import css from './CamperPageDetailsVehicle.module.css';

const CamperPageDetailsVehicle = ({ item, equipments }) => {
  const equipmentList = [];
  for (const key in item) {
    if (item[key] && equipments.includes(key)) {
      equipmentList.push({ name: key, value: item[key] });
    }
  }

  return (
    <>
      <ul className={css.camperPageDetailsVehicleList}>
        {equipmentList.map((item, index) => {
          return (
            <li className={css.camperPageDetailsVehicleItem} key={index}>
              <span>{item.name}</span>
              <span>{item.value}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default CamperPageDetailsVehicle;
