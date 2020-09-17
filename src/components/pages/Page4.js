import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Page4 = () => (
  <Fragment>
    <h2>Thank you</h2>
    <p>Please be seated. Someone will call for you shortly.</p>

    <Link to="/step1">
      <button type="button">Home</button>
    </Link>
  </Fragment>
);

export default Page4;
