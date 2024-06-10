import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsOps";
const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long")
    .required("Required!"),
});

const ContactForm = () => {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    values.id = nanoid(4);
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label htmlFor={`${id}-name`}>Name</label>
        <Field
          className={css.form_input}
          type="text"
          name="name"
          id={`${id}-name`}
        />
        <ErrorMessage
          className={css.form_message_error}
          name="name"
          component="span"
        />
        <label htmlFor={`${id}-number`}>Number</label>
        <Field
          className={css.form_input}
          type="text"
          name="number"
          id={`${id}-number`}
        />
        <ErrorMessage
          className={css.form_message_error}
          name="number"
          component="span"
        />
        <button className={css.form_button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
