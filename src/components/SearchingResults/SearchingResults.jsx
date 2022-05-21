import "../../styles/SearchingResults.css";
import RenderThumbnails from "../RenderThumbnails/index.js";
import SectionTitle from "../SectionTitle/index.js";
import { useSearchParams, useOutletContext } from "react-router-dom";

const SearchingResults = () => {
    const [params, setParams] = useSearchParams();
    const charsToSearch = params.get("toSearch").toLowerCase();
    const catalog = useOutletContext();
    const results = catalog.filter(video => {
        let titleToCompare = video.title.toLowerCase()
        let includesToSearch = titleToCompare.includes(charsToSearch)
        return includesToSearch
    })
    const resultsFoundTitle = `Found ${results.length} results for "${params.get("toSearch")}"`


    return (
        <div className="searching-results">
            <SectionTitle>{resultsFoundTitle}</SectionTitle>
            <RenderThumbnails thumbnailsToRender={results} />
        </div>
    )
}

export default SearchingResults