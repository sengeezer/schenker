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
  validateDob
} from '../fieldValidation';

import { Debug } from './Debug';

const BaseForm = ({
  values,
  errors,
  touched,
  isValidating,
  handleSubmit,
  validateField,
  validateForm
}) => (
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
                                  />}
          />
          <Route
            path="/step2"
            render={routeProps => <Page2 {...routeProps} />}
          />
          <Route
            path="/step3"
            render={routeProps => <Page3 {...routeProps} />}
          />
          <Route
            path="/step4"
            render={routeProps => <Page4 {...routeProps} />}
          />
          <Redirect to="/step1" />
        </Switch>

        <Debug />
      </form>
    </div>
  </Router>
);

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

  validate: (values, props) => {
    console.log('props: ', props);

    const errors = {};

    if (!values.lastName) {
      errors.lastName = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      // TODO: unblock navigation & reset form?
    }, 1000);
  },

  displayName: 'BaseForm'
})(BaseForm);

export default EnhancedForm;
