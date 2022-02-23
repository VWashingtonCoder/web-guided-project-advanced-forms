// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Username is required ya chump!')
    .min(3, 'Username has to be more than three characters ya chump!'),
  email: yup
    .string()
    .email('Must be a valid email address ya chump!')
    .required('Email is required ya chump'),
  role: yup
    .string()
    .oneOf(['instructor', 'student', 'alumni'], 'Role is required COME ON!!!'),
  civil: yup
    .required()
    .oneOf(['married', 'single'], 'Gotta be either married or single, bud.'),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean()
})

export default formSchema;