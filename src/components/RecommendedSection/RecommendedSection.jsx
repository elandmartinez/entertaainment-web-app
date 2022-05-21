import "../../styles/RecommendedSection.css";
import RenderThumbnails from "../RenderThumbnails/index.js";
import SectionTitle from "../SectionTitle/index.js";
import { useAppProvider } from "../../context/AppContext";

const RecommendedSection = () => {
    const { moviesAndSeries } = useAppProvider();
    const noTrendingVideos = moviesAndSeries.filter(video => {
        return video.isTrending === false
    })

    return (
        <div className="recommended-section">
            <SectionTitle>Recommended for you</SectionTitle>
            <RenderThumbnails thumbnailsToRender={noTrendingVideos} />
        </div>
    )
}

export default RecommendedSection;