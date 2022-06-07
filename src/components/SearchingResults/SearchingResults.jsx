import "../../styles/SearchingResults.css";
import Thumbnails from "../Thumbnails/index.js";
import SectionTitle from "../SectionTitle/index.js";
import { useSearchParams, useOutletContext } from "react-router-dom";

const SearchingResults = () => {
    const [params, setParams] = useSearchParams();
    const charsToSearch = params.get("search").toLowerCase();
    const catalog = useOutletContext();
    const results = catalog.filter(video => {
        let titleToCompare = video.title.toLowerCase()
        let includesToSearch = titleToCompare.includes(charsToSearch)
        return includesToSearch
    })

    return (
        <div className="searching-results">
            <SectionTitle>Found {results.length} results for "{params.get("search")}"</SectionTitle>
            <Thumbnails thumbnailsToRender={results} />
        </div>
    )
}

export default SearchingResults
