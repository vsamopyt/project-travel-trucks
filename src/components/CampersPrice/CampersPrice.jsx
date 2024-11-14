import css from './CampersPrice.module.css';
const CampersPrice = ({ price }) => {
  const formattedPrice = `€${price.toFixed(2)}`;
  return (
    <>
      <span className={css.campersPrice}>{formattedPrice}</span>
    </>
  );
};
export default CampersPrice;
