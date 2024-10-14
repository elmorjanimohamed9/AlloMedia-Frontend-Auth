import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('First name required'),
  lastName: yup.string().required('Last name required'),
  email: yup.string().email('Enter a valid email').required('Email required'),
  password: yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password: A-Z, a-z, 0-9, @#$%&!'
    )
    .required('Password required'),
  phone: yup.string()
    .matches(
      /^[0-9]{10,15}$/,
      'Phone: 10-15 digits'
    )
    .required('Phone required'),
  address: yup.string().required('Address required'),
});