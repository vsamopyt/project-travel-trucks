import css from "./CampersRating.module.css"
const CampersRating =({rating, reviews, location}) =>{
const ratingString =`${rating}(${reviews.length} Rewievs)`
return (
    <>
    <span className={css.campersRating} >{ratingString}</span>
    <span className={css.campersLocation} >{location}</span>
    </>
)
};
export default CampersRating;