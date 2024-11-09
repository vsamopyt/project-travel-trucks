import css from "./CampersPrice.module.css";
const CampersPrice =({price})=>{
    // const formattedPrice = price.toLocaleString("en-US", {
    //     style: "currency",
    //     currency: "EUR",
    //     minimumFractionDigits: 2
    //   });
    const formattedPrice =`€${price}.00`
      return (
        <>
        <span className={css.campersPrice}>{formattedPrice}</span>
        </>
      )
};
export default CampersPrice;