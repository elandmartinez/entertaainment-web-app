import "../../styles/RecommendedSection.css";
import Thumbnails from "../Thumbnails/index.js";
import SectionTitle from "../SectionTitle/index.js";
import { useOutletContext } from 'react-router-dom';

const RecommendedSection = () => {
    const videos = useOutletContext();
    const noTrendingVideos = videos.filter(video => {
        return video.isTrending === false
    })
    return (
        <div className="recommended-section">
            <SectionTitle>Recommended for you</SectionTitle>
            <Thumbnails videos={noTrendingVideos} />
        </div>
    )
}

export default RecommendedSection;