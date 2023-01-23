import { createSlice } from "@reduxjs/toolkit";

let accountsInLocalStorage = JSON.parse(localStorage.getItem("accounts")) || [];

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        accounts: accountsInLocalStorage ? accountsInLocalStorage : [],
    },
    reducers: {
        addNewAccount(state, action) {
            state.accounts.push(action.payload);
            console.log(action.payload)
            localStorage.setItem("accounts", JSON.stringify(state.accounts));
        },
    }
})

export const usersActions = usersSlice.actions;