import "../../styles/RenderThumbnails.css";
import RegularVideo from '../RegularVideo/index.js';

const RenderThumbnails = ({ thumbnailsToRender }) => {
    return (
            <div className="thumbnails-to-render">
                {thumbnailsToRender.map(video => {
                    return (
                        <RegularVideo videoData={video} key={video.id} />
                    )
                })}
            </div>
    )
}

export default RenderThumbnails;