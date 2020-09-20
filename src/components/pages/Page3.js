import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

const Page3 = ({ validateCode, isValid }) => {
  let [disableButton] = useState(isValid);

  return (
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
          validate={validateCode}
        />
        <ErrorMessage name="verificationCode" component="div" className="field-error" />
      </div>
      <Link to="/step2">
        <button type="button">« Previous</button>
      </Link>
      <Link to="/step4">
        <button type="submit" disabled={disableButton}>Submit</button>
      </Link>
    </Fragment>
  );
};

export default Page3;
