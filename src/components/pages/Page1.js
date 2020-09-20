import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

const getValidity = (valid, dirty) => {
  // if (!dirty || !valid) {
  //   return false; }
  // } else if (!valid) {
  //   return false;
  // }
  return !dirty || !valid ? false : true;
  // return true;
}

const Page1 = ({ validateLastName, validatePostCode, validateDob, isValid, handleReset, isDirty, status}) => {
  // let [disableButton, setDisableButton] = useState(!isValid);
  let validity = getValidity(isValid, isDirty);
  console.log('validity: ', validity);
  let [disableButton, setDisableButton] = useState(!validity);
  // TODO: Set initial isValid to false -- !dirty && !isValid?
  

  useEffect(() => {
    if(!validity !== disableButton) {
      setDisableButton(!validity);
    }
  }, [validity, disableButton]);

  console.log(isValid, disableButton, isDirty);
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
          validate={validateLastName}
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
          validate={validateDob}
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
          validate={validatePostCode}
        />
        <ErrorMessage name="postCode" component="div" className="field-error" />
      </div>
      <Link to="/step2">
        <button type="button" disabled={disableButton}>Next »</button>
      </Link>
        <button type="reset" onClick={handleReset}>Cancel</button>
      {/* {`Status: ${JSON.stringify(status)}`} */}
      <p>{disableButton}</p>
    </Fragment>
  );
};

export default Page1;