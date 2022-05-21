import EmptyBookmarkIcon from "../../assets/Icons/EmptyBookmarkIcon";
import FullBookmarkIcon from "../../assets/Icons/FullBookmarkIcon";
import MovieCategoryIcon from "../../assets/Icons/MovieCategoryIcon";
import NavBookmarkIcon from "../../assets/Icons/NavBookmarkIcon";
import NavHomeIcon from "../../assets/Icons/NavHomeIcon";
import NavMoviesIcon from "../../assets/Icons/NavMoviesIcon";
import NavTVSeriesIcon from "../../assets/Icons/NavTVSeriesIcon";
import PlayIcon from "../../assets/Icons/PlayIcon";
import SearchIcon from "../../assets/Icons/SearchIcon";
import TVCategoryIcon from "../../assets/Icons/TVCategoryIcon";
import LogoIcon from "../../assets/Icons/LogoIcon.jsx";

const possibleIcons = {
    emptyBookmarkIcon: EmptyBookmarkIcon,
    fullBookmarkIcon: FullBookmarkIcon,
    movieCategoryIcon: MovieCategoryIcon,
    navBookmarkIcon: NavBookmarkIcon,
    navHomeIcon: NavHomeIcon,
    navMoviesIcon: NavMoviesIcon,
    navTVSeriesIcon: NavTVSeriesIcon,
    playIcon: PlayIcon,
    searchIcon: SearchIcon,
    tVCategoryIcon: TVCategoryIcon,
    logoIcon: LogoIcon,
}

const Icon = ({ iconName, iconClassName }) => {
    const IconToLoad = possibleIcons[iconName];
    if(!IconToLoad) {
        console.log(iconName);
        throw new Error(`you wrote a non-existing icon, the ones available are: ${possibleIcons}`)
    }

    return (
        <IconToLoad className={iconClassName} />
    )
}

export default Icon;