import "../../styles/RecommendedSection.css";
import Thumbnails from "../Thumbnails/index.js";
import SectionTitle from "../SectionTitle/index.js";
import { useAppProvider } from "../../context/AppContext";
import { useRef, useEffect } from "react";

const RecommendedSection = () => {
    const trialObj = useRef({counter: 0, isDirty: false});
    const { videos } = useAppProvider();
    const noTrendingVideos = videos.filter(video => {
        return video.isTrending === false
    })
    return (
        <div className="recommended-section" onClick={() => {
            trialObj.current.counter += 1;
            trialObj.current.isDirty = true;
        }}>
            <SectionTitle>Recommended for you</SectionTitle>
            <Thumbnails videos={noTrendingVideos} />
        </div>
    )
}

export default RecommendedSection;