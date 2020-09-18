import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

const required = value => (value ? undefined : 'Required');

const Page1 = () => {
  let [isBlocking, setIsBlocking] = useState(false);
  
  return (
  <Fragment>
    <h2>Please enter your details</h2>
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
    <div>
      <label>Date of Birth</label>
      <Field
        name="dob"
        component="input"
        type="text"
        placeholder="DD/MM/YYYY"
        validate={required}
      />
      <ErrorMessage name="dob" component="div" className="field-error" />
    </div>
    <div>
      <label>Post Code</label>
      <Field
        name="postCode"
        component="input"
        type="text"
        placeholder="XXX XXX"
        validate={required}
      />
      <ErrorMessage name="postCode" component="div" className="field-error" />
    </div>
    <Link to="/step2">
      <button type="button">Next »</button>
    </Link>
    <button type="reset">Cancel</button>
  </Fragment>
)
};

export default Page1;