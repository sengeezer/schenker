// Regular expressions written by or derived from regexr.com community

const required = value => (value ? undefined : 'Required');

const validateLastName = value => {
  let error;

  if (!value) {
    error = 'This field is required.';
  } else if (!/[^0-9.,"?!;:#$%&()*+\-/<>=@[\]\\^_{}|~]+/i.test(value)) {
    error = 'Please remove any numbers or non-letter characters';
  } else if (value.length < 2) {
    error = 'Please enter your full last name.';
  } else if (value.length > 50) {
    error = 'Please only enter the first part of your last name.';
  }

  return error;
};

const validatePostCode = value => {
  let error;

  if (!value) {
    error = 'This field is required.';
  } else if (!/\b(?![QVX])[A-Z](?![IJZ])[A-Z]?(?:\d{1,2}|(?:\d[ABCDEFGHJKSTUW])) ?\d(?![CIKMOV])[A-Z]{2}\b/ig.test(value)) {
    error = 'Please enter a valid UK post code.'
  }

  return error;
}

const validateDob = value => {
  let error;

  if (!value) {
    error = 'This field is required.';
  } else if (!/(\d{2})(|-|\/|)(\d{2})(|-|\/|)(\d{4})/g.test(value)) {
    error = 'Please enter a valid date of birth.'
  }

  return error;
};

const validateCode = value => {
  let error;

  if (!value) {
    error = 'This field is required.';
  } else if (!/^[0-9]{4}$/g.test(value)) {
    error = 'A valid code is four digits long.';
  } else if (value !== '0000') {
    error = 'The code you have entered is incorrect.';
  }

  return error;
};


export {
  validateLastName,
  validatePostCode,
  validateDob,
  validateCode,
  required
};
