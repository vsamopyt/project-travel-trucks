import { useOutletContext } from 'react-router-dom';
import EquipmentList from '../EquipmentList/EquipmentList';
import CamperPageDetailsVehicle from '../CamperPageDetailsVehicle/CamperPageDetailsVehicle';
import { OptionList, DetailsList } from '../../constants/constants';
import css from './CamperPageFeatures.module.css';

const CamperPageFeatures = () => {
  const item = useOutletContext();
console.log(DetailsList);

  return (
    <div className={css.camperPageFeaturesContainer}>
      <div className={css.camperPageFeaturesListContainer}>
        <ul className={css.camperPageFeaturesList}>
          <EquipmentList item={item} equipments={OptionList} />
        </ul>
      </div>
      <div className={css.camperPageVehicleContainer}>
        <p className={css.camperPageVehicleTitle}>Vehicle details</p>
        <CamperPageDetailsVehicle item={item} equipments={DetailsList} />
      </div>
    </div>
  );
};

export default CamperPageFeatures;
