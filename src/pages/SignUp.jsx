import "../styles/SignUp.css";
import Icon from "../components/Icon/index.js";
import SignUpError from "../components/SignUpError/index.js";
import PasswordNotRepeated from "../components/PasswordNotRepeated/index.js";
import { useEffect } from "react";
import { isANewAccount } from "../utils/helpers";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import {signUpInputNames, signUpInputsInitialValues } from "../utils/constants.js";
import { signUpSchema } from "../utils/formSchema.js";
import { useSelector, useDispatch } from "react-redux";
import { usersActions } from "../store/users-slice";
import { authActions } from "../store/auth-slice";

const SignUp = () => {
    const dispatch = useDispatch();
    const signUpErrors = useSelector(state => state.auth.signUpErrors);
    const navigateTo = useNavigate();
    useEffect(() => {
        dispatch(authActions.setSignUpErrors({
            passwordNotRepeated: false,
            accountAlreadyExist: { show: false, existingPart: ""}
        }));
    }, [dispatch]);

    return (
        <div className="sign-up">
            <Icon name="logo" iconClassName="sign-up__logo" />
            <Formik
                initialValues={signUpInputsInitialValues}
                validationSchema={signUpSchema}
                onSubmit={(signInInfo, actions) => {
                    let passwordRepeatedCorrectly = signInInfo.password === signInInfo.repeatPassword;
                    if(passwordRepeatedCorrectly) {
                        let isANewUser = isANewAccount(signInInfo);
                        if(isANewUser.error) {
                            dispatch(authActions.setSignUpErrors({
                                ...signUpErrors,
                                accountAlreadyExist: {
                                    show: true,
                                    invalidParameter: `${isANewUser.invalidParameter}`,
                                }
                            }))
                            actions.setSubmitting(false);
                        } else {
                            let newSession = {
                                email: signInInfo.email,
                                password: signInInfo.password,
                            }
                            dispatch(usersActions.addNewAccount(newSession))
                            dispatch(authActions.updateIsAnAccountLogged(true));
                            navigateTo("/");
                        }
                    } else {
                        dispatch(authActions.setSignUpErrors({
                            ...signUpErrors,
                            passwordNotRepeated: true
                        }))
                        actions.setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="sign-up__form" >
                        { signUpErrors.accountAlreadyExist.show ?
                            <SignUpError invalidParameter={signUpErrors.accountAlreadyExist.invalidParameter} />
                            :
                            null
                        }
                        { signUpErrors.passwordNotRepeated ?  <PasswordNotRepeated /> : null}
                        <h1>Sign Up</h1>
                        <div className="sign-up__input-cont" >
                            <Field
                                type="email"
                                name={signUpInputNames.email}
                                className="sign-up__input"
                                placeholder="Email"
                            />
                            <ErrorMessage name="email" component="div" className="sign-up__input_error" />
                        </div>
                        <div className="sign-up__input-cont" >
                            <Field
                                type="password"
                                name={signUpInputNames.password}
                                className="sign-up__input"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" component="div" className="sign-up__input_error" />
                        </div>
                        <div className="sign-up__input-cont" >
                            <Field
                                type="password"
                                name={signUpInputNames.repeatPassword}
                                className="sign-up__input"
                                placeholder="Repeat Password"
                            />
                            <ErrorMessage name="repeatPassword" component="div" className="sign-up__input_error" />
                        </div>
                        <button
                            type="submit"
                            className="sign-up__submit-button"
                            disabled={isSubmitting}
                        >
                            Create a new account
                        </button>
                        <div className="sign-up__alt-option">
                            <p>Already have an account?</p>
                            <Link to="/login" className="login-link" >Log In</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUp;
