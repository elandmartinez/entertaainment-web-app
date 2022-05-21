import "../../styles/RegularVideo.css"
import Icon from "../Icon/index.js";
import BookmarkIcon from "../BookmarkIcon/index.js";

const RegularVideo = ({ videoData }) => {
    return (
        <div className="regular-video" key={videoData.id}  >
            <div
                className="regular-video__thumbnail-cont"
                style={{
                    backgroundImage: `url(${videoData.thumbnail.regular.small})`
                }}
            >
                <BookmarkIcon alreadyBookmarked={videoData.isBookmarked} videoData={videoData} />
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    target="_blank"
                    rel="noreferrer"
                    className="regular-video__play-cont"
                >
                    <Icon iconName="playIcon" iconClassName="regular-video__play-icon" />
                    <p>Play</p>
                </a>
                <div className="regular-video__thumbnail-cont__overlay"></div>
            </div>
            <div className="regular-video__info">
                <div className="regular-video__details">
                    <p className="regular-video__year">{videoData.year}</p>
                    <ul className="regular-video__specs">
                        <li className="regular-video__spec" >
                            <Icon
                                iconName={false ? "tVCategoryIcon" : "movieCategoryIcon" }
                                iconClassName="regular-video__category-icon"
                            />
                            {videoData.category}
                        </li>
                        <li className="regular-video__spec" >
                            {videoData.rating}
                        </li>
                    </ul>
                </div>
                <p className="regular-video__title" >{videoData.title}</p>
            </div>
        </div>
    )
}

export default RegularVideo;