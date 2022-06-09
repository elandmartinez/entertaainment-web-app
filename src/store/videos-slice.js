import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../utils/data.js";

export const videosSlice = createSlice({
    name: "videos",
    initialState: {
        videosList: initialData,
        changed: false
    },
    reducers: {
        toggleBookmark (state, action) {
            const videoToToggle = action.payload;
            state.videosList = state.videosList.map(video => {
                let objToReturn = video;
                if(video.id === videoToToggle.id) objToReturn = {...video, isBookmarked: !video.isBookmarked}
                return objToReturn;
            })
            const updatedBookmarks = state.videosList.filter(video => video.isBookmarked === true)
            localStorage.setItem("bookmarkedVideos", JSON.stringify(updatedBookmarks));
        }
    }
})

export const videosActions = videosSlice.actions