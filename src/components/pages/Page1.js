import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

const Page1 = ({ validateLastName, validatePostCode, validateDob, isValid, status}) => {
  // while !isValid, setIsBlocking = true
  // let [isBlocking, setIsBlocking] = useState(false);
  // let disableButtons = !isValid.toString();

  let [disableButton] = useState(isValid);
  // isValid ? setIsBlocking(false) : setIsBlocking(true);

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
      {/* TODO: Do not action if isBlocking(?) */}
      <button type="button" disabled={disableButton}>Next »</button>
    </Link>
    {/* TODO: Should clear all fields */}
    <button type="reset">Cancel</button>
    {/* {isValid ? <p>Valid</p> : <p>Invalid</p>} */}
    {`Status: ${JSON.stringify(status)}`}
  </Fragment>
)
};

export default Page1;