import * as Yup from 'yup';

export const signUpSchema = () => Yup.object().shape({
    email: Yup.string()
        .email("invalid email address!")
        .required("Required!"),
    password: Yup.string()
        .min(6, "too short!")
        .max(20, "too long!")
        .required("Required"),
    repeatPassword: Yup.string()
        .min(6, "too short!")
        .max(20, "too long!")
        .required("Required")
});

export const loginSchema = () => Yup.object().shape({
    email: Yup.string()
        .email("invalid email address!")
        .required("Required!"),
    password: Yup.string()
        .min(6, "too short!")
        .max(20, "too long!")
        .required("Required!")
});
