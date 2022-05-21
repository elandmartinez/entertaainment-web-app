import Icon from "../components/Icon/index.js";
import LoginError from "../components/LoginError/index.js";
import { useEffect } from "react";
import { oldSessionAlreadyExist } from "../utils/helpers.js";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import {loginInputNames, loginInputsInitialValues} from "../utils/constants.js";
import { loginSchema } from "../utils/formSchema.js";
import { useAppProvider } from "../context/AppContext.js";

const Login  = () => {
    const { showLoginErrorMsg, setShowLoginErrorMsg, setShowSignUpErrorMsg, saveLogged } = useAppProvider();
    const navigateTo = useNavigate();

    useEffect(() => {
        setShowLoginErrorMsg({ show: false, msg: ""});
        setShowSignUpErrorMsg({ show: false, existingPart: ""});
    }, [setShowSignUpErrorMsg, setShowLoginErrorMsg]);

    return (
        <div className="login">
            <Icon iconName="logoIcon" iconClassName="login__logo" />
            <Formik
                initialValues={loginInputsInitialValues}
                validationSchema={loginSchema}
                onSubmit={(loginInfo, actions) => {
                    console.log({ loginInfo })
                    let matchedExistingSession = oldSessionAlreadyExist(loginInfo);
                    if(matchedExistingSession.error) {
                        console.log("failure");
                        setShowLoginErrorMsg({
                            show: true,
                            msg: matchedExistingSession.errorMsg,
                        })
                        actions.setSubmitting(false);
                    } else {
                        console.log("success");
                        saveLogged(true);
                        navigateTo("/");
                    }
                }}
            >
                {({ isSubmitting, handleSubmit }) => (
                    <form className="login__form" onSubmit={handleSubmit}>
                        { showLoginErrorMsg.show ? <LoginError errorMsg={showLoginErrorMsg.msg} /> : null }
                        <h1>Log In</h1>
                        <div className="login__form__input-cont">
                            <Field
                                type="email"
                                name={loginInputNames.email}
                                className="login__form__input"
                                placeholder="Email"
                            />
                            <ErrorMessage name="email" component="div" className="login__form__input__error" />
                        </div>
                        <div className="login__form__input-cont">
                            <Field
                                type="password"
                                name={loginInputNames.password}
                                className="login__form__input"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" component="div" className="login__form__input__error" />
                        </div>
                        <button
                            type="submit"
                            className="login__form__submit-button"
                            disabled={isSubmitting}
                        >
                            Log In to your account
                        </button>
                        <div className="login__form__alt-option">
                            <p>Don't have an account?</p>
                            <Link to="/signup" className="sign-up-link">Sign up</Link>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Login;