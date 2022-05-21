import "../styles/Bookmarked.css";
import RenderThumbnails from "../components/RenderThumbnails/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import { useAppProvider } from "../context/AppContext.js";

const Bookmarked = () => {
    const { moviesAndSeries } = useAppProvider();
    const tVSeriesCatalogue = moviesAndSeries.filter(video => {
        return video.isBookmarked === true && video.category === "TV Series"
    })
    const moviesCatalogue = moviesAndSeries.filter(video => {
        return video.isBookmarked === true && video.category === "Movie"
    })

    return (
        <main className="bookmarked-section">
            <div className="bookmarked-catalogue">
                <SectionTitle>Bookmarked TV Series</SectionTitle>
                <RenderThumbnails thumbnailsToRender={tVSeriesCatalogue} />
            </div>
            <div className="bookmarked-catalogue">
                <SectionTitle>Bookmarked Movies</SectionTitle>
                <RenderThumbnails thumbnailsToRender={moviesCatalogue} />
            </div>
        </main>
    )
}

export default Bookmarked;