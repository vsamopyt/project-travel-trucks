// import {useParams} from "react-router-dom"
import { useOutletContext } from "react-router-dom";
import css from "./CamperPageReviews.module.css"
const CamperPageReviews =()=>{
    // const { id } = useParams();
    const {reviews}  = useOutletContext();
    console.log(reviews);
    
return (
    <>
   {reviews.map((item, index)=>{
    const {reviewer_name, reviewer_rating, comment} =item;
    return (<li key ={index}>
        <div className={css.camperPageReviewAvatarContainer}>

        <div className={css.camperPageReviewAwatar}>{reviewer_name[0].toUpperCase()}</div>
        <div className={css.camperPageReviewUserText}>
        <span className={css.camperPageReviewUserName}>{reviewer_name}</span>
        <span>{reviewer_rating}</span>
        </div>
        </div>
        <span className={css.camperPageReviewDesc}>{comment}</span>
    </li>)

   })}
    </>
)
};
export default CamperPageReviews;