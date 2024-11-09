import { useSelector, useDispatch } from 'react-redux';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import clsx from 'clsx';
import { fetchCamperById } from '../../redux/campers/operation';
import CamperPageDetails from '../../components/CamperPageDetails/CamperPageDetails';
import CamperPageForm from '../../components/CamperPageForm/CamperPageForm';
import css from './CamperPage.module.css';
import { useEffect } from 'react';

const CamperPage = () => {
  const { id } = useParams();
  const item = useSelector(state => state.campers.item);
  const isLoading = useSelector(state => state.campers.isLoading);
  const classLink = ({ isActive }) => {
    return clsx(css.camperPageLink, isActive && css.camperPageLinkActive);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (!item || item.id !== id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id, item]);

  // Показываем статус загрузки, пока данные не загрузились
  // if (isLoading) {
  //   return <div><BarLoader/></div>;
  // }

  // Если элемент отсутствует, показываем сообщение об ошибке
  if (!item || item.id !== id) {
    return <div>Error: Camper not found</div>;
  }
  return (
    <>
      {isLoading && (
        <div>
          <BarLoader />
        </div>
      )}

      <section className={css.camperPageSection}>
        <CamperPageDetails item={item} />
      </section>

      <div
        className={clsx(css.campersPageSection, css.campersPageSectionOutlet)}
      >
        <div className="container">
          <nav className={css.camperPageLinksContainer}>
            <NavLink className={classLink} end to="">
              Feature
            </NavLink>
            <NavLink className={classLink} to="reviews">
              Reviews
            </NavLink>
          </nav>
          <div className={css.camperPageContainerAdds}>
            <div className={css.camperPageOutlet}>
              <Outlet context={item} />
            </div>
            <div className={css.camperPageForm}>
              <CamperPageForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CamperPage;
