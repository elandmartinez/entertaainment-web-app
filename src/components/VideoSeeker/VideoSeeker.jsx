import "../../styles/VideoSeeker.css";
import { useState } from "react";
import Icon from "../Icon/index.js";
import { useSearchParams } from "react-router-dom";
import { useAppProvider } from "../../context/AppContext.js";

const VideoSeeker = ({ inSection }) => {
    const { updateIsSearchingVideo } = useAppProvider();
    const [params, setParams] = useSearchParams();

    const handleOnChange = (e) => {
        let toSearch = e.target.value;
        console.log(toSearch);
        if(toSearch === "") {
            updateIsSearchingVideo(false);
            setParams({})
        } else{
            updateIsSearchingVideo(true)
            setParams({ toSearch })
        }
    }

    return (
        <div className="seeker-cont">
            <Icon iconName="searchIcon" iconClassName="seeker-icon" />
            <input
                type="text"
                onChange={handleOnChange}
                placeholder={`Search for ${inSection}`}
                className="seeker-input"
                value={params.get("toSearch") ? params.get("toSearch") : ""}
            />
        </div>
    )
}

export default VideoSeeker;