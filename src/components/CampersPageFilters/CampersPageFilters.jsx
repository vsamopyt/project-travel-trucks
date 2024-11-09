import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field} from 'formik';
import {updFilters} from "../../redux/filters/slice"
import {resetCampers, resetPageFlag } from "../../redux/campers/slice"
import clsx from 'clsx';

import css from './CampersPageFilters.module.css';
const CampersPageFilters = () => {
  const [locationId, tvId, kitchenId] = useId();
  const acId = useId();
  const transmissionId = useId();
  const bathroomId = useId();
  const vanId = useId();
  const alcoveId = useId();
  const fullyIntegratedId = useId();
  // const checked = true;

  const dispatch  =useDispatch()
  const handleSubmit =   (values) => {
    const filter = {}
    for (const key in values ){
      if (values[key] ===false || values[key]==="") {

        filter[key] = null; 
      }
      else {
        filter[key] = values[key];
      }

    }
  
    dispatch(updFilters(filter))
    dispatch(resetCampers())
    dispatch(resetPageFlag())

		// actions.resetForm();
	};

  return (
    <Formik initialValues={
      { 
        // location: "",
        // AC:null,
        // transmission: '',
        // kitchen: null,
        // TV:null,
        // bathroom: null,
        // form: null

        location: "",
        AC:false,
        transmission: "",
        kitchen: false,
        TV:false,
        bathroom: false,
        form: ""

       }} onSubmit={handleSubmit}>
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
        </div>

        <p className={css.filterTitle}>Filters</p>
        <p className={css.filterSubtitle}>Vehicle equipment</p>
        <div className={clsx(css.filtersContainer, css.filtersCheckBoxes)}>
          <Field
            className={clsx(css.filtersField, css.filtersCheckbox,"visuallyHidden")}
            type="checkbox"
            name="AC"
            id={acId}
          />
          <label
            className={clsx(css.filtersLabels, css.filtersCneckboxLabels)}
            htmlFor={acId}
          >
            AC
          </label>

          <Field
            className={clsx(css.filtersField, css.filtersCheckbox,"visuallyHidden")}
            type="checkbox"
            name="transmission"
            value="automatic"
            id={transmissionId}
          />
          <label
            className={clsx(css.filtersLabels, css.filtersCneckboxLabels)}
            htmlFor={transmissionId}
          >
            Automation
          </label>

          <Field
            className={clsx(css.filtersField, css.filtersCheckbox,"visuallyHidden")}
            type="checkbox"
            name="kitchen"
            id={kitchenId}
          />
          <label
            className={clsx(css.filtersLabels, css.filtersCneckboxLabels)}
            htmlFor={kitchenId}
          >
            Kitchen
          </label>

          <Field
            className={clsx(css.filtersField, css.filtersCheckbox,"visuallyHidden")}
            type="checkbox"
            name="TV"
            id={tvId}
          />
          <label
            className={clsx(css.filtersLabels, css.filtersCneckboxLabels)}
            htmlFor={tvId}
          >
            TV
          </label>

          <Field
            className={clsx(css.filtersField, css.filtersCheckbox,"visuallyHidden")}
            type="checkbox"
            name="bathroom"
            id={bathroomId}
          />
          <label
            className={clsx(css.filtersLabels, css.filtersCneckboxLabels)}
            htmlFor={bathroomId}
          >
            Bathroom
          </label>

        </div>

        <p className={css.filterSubtitle}> Vehicle type</p>

        <div className={clsx(css.filtersContainer,css.filtersRadioContainer)}>
          <Field
            className={clsx(css.filtersField, css.filtersRadioButton,"visuallyHidden")}
            type="radio"
            name="form"
            value="panelTruck"
            id={vanId}
          />
          <label
            className={clsx(css.filtersLabels, css.filtersRadioLabels)}
            htmlFor={vanId}
          >
            Van
          </label>

          <Field
            className={clsx(css.filtersField, css.filtersRadioButton,"visuallyHidden")}
            type="radio"
            name="form"
            value="alcove"
            id={alcoveId}
          />
          <label
            className={clsx(css.filtersLabels, css.filtersRadioLabels)}
            htmlFor={alcoveId}
          >
            Alcove
          </label>

         
          <Field
            className={clsx(css.filtersField, css.filtersRadioButton,"visuallyHidden")}
            type="radio"
            name="form"
            value="fullyIntegrated"
            id={fullyIntegratedId}
          />
           <label
            className={clsx(css.filtersLabels, css.filtersRadioLabels)}
            htmlFor={fullyIntegratedId}
          >
            Fully Integrated
          </label>
        </div>
        <button className={css.filtersButtonSearch} type="submit" >Search</button>
      </Form>
    </Formik>
  );
};
export default CampersPageFilters;
