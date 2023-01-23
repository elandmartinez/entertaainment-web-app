import { createSlice } from '@reduxjs/toolkit';
import { getPersistedState } from "../utils/helpers.js";
import { persistConfig, initialAuthState } from '../utils/constants';

let isAnAccountLoggedIn = JSON.parse(localStorage.getItem("isAnAccountLogged"))

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        signUpErrors: {
            passwordNotRepeated: false,
            accountAlreadyExist: { show: false, invalidPart: "" },
        },
        loginErrors: {show: false, msg: ""},
        isAnAccountLogged: isAnAccountLoggedIn ? true : false,
    },
    reducers: {
        setSignUpErrors (state, action) {
            state.signUpErrors = action.payload;
        },
        setLoginErrors (state, action) {
            state.loginErrors = action.payload;
        },
        updateIsAnAccountLogged (state, action) {
            state.isAnAccountLogged = action.payload;
            localStorage.setItem("isAnAccountLogged", JSON.stringify(action.payload));
        }
    }
})

export const authActions = authSlice.actions;
