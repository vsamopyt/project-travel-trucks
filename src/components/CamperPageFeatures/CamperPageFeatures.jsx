import { useOutletContext } from 'react-router-dom';
import { clsx } from 'clsx';
import EquipmentList from '../EquipmentList/EquipmentList';
import CamperPageDetailsVehicle from '../CamperPageDetailsVehicle/CamperPageDetailsVehicle';
import css from './CamperPageFeatures.module.css';
const optionLits = [
  'AC',
  'TV',
  'bathroom',
  'transmission',
  'engine',
  'kitchen',
  'radio',
  'refrigerator',
  'microwave',
  ' gas',
  ' water',
];
const detailsList = [
  'form',
  'width',
  'length',
  'height',
  'tank',
  'consumption',
];

const CamperPageFeatures = () => {
  const item = useOutletContext();

  return (
    <div className={css.camperPageFeaturesContainer}>
      <div className={css.camperPageFeaturesListContainer}>
        <ul className={css.camperPageFeaturesList}>
          <EquipmentList item={item} equipments={optionLits} />
        </ul>
      </div>
      <div className={css.camperPageVehicleContainer}>
        <p className={css.camperPageVehicleTitle}>Vehicle details</p>
        <CamperPageDetailsVehicle item={item} equipments={detailsList} />
      </div>
    </div>
  );
};

export default CamperPageFeatures;
