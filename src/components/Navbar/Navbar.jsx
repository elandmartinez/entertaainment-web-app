import "../../styles/Navbar.css";
import NavbarSectionIcon from "../NavbarSectionIcon/index.js";
import Icon from "../Icon/index.js";
import userImage from "../../assets/images/image-avatar.png"

const Sidebar = () => {

    return (
        <aside className="nav-bar">
            <Icon iconName="logoIcon" iconClassName="nav__logo" />
            <ul className="nav__sections">
                <li>
                    <NavbarSectionIcon sectionName="/" iconName="navHomeIcon" />
                </li>
                <li>
                    <NavbarSectionIcon sectionName="movies" iconName="navMoviesIcon" />
                </li>
                <li>
                    <NavbarSectionIcon sectionName="series" iconName="navTVSeriesIcon" />
                </li>
                <li>
                    <NavbarSectionIcon sectionName="bookmarked" iconName="navBookmarkIcon" />
                </li>
            </ul>
            <img src={userImage} alt="user" className="nav__user-img" />
        </aside>
    )
}

export default Sidebar;