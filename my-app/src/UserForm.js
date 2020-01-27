import React from "react";
import { Form, Field, withFormik, Formik, ErrorMessage } from "formik";
import { render } from "react-dom";

const validate = ({ name, email, password }) => {
  const errors = {};
  //name validation
  if (!name) {
    alert((errors.name = "A name must be entered!"));
  } else if (name.length < 3) {
    alert((errors.name = "Name must be at least 3 characers!"));
  } else if (name.includes(/^[A-Za-z]+$/)) {
    alert((errors.name = "Name must only contain letters!"));
  }
  //email validation
  if (!email) {
    errors.email = "An email is required!";
  } else if (!email.includes(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    errors.email = "You must enter a valid email!";
  }
};

function UserForm() {
  return (
    <Formik
      validate={validate}
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, tools) => {
        tools.resetForm();
      }}
      render={props => {
        console.log(props);
        return (
          <Form>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" classname="error" />
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" classname="error" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" classname="error" />
            <label>
              Accept Terms of Service
              <Field type="checkbox" name="Terms" />
            </label>
            <button type="submit">Submit!</button>
          </Form>
        );
      }}
    />
  );
}

export default UserForm;
