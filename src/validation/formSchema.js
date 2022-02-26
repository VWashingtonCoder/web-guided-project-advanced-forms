// Here goes the schema for the form

import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("username is required")
        .min(3, "username has to be more than three character"),
    email: yup
        .string()
        .trim()
        .email('Gotta be a valid email')
        .required("Email is required"),
    role: yup
        .string()
        .required()
        .oneOf(['instructor', 'student', 'alumni'], 'Role is required'),
    civil: yup
        .string()
        .required()
        .oneOf(["single", "married"], "pick your status: single or married?"),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
})

export default formSchema;
