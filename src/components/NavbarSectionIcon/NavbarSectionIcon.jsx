import Icon from "../Icon/index.js";
import { NavLink } from "react-router-dom";

const NavbarSectionIcon = ({ sectionName, name }) => {

    return (
        <div>
            <NavLink
                to={sectionName}
                className={({isActive}) => isActive ? "icon-section-selected" : ""}
            >
                <Icon name={name}/>
            </NavLink>
        </div>
    )
}

export default NavbarSectionIcon;
