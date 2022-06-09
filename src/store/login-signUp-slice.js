import { createSlice } from '@reduxjs/toolkit';

export const loginSignUpSlice = createSlice({
    name: "login-signup",
    initialState: {
        signUpErrors: {
            passwordNotRepeated: false,
            accountAlreadyExist: { show: false, invalidPart: "" },
        },
        loginErrors: {show: false, msg: ""},

    },
    reducers: {
        setSignUpErrors (state, action) {
            state.signUpErrors = action.payload;
        },
        setLoginErrors (state, action) {
            state.loginErrors = action.payload;
        }
    }
})

export const loginSignUpActions = loginSignUpSlice.actions;
