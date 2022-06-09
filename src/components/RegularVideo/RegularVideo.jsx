import "../../styles/RegularVideo.css"
import Icon from "../Icon/index.js";
import { useDispatch } from "react-redux";
import { videosActions } from "../../store/videos-slice.js";

const RegularVideo = ({ videoData }) => {
    const dispatch = useDispatch();
    const handleBookmarkClick = () => {
        dispatch(videosActions.toggleBookmark(videoData));
    }

    return (
        <article className="regular-video">
            <div
                className="regular-video__thumbnail-cont"
                style={{
                    backgroundImage: `url(${videoData.thumbnail.regular.small})`
                }}
            >
                <div
                    className="video__bookmark-icon-cont"
                    onClick={handleBookmarkClick}
                >
                    <Icon
                        className={"video__bookmark-icon"}
                        name={videoData.isBookmarked ? "fullBookmarkIcon" : "emptyBookmarkIcon"}
                    />
                </div>
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    target="_blank"
                    rel="noreferrer"
                    className="regular-video__play-cont"
                >
                    <Icon name="playIcon" className="regular-video__play-icon" />
                    <p>Play</p>
                </a>
                <div className="thumbnail-cont__overlay"></div>
            </div>
            <div className="regular-video__info">
                <div className="regular-video__details">
                    <p className="regular-video__year">{videoData.year}</p>
                    <ul className="regular-video__specs">
                        <li className="regular-video__spec" >
                            <Icon
                                name={false ? "tVCategoryIcon" : "movieCategoryIcon" }
                                className="regular-video__category-icon"
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
        </article>
    )
}

export default RegularVideo;