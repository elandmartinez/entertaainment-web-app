import { useSelector } from "react-redux";

export const userHasAccount = (sessionToSearch) => {
    let storageSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    let sessionExist = storageSessions.some((session) => {
        return session.email === sessionToSearch.email && session.password === sessionToSearch.password
    })
    if(sessionExist) return {error: false, errorMsg: ""}
    return {error: true, errorMsg: "Oops! an account with this parameters doesn't exist"}
}

export const isANewAccount = (sessionToSearch) => {
    let storageSessions = JSON.parse(localStorage.getItem("sessions")) || [];
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