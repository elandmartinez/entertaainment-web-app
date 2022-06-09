import { configureStore } from "@reduxjs/toolkit";
import { videosSlice, videosActions } from "./videos-slice";
import { loginSignUpSlice, loginSignUpActions } from "./login-signUp-slice";
import { sessionsSlice, sessionsActions } from "./sessions-slice";


export const store = configureStore({
    reducer: {
        videos: videosSlice.reducer,
        loginSignUp: loginSignUpSlice.reducer,
        sessions: sessionsSlice.reducer,
    },
    action: {
        videos: videosActions,
        loginSignUp: loginSignUpActions,
        sessions: sessionsActions,
    },
})