import { useEffect,} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operation';
import CampersPageFilters from '../../components/CampersPageFilters/CampersPageFilters';
import { addPage } from '../../redux/filters/slice';
import {setPageFlag } from '../../redux/campers/slice';

import CampersList from '../../components/CampersList/CampersList';

import css from './CampersPage.module.css';

// const reqParams = {
//   // location: "Ukraine, Dnipro",
//   location: '',
//   AC: true,
//   transmission: null,
//   kitchen: true,
//   bathroom: true,
//   // TV:true,
//   form: 'alcove',
//   limit: 4,
//   page: 1,
// };

const CampersPage = () => {
  let { items, isLoading, error, count } = useSelector(state => state.campers);
  let { filter, limit, page } = useSelector(state => state.filters);

  const dispatch = useDispatch();

  const pages = Math.ceil(count / limit);

  const handlePage = () => {
    if (page < pages) {
      page += 1;
    }
    console.log(page);

    dispatch(addPage(page));
    dispatch(setPageFlag(page));
  };



  useEffect(() => {
    dispatch(fetchCampers({ ...filter, limit, page }));
  }, [dispatch, filter, limit, page]);

  return (
    <>
      <section className={css.campersPageSection}>
        <div className={`container ${css.campersPageContainer}`}>
          <div className={css.campersPageCatalog}>
            <h1 className={css.visuallyHidden}>Our campers</h1>
            {isLoading && <b>Loading tasks...</b>}
            {error && <b>{error}</b>}
            {!error && <CampersList items={items} />}

            {pages > page ? (
              <button
                className={css.campersPageButton}
                type="button"
                onClick={handlePage}
              >
                Load More
              </button>
            ) : (
              <></>
            )}
          </div>

          <aside className={css.campersPageAside}>
            <CampersPageFilters />
          </aside>
        </div>
      </section>
    </>
  );
};
export default CampersPage;
