import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { videos, videosActions } from "./videos-slice.js";
import { authSlice, authActions } from "./auth-slice.js";
import { usersSlice, usersActions } from "./users-slice.js";
import { persistStore, persistReducer, getStoredState } from 'redux-persist'
import { persistConfig } from "../utils/constants.js";

const storeReducers = combineReducers({
    auth: authSlice.reducer,
    videos: videos.reducer,
    users: usersSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, storeReducers);

export const store = configureStore({
    reducer: persistedReducer,
    action: {
        videos: videosActions,
        auth: authActions,
        users: usersActions,
    },
})

export const persistedStore = persistStore(store);

let currentStore = store.getState();

export const unSubscribeStore = store.subscribe(async () => {
    let previousStore = currentStore;
    currentStore = store.getState();

    let previousBookmarks = previousStore.videos.bookmarkedVideos;
    let currentBookmarks = currentStore.videos.bookmarkedVideos;
    if(previousBookmarks !== currentBookmarks ){
        /* Saving the updated bookmarks to local storage. */
        localStorage.setItem("bookmarkedVideos", JSON.stringify(currentBookmarks));
    }
})
