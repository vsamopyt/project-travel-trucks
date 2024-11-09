import { useSelector, useDispatch } from 'react-redux';
import { useParams, Outlet, Link} from 'react-router-dom';
import { fetchCampers } from '../../redux/campers/operation';
import CamperPageDetails from '../../components/CamperPageDetails/CamperPageDetails';
import CamperPageForm from '../../components/CamperPageForm/CamperPageForm';
import css from './CamperPage.module.css';
import { useEffect } from 'react';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  let item = useSelector(state =>
    state.campers.items.find(item => item.id === id)
  );

  useEffect(() => {
    // Если `item` не найден, загружаем данные
    if (!item) {
      dispatch(fetchCampers()); // Загружаем данные, если их нет
    }
  }, [dispatch, item]);

  return (
    <>
      <section className={css.camperPageSection}>
        <CamperPageDetails item={item} />
        {/* <link></link> */}
      </section>
      <section className={css.campersPageSection}>
        <div className="container">
        <Link to="features">feature</Link>
          <Link to="reviews">reviews</Link>
          <div className={css.camperPageContainerAdds}>
            <div className={css.camperPageOutlet}>
            <Outlet context={item} />
            </div>
           <div className={css.camperPageForm}>
          <CamperPageForm/>
           </div>
 
          </div>
        </div>
      </section>
    </>
  );
};
export default CamperPage;
