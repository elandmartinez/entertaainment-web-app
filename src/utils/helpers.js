import { getStoredState } from "redux-persist";

export const userHasAccount = (sessionToSearch) => {
    let storageSessions = JSON.parse(localStorage.getItem("accounts")) || [];
    let sessionExist = storageSessions.some((session) => {
        return session.email === sessionToSearch.email && session.password === sessionToSearch.password
    })
    if(sessionExist) return {error: false, errorMsg: ""}
    return {error: true, errorMsg: "Oops! an account with this parameters doesn't exist"}
}

export const isANewAccount = (sessionToSearch) => {
    let storageSessions = JSON.parse(localStorage.getItem("accounts")) || [];
    const emailFailureCase = { existingPart: "email" };
    const passwordFailureCase = { existingPart:"password" };

    let sessionFailureParameter;
    storageSessions.forEach((session) => {
        if(session.email === sessionToSearch.email) sessionFailureParameter =  emailFailureCase;
        if(session.password === sessionToSearch.password) sessionFailureParameter =  passwordFailureCase;
    })
    if(sessionFailureParameter) return { error: true , invalidParameter: sessionFailureParameter.existingPart}
    return { error: false, invalidParameter: ""}
}

export const parsePersistedStore = (stringifiedStore) => {
    let parsedStore = {}
    for (let prop in stringifiedStore) {
        if(prop === "_persist") return
        parsedStore[prop] = JSON.parse(stringifiedStore[prop])
    }
    return parsedStore
}

export const getPersistedState = async (persistConfiguration) => {
    let persistedState = await getStoredState(persistConfiguration);
    return persistedState
}