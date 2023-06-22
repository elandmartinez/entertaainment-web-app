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
import { useAppProvider } from "../context/AppContext";

const SignUp = () => {
    const {
        updateSessions,
        showSignUpErrorMsg,
        setShowSignUpErrorMsg,
        passwordNotRepeatedError,
        setPasswordNotRepeatedError,
        saveLogged,
    }  = useAppProvider();
    const navigateTo = useNavigate();
    useEffect(() => {
        setShowSignUpErrorMsg({ show: false, existingPart: ""});
    }, [setShowSignUpErrorMsg]);

    return (
        <div className="sign-up">
            <Icon name="logo" iconClassName="sign-up__logo" />
            <Formik
                initialValues={signUpInputsInitialValues}
                validationSchema={signUpSchema}
                onSubmit={(signInInfo) => {
                    let passwordRepeatedCorrectly = signInInfo.password === signInInfo.repeatPassword;
                    if(passwordRepeatedCorrectly) {
                        let isANewUser = isANewAccount(signInInfo);
                        if(isANewUser.error) {
                            console.log("failure signing up, this user alreeady exist");
                            setShowSignUpErrorMsg({
                                show: true,
                                invalidParameter: `${isANewUser.invalidParameter}`,
                            })
                        } else {
                            let newSession = {
                                email: signInInfo.email,
                                password: signInInfo.password,
                            }
                            updateSessions(newSession)
                            console.log("success, signing up");
                            navigateTo("/");
                            saveLogged(true);
                        }
                    } else {
                        setPasswordNotRepeatedError(true);
                        console.log("password not repeated correctly");
                    }
                    console.log(passwordNotRepeatedError);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="sign-up__form" >
                        { showSignUpErrorMsg.show ? <SignUpError invalidParameter={showSignUpErrorMsg.invalidParameter} /> : null }
                        { passwordNotRepeatedError ?  <PasswordNotRepeated /> : null}
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
