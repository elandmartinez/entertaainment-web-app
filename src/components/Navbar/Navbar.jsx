import "../../styles/Navbar.css";
import NavbarSectionIcon from "../NavbarSectionIcon/index.js";
import Icon from "../Icon/index.js";
import userImage from "../../assets/images/image-avatar.png"

const Sidebar = () => {

    return (
        <aside className="nav-bar">
            <Icon name="logo" className="nav__logo" />
            <ul className="nav__sections">
                <li>
                    <NavbarSectionIcon sectionName="/" name="navHomeIcon" />
                </li>
                <li>
                    <NavbarSectionIcon sectionName="movies" name="navMoviesIcon" />
                </li>
                <li>
                    <NavbarSectionIcon sectionName="series" name="navTVSeriesIcon" />
                </li>
                <li>
                    <NavbarSectionIcon sectionName="bookmarked" name="navBookmarkIcon" />
                </li>
            </ul>
            <img src={userImage} alt="user" className="nav__user-img" />
        </aside>
    )
}

export default Sidebar;
