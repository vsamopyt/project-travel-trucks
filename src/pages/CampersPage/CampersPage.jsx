import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { fetchCampers } from '../../redux/campers/operation';
import CampersPageFilters from '../../components/CampersPageFilters/CampersPageFilters';
import { addPage } from '../../redux/filters/slice';
import { setPageFlag } from '../../redux/campers/slice';
import CampersList from '../../components/CampersList/CampersList';
import toast, { Toaster } from 'react-hot-toast';
import css from './CampersPage.module.css';

const CampersPage = () => {
  let { items, isLoading, error, count } = useSelector(state => state.campers);
  let { filter, limit, page } = useSelector(state => state.filters);

  const dispatch = useDispatch();

  const pages = Math.ceil(count / limit);

  const handlePage = () => {
    if (page < pages) {
      page += 1;
    }
   
    dispatch(addPage(page));
    dispatch(setPageFlag(page));
  };

  // useEffect(() => {
  //   dispatch(fetchCampers({ ...filter, limit, page }));
  //   if (pages === page ) {
  //       toast.success('There are no more campers avaliable with such options');
  //     }
  // }, [dispatch, filter, limit, page, pages]);

  useEffect(() => {
    dispatch(fetchCampers({ ...filter, limit, page }));
   
  }, [dispatch, filter, limit, page]);

  useEffect(() => {
    if (pages === page) {
      toast.success('There are all avaliable campers for this request');
    }
  }, [pages, page]);

  useEffect(() => {
    if (error) {
      toast.success('There are no campers avaliable with such options')} 
  }, [error]);

  useEffect(() => {
    if (items.length > 0 && items[0]?.gallery?.[0]?.original) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = items[0].gallery[0].original;
  
      // Добавляем элемент <link> в <head>
      document.head.appendChild(link);
  
      // Удаляем элемент после размонтирования компонента
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [items]);


// if (error) {
//    toast.success('There are no campers avaliable with such options')} 

  return (
    <>
      <section className={css.campersPageSection}>
        <div className={`container ${css.campersPageContainer}`}>
          <div className={css.campersPageCatalog}>
            <h1 className={'visuallyHidden'}>Our campers</h1>
            {isLoading && (
              <div className="barloader">
                <BarLoader />
              </div>
            )}
            {error && <b>{error} </b>}
            {/* {error && <b>avaliable</b>} */}
            { !isLoading && !error &&<CampersList items={items} />}
            {!isLoading && items.length === 0 && <p>No campers found.</p>}
            {pages > page ? (
              <button
                className={css.campersPageButton}
                type="button"
                onClick={handlePage}
              >
                Load More
              </button>
            ) : (
              <>{null}</>
            )}
         
          </div>

          <aside className={css.campersPageAside}>
            <CampersPageFilters />
          </aside>
        </div>
      </section>
      <Toaster/>
    </>
  );
};
export default CampersPage;
