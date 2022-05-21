import "../styles/Series.css";
import RenderThumbnails from "../components/RenderThumbnails/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import { useAppProvider } from "../context/AppContext.js";

const Series = () => {
    const { moviesAndSeries } = useAppProvider();
    const catalogue = moviesAndSeries.filter(video => {
        return video.category === "TV Series"
    })

    return (
        <div className="series">
            <SectionTitle>TV Series</SectionTitle>
            <RenderThumbnails thumbnailsToRender={catalogue} />
        </div>
    )
}

export default Series;