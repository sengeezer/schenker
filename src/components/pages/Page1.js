import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

const required = value => (value ? undefined : 'Required');

const Page1 = () => (
  <Fragment>
    <div>
      <label>First Name</label>
      <Field
        name="firstName"
        component="input"
        type="text"
        placeholder="First Name"
        validate={required}
      />
      <ErrorMessage name="firstName" component="div" className="field-error" />
    </div>
    <div>
      <label>Last Name</label>
      <Field
        name="lastName"
        component="input"
        type="text"
        placeholder="Last Name"
        validate={required}
      />
      <ErrorMessage name="lastName" component="div" className="field-error" />
    </div>
    <Link to="/step2">
      <button type="button">Next »</button>
    </Link>
  </Fragment>
);

export default Page1;