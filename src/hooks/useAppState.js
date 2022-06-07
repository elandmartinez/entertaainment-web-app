import { useState } from "react";
import { initialData } from "../utils/data.js";
import { useLocation } from "react-router-dom";

const useAppState = () => {
    const location = useLocation();
    let currentSection = location.pathname.slice(1);
    if(currentSection === "") currentSection = "/";

    const isUserLogged = JSON.parse(sessionStorage.getItem("isAUserLogged")) || false;
    const [isAUserLogged, setIsAUserLogged] = useState(isUserLogged);
    const [passwordNotRepeatedError, setPasswordNotRepeatedError] = useState(false);
    const [showLoginErrorMsg, setShowLoginErrorMsg] = useState({show: false, msg:""});
    const [showSignUpErrorMsg, setShowSignUpErrorMsg] = useState({show: false, existingPart:""});
    const [videos, setVideos] = useState(initialData);
    const initialStorageSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const [sessions, setSessions] = useState(initialStorageSessions);

    /**
     * It takes a video as an argument, checks if it's already bookmarked, if it is, it removes it from
     * the bookmarked videos array, if it isn't, it adds it to the bookmarked videos array
     * @param video - The video object that is being bookmarked.
     */
    const toggleBookmark = (video) => {
        let bookmarkedVideosLocalStorage = JSON.parse(localStorage.getItem("bookmarked-videos")) || [];

        const isVideoAlreadyBookmarked = bookmarkedVideosLocalStorage.some(bookmarkedVideo=> {
            return bookmarkedVideo.index === video.index
        })
        if(isVideoAlreadyBookmarked) {
            bookmarkedVideosLocalStorage = bookmarkedVideosLocalStorage.filter(bookmarkedVideo => {
                return bookmarkedVideo.index !== video.index
            })
        } else {
            bookmarkedVideosLocalStorage.push(video)
        }
        setVideos(() => {
            return videos.map(globalStateVideo => {
                let newIsBookmarked = globalStateVideo.isBookmarked;
                if(globalStateVideo.index === video.index) newIsBookmarked = !video.isBookmarked
                return {
                    ...globalStateVideo,
                    isBookmarked: newIsBookmarked
                }
            })
        })
        localStorage.setItem("bookmarked-videos", JSON.stringify(bookmarkedVideosLocalStorage));
    }
    const updateSessions = (session) => {
        const sessions = JSON.parse(localStorage.getItem("sessions")) || [];
        const updatedSessions = [...sessions, session];
        localStorage.setItem("sessions", JSON.stringify(updatedSessions));
        setSessions(updatedSessions);
    }
    const updateIsAUserLogged = (valueToSafe) => {
        sessionStorage.setItem("isAUserLogged", JSON.stringify(valueToSafe));
        setIsAUserLogged(valueToSafe);
    }

    /* toggleBookmark(null); */

    return {
        sessions,
        updateSessions,
        videos,
        setVideos,
        toggleBookmark,
        showSignUpErrorMsg,
        setShowSignUpErrorMsg,
        showLoginErrorMsg,
        setShowLoginErrorMsg,
        passwordNotRepeatedError,
        setPasswordNotRepeatedError,
        isAUserLogged,
        updateIsAUserLogged,
    }
}

export default useAppState;
