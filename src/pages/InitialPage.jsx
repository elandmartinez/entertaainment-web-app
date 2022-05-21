import "../styles/InitialPage.css";
import Navbar from "../components/Navbar/index.js";
import VideoSeeker from "../components/VideoSeeker/index.js";
import { Outlet, useLocation } from "react-router-dom";
import { useAppProvider } from "../context/AppContext";

const InitialPage = () => {
    const { moviesAndSeries } = useAppProvider();
    const location = useLocation();
    let sectionToSeek;
    let catalogToSearchIn;
    switch(location.pathname) {
        case "/":
            sectionToSeek = "movies or TV Series"
            catalogToSearchIn = moviesAndSeries;
            break
        case "/movies":
            sectionToSeek = "movies"
            catalogToSearchIn = moviesAndSeries.filter(video => {
                return video.category === "Movie"
            })
            break
        case "/series":
            sectionToSeek = "TV Series"
            catalogToSearchIn = moviesAndSeries.filter(video => {
                return video.category === "TV Series"
            })
            break
        case "/bookmarked":
            sectionToSeek = "bookmarked shows"
            catalogToSearchIn = moviesAndSeries.filter(video => {
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
                <VideoSeeker inSection={sectionToSeek} />
                <Outlet context={catalogToSearchIn} />
            </div>
        </div>
    )
}

export default InitialPage;