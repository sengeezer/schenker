import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { withFormik } from 'formik';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

import {
  validateLastName,
  validatePostCode,
  validateDob,
  validateCode,
  required
} from '../fieldValidation';

import { Debug } from './Debug';

const BaseForm = ({
  values,
  errors,
  touched,
  isValidating,
  handleSubmit,
  handleReset,
  validateField,
  validateForm,
  isValid,
  status
}) => {
  // let [isBlocking, setIsBlocking] = useState(false);
  
  return (
  <Router>
    <div className="wizard">
      <form onSubmit={handleSubmit}>
        <Switch>
          <Route
            path="/step1"
            render={routeProps => <Page1
                                    {...routeProps}
                                    validateLastName={validateLastName}
                                    validatePostCode={validatePostCode}
                                    validateDob={validateDob}
                                    isValid={isValid}
                                    handleReset={handleReset}
                                    status={status}
                                  />}
          />
          <Route
            path="/step2"
            render={routeProps => <Page2 {...routeProps} required={required} />}
          />
          <Route
            path="/step3"
            render={routeProps => <Page3 {...routeProps} validateCode={validateCode} isValid={isValid} />}
          />
          <Route
            path="/step4"
            render={routeProps => <Page4 {...routeProps} />}
          />
          <Redirect to="/step1" />
        </Switch>
        {/* {isValid ? <p>Valid</p> : <p>Invalid</p>} */}
        <Debug />
      </form>
    </div>
  </Router>
)};

export const EnhancedForm = withFormik({
  // setup initial values
  mapPropsToValues: () => ({
    lastName: '',
    dob: '',
    postCode: '',
    phone: '',
    mobilePhone: '',
    email: '',
    verificationMethod: '',
    verificationCode: ''
  }),

  mapPropsToStatus: props => ({
    // isValid: props.isValid,
    myProps: JSON.stringify(props),
  }),

  validate: (values, props) => {
    console.log('props1: ', props);

    const errors = {};

    if (!values.lastName) {
      errors.lastName = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
      // TODO: unblock navigation & reset form?
    }, 1000);
  },

  displayName: 'BaseForm'
})(BaseForm);

export default EnhancedForm;
