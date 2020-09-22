import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

const getValidity = (valid, dirty, values) => (!dirty || !valid || !values.verificationCode ? false : true);

const Page3 = ({ isValid, isDirty, validateCode, values }) => {
  let validity = getValidity(isValid, isDirty, values);
  let [disableButton, setDisableButton] = useState(!validity);

  useEffect(() => {
    if(!validity !== disableButton) {
      setDisableButton(!validity);
    }
  }, [validity, disableButton]);

  return (
    <Fragment>
      <h2>Enter verification code</h2>
      <p>Please enter the verification code you just received from us.</p>
      <div className="form-field">
        <label>Verification Code</label>
        <Field
          name="verificationCode"
          component="input"
          type="text"
          placeholder="XXXX"
          validate={validateCode}
        />
        <ErrorMessage name="verificationCode" component="div" className="field-error" />
      </div>
      <div className="button-bar">
        <Link to="/step2">
          <button type="button">« Previous</button>
        </Link>
        <Link to="/step4">
          <button type="submit" disabled={disableButton}>Submit</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Page3;
