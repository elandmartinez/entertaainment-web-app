import { Link, useSearchParams } from "react-router-dom";
import Icon from "../Icon/index.js";
import {useAppProvider} from "../../context/AppContext";

const NavbarSectionIcon = ({ sectionName, iconName }) => {
    const [params, setParams] = useSearchParams();
    const {sectionSelected, setSectionSelected, updateIsSearchingVideo} = useAppProvider();
    const iconIsSelected = sectionSelected === sectionName;
    const handleIconClick = (e) => {
        updateIsSearchingVideo(false);
        console.log("hello");
        setSectionSelected(sectionName);
    }


    return (
        <div
            onClick={handleIconClick}
        >
            <Link to={sectionName}>
                <Icon
                    iconName={iconName}
                    iconClassName={iconIsSelected ? "icon-section-selected" : ""}
                />
            </Link>
        </div>
    )
}

export default NavbarSectionIcon;