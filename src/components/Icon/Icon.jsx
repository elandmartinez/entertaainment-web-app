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
import Logo from "../../assets/Icons/Logo";

const icons = {
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
    logo: Logo,
}

const Icon = ({ name, className }) => {
    const IconToLoad = icons[name];
    if(!IconToLoad) {
        console.log(name);
        throw new Error(`you wrote a non-existing icon, the ones available are: ${icons}`)
    }

    return (
        <IconToLoad className={className} />
    )
}

export default Icon;