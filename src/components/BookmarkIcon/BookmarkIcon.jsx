import "../../styles/BookmarkIcon.css";
import Icon from "../Icon/index";
import { useAppProvider } from "../../context/AppContext";

const BookmarkIcon = ({ alreadyBookmarked, videoData }) => {
    const { toggleBookmark } = useAppProvider();
    const handleBookmarkClick = (e) => {
        toggleBookmark(videoData);
    }

    return (
        <div
            className="regular-video__bookmark-sign"
            onClick={handleBookmarkClick}
        >
            <Icon
                iconName={alreadyBookmarked ? "fullBookmarkIcon" : "emptyBookmarkIcon"}
                iconClassName="regular-video__bookmarkedIcon"
            />
        </div>
    )
}

export default BookmarkIcon;