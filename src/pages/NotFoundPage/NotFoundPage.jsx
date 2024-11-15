import {Link} from 'react-router-dom';
import clsx from "clsx";
import css from "./NotFoundPage.module.css"
const NotFoundPage = () => {
  return (
  
      <section className="section">
        <div className={clsx("container", css.notFoundPageContainer)}>
        <span className={css.notFoundPageError}>404</span>
        <h1 className={css.pageNotFoundHeadline}>page not found</h1>
        <div className={css.notFoundPageTextContainer}>
        <p>take me back to</p>
        <Link className={ css.notFoundPageLink}to ="/">Home</Link>
        </div>
        </div>

     
      </section>
 
  );
};
export default NotFoundPage;
