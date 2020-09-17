import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

const required = value => (value ? undefined : 'Required');

const Page3 = () => (
  <Fragment>
    <h2>Enter verification code</h2>
    <p>Please enter the verification code you just received from us.</p>
    <div>
      <label>Verification Code</label>
      <Field
        name="verificationCode"
        component="input"
        type="text"
        placeholder="XXXX"
        validate={required}
      />
      <ErrorMessage name="verificationCode" component="div" className="field-error" />
    </div>
    <Link to="/step2">
      <button type="button">« Previous</button>
    </Link>
    <button type="submit">Submit</button>
  </Fragment>
);

export default Page3;
