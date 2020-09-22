import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

const getValidity = (valid, dirty) => (!dirty || !valid ? false : true);

const Page1 = ({ validateLastName, validatePostCode, validateDob, isValid, handleReset, isDirty }) => {
  let validity = getValidity(isValid, isDirty);
  let [disableButton, setDisableButton] = useState(!validity);

  useEffect(() => {
    if(!validity !== disableButton) {
      setDisableButton(!validity);
    }
  }, [validity, disableButton]);

  return (
    <Fragment>
      <h2>Please enter your details</h2>
      <div className="form-field">
        <label>Last Name</label>
        <Field
          name="lastName"
          component="input"
          type="text"
          placeholder="Last Name"
          validate={validateLastName}
        />
        <ErrorMessage name="lastName" component="div" className="field-error" />
      </div>
      <div className="form-field">
        <label>Date of Birth</label>
        <Field
          name="dob"
          component="input"
          type="text"
          placeholder="DD/MM/YYYY"
          validate={validateDob}
        />
        <ErrorMessage name="dob" component="div" className="field-error" />
      </div>
      <div className="form-field">
        <label>Post Code</label>
        <Field
          name="postCode"
          component="input"
          type="text"
          placeholder="XXX XXX"
          validate={validatePostCode}
        />
        <ErrorMessage name="postCode" component="div" className="field-error" />
      </div>
      <div className="button-bar">
        <Link to="/step2">
          <button type="button" disabled={disableButton}>Next »</button>
        </Link>
        <button type="reset" onClick={handleReset}>Cancel</button>
      </div>
    </Fragment>
  );
};

export default Page1;