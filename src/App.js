import "./styles/App.css";
import { Routes, Route, Navigate} from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import Home from "./containers/Home.jsx";
import Movies from "./containers/Movies.jsx";
import Series from "./containers/Series.jsx";
import Bookmarked from "./containers/Bookmarked";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp";
import SearchingResults from "./components/SearchingResults/index.js";
import { useAppProvider } from "./context/AppContext";


/*
    todo:
        * checkout the styles that seem to be affected when using hover: done
        * changed the show time of the play button in thumbnails: done
        * cleaned and re-strutured a bit the styles of RegularVideo and TrendingVideo: done
        * checkout variables, files and components names and improve them: done (not much to do)
        * fix the border-bottom line at the home, it seems that it slipped up: done
*/

const App = () => {
    const { isSearchingVideo, logged } = useAppProvider();

    return (
        <div className="app">
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/" element={logged ? <InitialPage /> : <Navigate to="login" />} >
                    <Route index element={isSearchingVideo ? <SearchingResults />  :<Home />} />
                    <Route path="movies" element={isSearchingVideo ? <SearchingResults /> : <Movies />} />
                    <Route path="series" element={isSearchingVideo ? <SearchingResults />  : <Series />} />
                    <Route path="bookmarked" element={isSearchingVideo ? <SearchingResults />  : <Bookmarked />} />
                </Route>
                <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
            </Routes>
        </div>
  );
}


export default App;
