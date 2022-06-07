import "../../styles/Thumbnails.css";
import RegularVideo from '../RegularVideo/index.js';

const Thumbnails = ({ videos }) => {
    return (
        <section className="thumbnails">
            {videos.map(video => {
                return (
                    <RegularVideo videoData={video} key={video.id} />
                )
            })}
        </section>
    )
}

export default Thumbnails;
