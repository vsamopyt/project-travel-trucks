import css from './CamperPageDetailsVehicle.module.css';

const CamperPageDetailsVehicle = ({ item, equipments }) => {
  const equipmentList = [];

  for (const key in item) {
    if (item[key] && equipments.includes(key)) {
      const value = item[key];

      if (Number.isNaN(parseFloat(value)) || value.includes('/')) {
        equipmentList.push({ name: key, value: value });
      } else {
        equipmentList.push({
          name: key,
          value: `${value.slice(0, -1)} ${value.slice(-1)}`,
        });
      }
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
