import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

const getValidity = (valid, dirty) => (!dirty || !valid ? false : true);

const Page2 = ({ isValid, isDirty, validateRequired }) => {
  let validity = getValidity(isValid, isDirty);
  let [disableButton, setDisableButton] = useState(!validity);

  useEffect(() => {
    if(!validity !== disableButton) {
      setDisableButton(!validity);
    }
  }, [validity, disableButton]);
  
  return (
    <Fragment>
      <h2>Please choose your preferred verification method</h2>
      <p>We will send you a verification code that you will need to enter on the next screen.</p>
      <div>
        <label>Verification method</label>
        <Field name="verificationMethod" component="select" validate={validateRequired}>
          <option value="">Please make a selection</option>
          <option value="landLine">020 3755 5125</option>
          <option value="mobile">07133 7463 8476</option>
          <option value="email">patient@stthomas.nhs.uk</option>
        </Field>
        <ErrorMessage name="verificationMethod" component="div" className="field-error" />
      </div>
      <Link to="/step1">
        <button type="button">« Previous</button>
      </Link>
      <Link to="/step3">
        <button type="button" disabled={disableButton}>Next »</button>
      </Link>
    </Fragment>
  );
};

export default Page2;
