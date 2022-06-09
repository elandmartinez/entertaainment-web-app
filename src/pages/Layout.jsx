import "../styles/InitialPage.css";
import Navbar from "../components/Navbar/index.js";
import VideoSearcher from "../components/VideoSearcher/index.js";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
    const videos = useSelector(state => state.videos.videosList);
    const location = useLocation();
    let videoSearcherPlaceHolder = "Search for ";
    let catalogToSearchIn;
    switch(location.pathname) {
        case "/":
            videoSearcherPlaceHolder += "movies or TV Series"
            catalogToSearchIn = videos;
            break
        case "/movies":
            videoSearcherPlaceHolder += "movies"
            catalogToSearchIn = videos.filter(video => {
                return video.category === "Movie"
            })
            break
        case "/series":
            videoSearcherPlaceHolder += "TV Series"
            catalogToSearchIn = videos.filter(video => {
                return video.category === "TV Series"
            })
            break
        case "/bookmarked":
            videoSearcherPlaceHolder += "bookmarked shows"
            catalogToSearchIn = videos.filter(video => {
                return video.isBookmarked === true
            })
            break
        default:
            return
    }

    return (
        <div className="initial-page">
            <Navbar />
            <div className="main-section">
                <VideoSearcher inSection={videoSearcherPlaceHolder} />
                <Outlet context={catalogToSearchIn} />
            </div>
        </div>
    )
}

export default Layout;
