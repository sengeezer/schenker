import React from 'react';
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
  validateDropDown,
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
  dirty,
  status
}) => {
  // console.log('first: ', isValid);
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
                                    isDirty={dirty}
                                    handleReset={handleReset}
                                    status={status}
                                  />}
          />
          <Route
            path="/step2"
            render={routeProps => <Page2
                                    {...routeProps}
                                    validateRequired={required}
                                    validateDropDown={validateDropDown}
                                    isValid={isValid}
                                    isDirty={dirty}
                                    values={values}
                                  />}
          />
          <Route
            path="/step3"
            render={routeProps => <Page3
                                    {...routeProps}
                                    validateCode={validateCode}
                                    isValid={isValid}
                                    isDirty={dirty}
                                    values={values}
                                  />}
          />
          <Route
            path="/step4"
            render={routeProps => <Page4 {...routeProps} />}
          />
          <Redirect to="/step1" />
        </Switch>
        
      </form>
    </div>
    <Debug />
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

  // TODO: Remove if no longer needed
  mapPropsToStatus: props => ({
    // isValid: props.isValid,
    myProps: JSON.stringify(props)
  }),

  validate: (values, props) => {
    // console.log('props1: ', props);

    const errors = {};

    // if (!values.lastName) {
    //   errors.lastName = 'Required';
    // }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 1000);
  },

  displayName: 'BaseForm'
})(BaseForm);

export default EnhancedForm;
