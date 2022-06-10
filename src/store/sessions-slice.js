import { createSlice } from "@reduxjs/toolkit";

let accountsInLocalStorage = JSON.parse(localStorage.getItem("sessions"));
let isAnAccountLoggedIn = JSON.parse(localStorage.getItem("isAnAccountLogged"))

export const sessionsSlice = createSlice({
    name: "sessions",
    initialState: {
        accountsLogged: accountsInLocalStorage ? accountsInLocalStorage : [],
        isAnAccountLogged: isAnAccountLoggedIn ? true : false,
    },
    reducers: {
        addNewAccount(state, action) {
            state.accountsLogged.push(action.payload);
            localStorage.setItem("sessions", JSON.stringify(state.accountsLogged));
        },
        updateIsAnAccountLogged (state, action) {
            state.isAnAccountLogged = action.payload;
            localStorage.setItem("isAnAccountLogged", JSON.stringify(action.payload));
        }
    }
})

export const sessionsActions = sessionsSlice.actions;