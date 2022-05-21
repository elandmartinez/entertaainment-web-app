import "../../styles/TrendingSection.css";
import TrendingVideo from '../TrendingVideo/index.js';
import SectionTitle from "../SectionTitle/index.js";
import { useAppProvider } from "../../context/AppContext";

const TrendingSection = () => {
    const { moviesAndSeries } = useAppProvider();
    const trending = moviesAndSeries.filter(video => {
      return video.isTrending === true
    })

    return (
      <div className="trending-cont">
        <SectionTitle>Trending</SectionTitle>
        <div className="trending-scroll">
            {trending.map((video) => {
                return (
                  <TrendingVideo videoData={video} key={video.id} />
                )
            })}
        </div>
      </div>
    )
}

export default TrendingSection;
