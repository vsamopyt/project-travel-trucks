// import {link} from "react"
import { Link } from 'react-router-dom';
// import '../../index.css';
import  css from "./HomePage.module.css"
const HomePage = () => {
  return (
    <>
      <section className={css.homePageSection}>
        <div className= {`container ${css.homePageContainer}`}>
          <h1 className={css.homePageHeadline}>Campers of your dreams</h1>
          <p className={css.homePageText}>You can find everything you want in our catalog</p>
       <Link className={css.homePageButton} to="/catalog">View Now</Link>
        </div>
      </section>
    </>
  );
};
export default HomePage;
