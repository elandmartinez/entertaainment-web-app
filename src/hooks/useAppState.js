import { useState } from "react";
import { finalData } from "../utils/data.js";
import { useLocation } from "react-router-dom";

const useAppState = () => {
    const location = useLocation();
    let currentSection = location.pathname.slice(1);
    const isUserLogged = JSON.parse(sessionStorage.getItem("logged")) || false;
    if(currentSection === "") currentSection = "/";
    const [sectionSelected, setSectionSelected] = useState(currentSection);
    const [logged, setLogged] = useState(isUserLogged);
    const [passwordNotRepeatedError, setPasswordNotRepeatedError] = useState(false);
    const [showLoginErrorMsg, setShowLoginErrorMsg] = useState({show: false, msg:""});
    const [showSignUpErrorMsg, setShowSignUpErrorMsg] = useState({show: false, existingPart:""});
    const isSearchingResults = JSON.parse(localStorage.getItem("isSearchingVideo"))
    const [isSearchingVideo, setIsSearchingVideo] = useState(isSearchingResults);
    const [moviesAndSeries, setMoviesAndSeries] = useState(finalData);
    const initialStorageSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const [sessions, setSessions] = useState(initialStorageSessions);

    let bookmarked = finalData.filter(video => {
        return video.isBookmarked === true
    })
    let bookmarkedVideosLocalStrg = JSON.parse(localStorage.getItem("bookmarked-videos")) || bookmarked;

    /**
     * It takes a video as an argument, checks if it's already bookmarked, if it is, it removes it from
     * the bookmarked videos array, if it isn't, it adds it to the bookmarked videos array
     * @param video - The video object that is being bookmarked.
     */
    const toggleBookmark = (video) => {
        if(video !== null) {
            let isVideoAlreadyBookmarked = bookmarkedVideosLocalStrg.find(bookmarkedVideo=> {
                return bookmarkedVideo.index === video.index
            })
            if(isVideoAlreadyBookmarked) {
                video.isBookmarked = false;
                bookmarkedVideosLocalStrg = bookmarkedVideosLocalStrg.filter(bookmarkedVideo => {
                    return bookmarkedVideo.index !== video.index
                })
            } else {
                video.isBookmarked = true;
                bookmarkedVideosLocalStrg.push(video)
            }
            setMoviesAndSeries(() => {
                return moviesAndSeries.map(globalStateVideo => {
                    let newIsBookmarked = globalStateVideo.isBookmarked;
                    if(globalStateVideo.index === video.index) newIsBookmarked = video.isBookmarked
                    return {
                        ...globalStateVideo,
                        isBookmarked: newIsBookmarked
                    }
                })
            })
        }

        localStorage.setItem("bookmarked-videos", JSON.stringify(bookmarkedVideosLocalStrg));
    }
    const updateIsSearchingVideo = (newValue) => {
        localStorage.setItem("isSearchingVideo", JSON.stringify(newValue));
        setIsSearchingVideo(() => {
            return newValue
        })
    }
    const updateSessions = (session) => {
        let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
        let updatedSessions = [...sessions, session];
        localStorage.setItem("sessions", JSON.stringify(updatedSessions));
        setSessions(updatedSessions);
    }
    const saveLogged = (valueToSafe) => {
        sessionStorage.setItem("logged", JSON.stringify(valueToSafe));
        setLogged(valueToSafe);
    }

    toggleBookmark(null);

    return {
        isSearchingVideo,
        updateIsSearchingVideo,
        sessions,
        updateSessions,
        moviesAndSeries,
        setMoviesAndSeries,
        toggleBookmark,
        sectionSelected,
        setSectionSelected,
        showSignUpErrorMsg,
        setShowSignUpErrorMsg,
        showLoginErrorMsg,
        setShowLoginErrorMsg,
        passwordNotRepeatedError,
        setPasswordNotRepeatedError,
        logged,
        saveLogged,
    }
}

export default useAppState;