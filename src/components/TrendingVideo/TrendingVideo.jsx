import "../../styles/TrendingVideo.css";
import Icon from "../Icon/index.js";
import BookmarkIcon from "../BookmarkIcon/index.js";

const TrendingVideo = ({ videoData }) => {
    const handleThumbnailClick = (e) => {
        return
    }

    return (
        <div
            className="trending-video"
            style={{backgroundImage: `url(${videoData.thumbnail.trending.small})`}}
            onClick={handleThumbnailClick}
        >
            <div className="trending-video__info">
                <p className="trending-video__year" >{videoData.year}</p>
                <ul className="trending-video__specs">
                    <li className="trending-video__spec" >
                        <Icon
                            iconName={false ? "tVCategoryIcon" : "movieCategoryIcon" }
                            iconClassName="trending-video__category-icon"
                        />
                        {videoData.category}
                    </li>
                    <li className="trending-video__spec" >
                        {videoData.rating}
                    </li>
                </ul>
            </div>
            <BookmarkIcon alreadyBookmarked={videoData.isBookmarked} videoData={videoData} />
            <p className="trending-video__title" >{videoData.title}</p>
            <div className="trending-video__overlay"></div>
            <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                target="_blank"
                rel="noreferrer"
                className="trending-video__play-cont"
            >
                <Icon iconName="playIcon" iconClassName="trending-video__play-icon" />
                <p>Play</p>
            </a>
        </div>
    )
}

export default TrendingVideo;