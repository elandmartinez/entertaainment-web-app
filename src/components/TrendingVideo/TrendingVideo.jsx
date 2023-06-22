import "../../styles/TrendingVideo.css";
import Icon from "../Icon/index.js";
import { useAppProvider } from "../../context/AppContext";

const TrendingVideo = ({ videoData }) => {
    const { toggleBookmark } = useAppProvider();
    const handleBookmarkClick = (e) => {
        toggleBookmark(videoData)
    }

    return (
        <article
            className="trending-video"
            style={{backgroundImage: `url(${videoData.thumbnail.trending.small})`}}
            key={videoData.id}
        >
            <div className="trending-video__info">
                <p className="trending-video__year">{videoData.year}</p>
                <ul className="trending-video__specs">
                    <li className="trending-video__spec">
                        <Icon
                            name={false ? "tVCategoryIcon" : "movieCategoryIcon" }
                            className="trending-video__category-icon"
                        />
                        {videoData.category}
                    </li>
                    <li className="trending-video__spec" >
                        {videoData.rating}
                    </li>
                </ul>
            </div>
            <div
                className="video__bookmark-icon-cont"
                onClick={handleBookmarkClick}
            >
                <Icon
                    name={videoData.isBookmarked ? "fullBookmarkIcon" : "emptyBookmarkIcon"}
                    className="video__bookmark-icon"
                />
            </div>
            <p className="trending-video__title" >{videoData.title}</p>
            <div className="trending-video__overlay"></div>
            <a
                href="/"
                rel="noreferrer"
                className="trending-video__play-cont"
            >
                <Icon name="playIcon" className="trending-video__play-icon" />
                <p>Play</p>
            </a>
        </article>
    )
}

export default TrendingVideo;