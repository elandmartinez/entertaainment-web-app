import Icon from "../components/Icon/index.js";
import LoginError from "../components/LoginError/index.js";
import { useEffect } from "react";
import { userHasAccount } from "../utils/helpers.js";
import { Formik, Field, ErrorMessage } from 'formik';
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import {loginInputNames, loginInputsInitialValues} from "../utils/constants.js";
import { loginSchema } from "../utils/formSchema.js";
import { useDispatch, useSelector } from "react-redux";
import { loginSignUpActions as loginActions } from "../store/login-signUp-slice.js";
import { sessionsActions } from "../store/sessions-slice.js";

const Login  = () => {
    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const loginErrors = useSelector(state => state.loginSignUp.loginErrors);
    useEffect(() => {
        dispatch(loginActions.setLoginErrors({
            show: false,
            msg: ""
        }));
    }, [dispatch]);

    return (
        <div className="login">
            <Icon name="logo" iconClassName="login__logo" />
            <Formik
                initialValues={loginInputsInitialValues}
                validationSchema={loginSchema}
                onSubmit={(loginInfo, actions) => {
                    let userHasAnAccount = userHasAccount(loginInfo);
                    if(userHasAnAccount.error) {
                        dispatch(loginActions.setLoginErrors({
                            show: true,
                            msg: userHasAnAccount.errorMsg,
                        }));
                        actions.setSubmitting(false);
                    } else {
                        dispatch(sessionsActions.updateIsAnAccountLogged(true));
                        navigateTo("/");
                    }
                }}
            >
                {({ isSubmitting, handleSubmit }) => (
                    <form className="login__form" onSubmit={handleSubmit}>
                        { loginErrors.show ? <LoginError errorMsg={loginErrors.msg} /> : null }
                        <h1>Log In</h1>
                        <div className="login__input-cont">
                            <Field
                                type="email"
                                name={loginInputNames.email}
                                className="login__input"
                                placeholder="Email"
                            />
                            <ErrorMessage name="email" component="div" className="login__input-error" />
                        </div>
                        <div className="login__input-cont">
                            <Field
                                type="password"
                                name={loginInputNames.password}
                                className="login__input"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" component="div" className="login__input-error" />
                        </div>
                        <button
                            type="submit"
                            className="login__submit-button"
                            disabled={isSubmitting}
                        >
                            Log In to your account
                        </button>
                        <div className="login__alt-option">
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
