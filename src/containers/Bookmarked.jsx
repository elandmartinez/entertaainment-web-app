import "../styles/Bookmarked.css";
import Thumbnails from "../components/Thumbnails/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import { useAppProvider } from "../context/AppContext.js";

const Bookmarked = () => {
    const { videos } = useAppProvider();
    const TVSeriesCatalogue = videos.filter(video => {
        return video.isBookmarked === true && video.category === "TV Series"
    })
    const moviesCatalogue = videos.filter(video => {
        return video.isBookmarked === true && video.category === "Movie"
    })
    return (
        <main className="bookmarked-section">
            <div className="bookmarked-catalogue">
                <SectionTitle>Bookmarked TV Series</SectionTitle>
                <Thumbnails videos={TVSeriesCatalogue} />
            </div>
            <div className="bookmarked-catalogue">
                <SectionTitle>Bookmarked Movies</SectionTitle>
                <Thumbnails videos={moviesCatalogue} />
            </div>
        </main>
    )
}

export default Bookmarked;