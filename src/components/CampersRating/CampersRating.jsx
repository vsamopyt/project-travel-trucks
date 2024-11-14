import css from "./CampersRating.module.css";
import BasicIcons from "../BasicIcons/BasicIcons";
const CampersRating =({rating, reviews, location}) =>{
const ratingString =`${rating}(${reviews.length} Rewievs)`
return (
    <div className={css.campersRatingContainer}>
        <div className={css.campersRatingContainerIcon}>
        <BasicIcons name={"star-pressed"}/>
          {/* <GeneralIcon 
          name ={"star-pressed"}
          className={css.campersRatingContainerIcon}
          /> */}
    <span className={css.campersRating} >{ratingString}</span>
        </div>
    <span className={css.campersLocation} > <BasicIcons name={"Map"} classNameSize={css.campersRatingLocationIcon}/>{location}</span>
    {/* <GeneralIcon name={'Map'} className={css.filtersLocationIcon} /> */}
    </div>
)
};
export default CampersRating;