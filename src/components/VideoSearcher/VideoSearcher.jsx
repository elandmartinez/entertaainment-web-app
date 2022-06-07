import "../../styles/VideoSearcher.css";
import Icon from "../Icon/index.js";
import { useSearchParams } from "react-router-dom";

const VideoSearcher = ({ inSection }) => {
    const [params, setParams] = useSearchParams();

    const handleOnChange = (e) => {
        let search = e.target.value;
        if(search === "") {
            setParams({})
        } else{
            setParams({ "search": search })
        }
    }

    return (
        <div className="searcher-cont">
            <Icon name="searchIcon" className="searcher-icon" />
            <input
                type="text"
                onChange={handleOnChange}
                placeholder={inSection}
                className="searcher-input"
                value={params.get("search") ? params.get("search") : ""}
            />
        </div>
    )
}

export default VideoSearcher;