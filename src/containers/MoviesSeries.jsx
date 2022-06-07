import "../styles/MoviesSeries.css";
import Thumbnails from "../components/Thumbnails/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import { useAppProvider } from "../context/AppContext.js";
import { useLocation } from "react-router-dom";

const Movies = () => {
    const { videos } = useAppProvider();
    const location = useLocation();
    let sectionNameToRender = location.pathname.slice(1).split("");
    sectionNameToRender[0] = sectionNameToRender[0].toUpperCase();
    sectionNameToRender = sectionNameToRender.join("");
    console.log(sectionNameToRender);
    const catalogue = videos.filter(video => {
        if(sectionNameToRender === "Series") return video.category === "TV Series"
        if(sectionNameToRender === "Movies") return video.category === "Movie"
    })
    console.log(videos);

    return (
        <div className="movies-series">
            <SectionTitle>{sectionNameToRender}</SectionTitle>
            <Thumbnails videos={catalogue} />
        </div>
    )
}

export default Movies;
