import "./styles/App.css";
import Layout from "./pages/Layout.jsx";
import Home from "./containers/Home.jsx";
import Videos from "./containers/Videos.jsx";
import Bookmarked from "./containers/Bookmarked";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate} from "react-router-dom";
import SearchingResults from "./components/SearchingResults/index.js";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const App = () => {
    const isAnAccountLogged = useSelector(state => state.auth.isAnAccountLogged);
    const [params, setParams] = useSearchParams();
    const isSearchingVideo = params.get("search") ? true : false;

    return (
        <div className="app">
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/" element={isAnAccountLogged ? <Layout /> : <Navigate to="login" />} >
                    <Route index element={isSearchingVideo ? <SearchingResults />  :<Home />} />
                    <Route path="movies" element={isSearchingVideo ? <SearchingResults /> : <Videos />} />
                    <Route path="series" element={isSearchingVideo ? <SearchingResults />  : <Videos />} />
                    <Route path="bookmarked" element={isSearchingVideo ? <SearchingResults />  : <Bookmarked />} />
                </Route>
                <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
            </Routes>
        </div>
  );
}

export default App;
