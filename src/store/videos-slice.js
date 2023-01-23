import { createSlice } from "@reduxjs/toolkit";
import { initialData, storageBookmarkedVideos } from "../utils/data.js";

export const videos = createSlice({
    name: "videos",
    initialState: {
        videosList: initialData,
        bookmarkedVideos: storageBookmarkedVideos || [],
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
            state.bookmarkedVideos = updatedBookmarks;
        }
    }
})

export const videosActions = videos.actions