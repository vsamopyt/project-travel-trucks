import { useSelector, useDispatch } from 'react-redux';
import { useParams, Outlet, Link} from 'react-router-dom';
import { fetchCamperById } from '../../redux/campers/operation';
import CamperPageDetails from '../../components/CamperPageDetails/CamperPageDetails';
import CamperPageForm from '../../components/CamperPageForm/CamperPageForm';
import css from './CamperPage.module.css';
import { useEffect } from 'react';

const CamperPage = () => {
  const { id } = useParams();

  console.log(id);
  const item = useSelector(state=>state.campers.item);
  const isLoading = useSelector(state => state.campers.isLoading);
  // const item = useSelector(state=>state.campers.item);
 
  // console.log(item);
  
  
  const dispatch = useDispatch();

  // let item = useSelector(state =>
  //   state.campers.items.find(item => item.id === id)
  // );

  useEffect(() => {

    // if (!item || item.id !== id) {
    //   dispatch(fetchCamperById(id));
    // }

    if (!item || item.id !== id) {
      dispatch(fetchCamperById(id));
    }

 
  //  dispatch(fetchCamperById(id)); 
   
  }, [dispatch, id, item]);

  // Показываем статус загрузки, пока данные не загрузились
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Если элемент отсутствует, показываем сообщение об ошибке
  if (!item || item.id !== id) {
    return <div>Error: Camper not found</div>;
  }
  return (
    <>
      <section className={css.camperPageSection}>
        <CamperPageDetails item={item} />
       
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
