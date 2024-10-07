import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must include: A-Z, a-z, 0-9, and @#$%&!'
    )
    .required('Password is required'),
  phoneNumber: yup.string()
    .matches(
      /^[0-9]{10,15}$/,
      'Phone number: 10-15 digits (0-9)'
    )
    .required('Phone number is required'),
  address: yup.string().required('Address is required'),
});