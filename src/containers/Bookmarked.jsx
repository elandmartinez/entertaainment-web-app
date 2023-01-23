import "../styles/Bookmarked.css";
import Thumbnails from "../components/Thumbnails/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import { useSelector } from "react-redux";

const Bookmarked = () => {
    const bookmarkedVideos = useSelector(state => state.videos.videosList).filter(video => video.isBookmarked === true);
    const tVSeriesCatalogue = bookmarkedVideos.filter(video => {
        return video.category === "TV Series"
    })
    const moviesCatalogue = bookmarkedVideos.filter(video => {
        return video.category === "Movie"
    })

    return (
        <main className="bookmarked-section">
            <div className="bookmarked-catalogue">
                <SectionTitle>Bookmarked TV Series</SectionTitle>
                <Thumbnails videos={tVSeriesCatalogue} />
            </div>
            <div className="bookmarked-catalogue">
                <SectionTitle>Bookmarked Movies</SectionTitle>
                <Thumbnails videos={moviesCatalogue} />
            </div>
        </main>
    )
}

export default Bookmarked;