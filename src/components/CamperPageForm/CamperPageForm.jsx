import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import toast, { Toaster } from 'react-hot-toast';
import CamperPageFormCalendar from '../CamperPageFormCalendar/CamperPageFormCalendar';
import css from './CamperPageForm.module.css';

const CamperPageForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please fill in your name!'),
    email: Yup.string()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Should be like  test@gmail.com'
      )
      .required('Please fill in your email!'),
    bookingDate: Yup.date().required('Please fill in the date!'),
    comment: Yup.string().max(60, 'Too Long!'),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);

    toast.success('We got your request. Thanks a lot for choice');
    actions.resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const bookingDateFieldId = useId();
  const commentlFieldId = useId();

  return (
    <section className={css.camperPageFormSection}>
      <p className={css.camperPageFormHeadline}>Book your campervan now</p>
      <p className={css.camperPageFormText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        camperPageFormSection
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor={nameFieldId}></label>
          <Field
            className={css.camperPageFormField}
            name="name"
            type="text"
            placeholder="Name*"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />

          <label htmlFor={emailFieldId}></label>
          <Field
            className={css.camperPageFormField}
            name="email"
            type="text"
            placeholder="Email*"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />

          <label htmlFor={bookingDateFieldId}></label>
          {/* <Field
            className={css.camperPageFormField}
            name="bookingDate"
            type="date"
            placeholder="Booking date*"
            id={bookingDateFieldId}
          /> */}
          <Field
            name="bookingDate"
            className={css.camperPageFormField}
            placeholderText="Booking date*"
            id={bookingDateFieldId}
            component={CamperPageFormCalendar}
          />
          <ErrorMessage
            className={css.error}
            name="bookingDate"
            component="span"
          />

          <label htmlFor={commentlFieldId}></label>
          <Field
            className={clsx(
              css.camperPageFormField,
              css.camperPageFormTextArea
            )}
            as="textarea"
            name="comment"
            id={commentlFieldId}
            cols="30"
            rows="10"
            placeholder="Comment"
            resize="none"
          />
          <ErrorMessage className={css.error} name="comment" component="span" />
          <button className={css.camperPageFormButton} type="submit">
            Send
          </button>
        </Form>
      </Formik>
      <Toaster />
    </section>
  );
};
export default CamperPageForm;
