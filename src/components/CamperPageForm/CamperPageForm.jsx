import { Formik, Form, Field } from 'formik';
import css from './CamperPageForm.module.css';
import clsx from "clsx";

const CamperPageForm = () => {
  return (

    <>
    
    <p className={css.camperPageFormHeadline}>Book your campervan now</p>
    <p className={css.camperPageFormText}>Stay connected! We are always ready to help you.</p>
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        {/* <div className={css.camperPageFormContainer}> */}
          <Field
            className={css.camperPageFormField}
            name="name"
            type="text"
            placeholder="Name"
          />
          <Field
            className={css.camperPageFormField}
            name="email"
            type="email"
            placeholder="Email"
          />
          <Field
            className={css.camperPageFormField}
            name="bookinDate"
            type="text"
            placeholder="Booking date"
          />
          <Field
            className={clsx(css.camperPageFormField, css.camperPageFormTextArea)}
            as="textarea"
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Comment"
          />
        {/* </div> */}

        <button className={css.camperPageFormButton} type="submit">Send</button>
      </Form>
    </Formik>
    </>
  );
};
export default CamperPageForm;
