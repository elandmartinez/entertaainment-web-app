import "../styles/Movies.css";
import RenderThumbnails from "../components/RenderThumbnails/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import { useAppProvider } from "../context/AppContext.js";

const Movies = () => {
    const { moviesAndSeries } = useAppProvider();
    const catalogue = moviesAndSeries.filter(video => {
        return video.category === "Movie"
    })

    return (
        <div className="movies">
            <SectionTitle>Movies</SectionTitle>
            <RenderThumbnails thumbnailsToRender={catalogue} />
        </div>
    )
}

export default Movies;