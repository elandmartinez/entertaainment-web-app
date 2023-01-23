import storage from 'redux-persist/lib/storage';
import { initialData } from './data.js';

export const loginInputNames = {
    email: "email",
    password: "password",
}

export const loginInputsInitialValues = {
    [loginInputNames.email]: "",
    [loginInputNames.password]: "",
}

export const signUpInputNames = {
    email: "email",
    password: "password",
    repeatPassword: "repeatPassword"
}

export const signUpInputsInitialValues = {
    [signUpInputNames.email]: "",
    [signUpInputNames.password]: "",
    [signUpInputNames.repeatPassword]: "",
}

export const initialAuthState = {
    signUpErrors: {
        passwordNotRepeated: false,
        accountAlreadyExist: { show: false, invalidPart: "" },
    },
    loginErrors: {show: false, msg: ""},
    isAnAccountLogged: false,
}

export const initialUsersState = {
    accounts: [],
}

export const initialVideosState = {
    videosList: initialData,
    bookmarkedVideos: [],
    changed: false
}

export const persistConfig = {
    key: "store",
    storage,
}