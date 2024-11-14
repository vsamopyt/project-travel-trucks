import CampersPageFiltersElements from '../CampersPageFiltersElements/CampersPageFiltersElements';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { updFilters } from '../../redux/filters/slice';
import { resetCampers, resetPageFlag } from '../../redux/campers/slice';
import GeneralIcon from '../GeneralIcon/GeneralIcon';
import { FilterCheckboxes } from '../../constants/constants';
import { FilterRadioForm } from '../../constants/constants';
import css from './CampersPageFilters.module.css';

const CampersPageFilters = () => {
  const locationId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    const filter = {};
    for (const key in values) {
      if (values[key] === false || values[key] === '') {
        filter[key] = null;
      } else {
        filter[key] = values[key];
      }
    }

    dispatch(updFilters(filter));
    dispatch(resetCampers());
    dispatch(resetPageFlag());
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        location: '',
        AC: false,
        transmission: '',
        kitchen: false,
        TV: false,
        bathroom: false,
        water: false,
        gas: false,
        radio: false,
        refrigerator: false,
        microwave: false,
        form: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.filterLocationContainer}>
          <label className={css.filterLocationLabel} htmlFor={locationId}>
            Location
          </label>
          <Field
            className={css.filterLocationInput}
            type="text"
            name="location"
            id={locationId}
            placeholder="Ukraine, Kiev"
          />
          <GeneralIcon name={'Map'} className={css.filtersLocationIcon} />
        </div>

        <p className={css.filterTitle}>Filters</p>
        <p className={css.filterSubtitle}>Vehicle equipment</p>

        <CampersPageFiltersElements
          listCheckboxes={FilterCheckboxes}
          type={'checkbox'}
          classField={css.filtersField}
          classLabel={css.filtersLabels}
          classFieldSpecial={css.filtersCheckbox}
          classLabelSpecial={css.filtersCneckboxLabels}
          classHidden={'visuallyHidden'}
          classList={css.filtersContainer}
          classListSpecial={css.filtersCheckBoxes}
        />

        <p className={css.filterSubtitle}> Vehicle type</p>

        <CampersPageFiltersElements
          listCheckboxes={FilterRadioForm}
          type={'radio'}
          classField={css.filtersField}
          classLabel={css.filtersLabels}
          classTypeField={css.filtersCheckbox}
          classLabelType={css.filtersCneckboxLabels}
          classHidden={'visuallyHidden'}
          classList={css.filtersContainer}
          classListSpecial={css.filtersRadioContainer}
        />

        <button className={css.filtersButtonSearch} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};
export default CampersPageFilters;
