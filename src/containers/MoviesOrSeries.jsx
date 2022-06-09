import "../styles/MoviesOrSeries.css";
import Thumbnails from "../components/Thumbnails/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import { useOutletContext } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MoviesOrSeries = () => {
    const videosData = useOutletContext();
    const location = useLocation();
    let sectionNameToRender = location.pathname.slice(1).split("");
    sectionNameToRender[0] = sectionNameToRender[0].toUpperCase();
    sectionNameToRender = sectionNameToRender.join("");

    return (
        <div className="movies-series">
            <SectionTitle>{sectionNameToRender}</SectionTitle>
            <Thumbnails videos={videosData} />
        </div>
    )
}

export default MoviesOrSeries;
