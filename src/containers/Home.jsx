import "../styles/Home.css";
import RecommendedSection from "../components/RecommendedSection/index.js";
import TrendingSection from '../components/TrendingSection/index.js'
import { useAppProvider } from "../context/AppContext.js";

const Home  = () => {
    const { logged } = useAppProvider();
    console.log(logged);
    return (
        <main className="home">
            <TrendingSection />
            <RecommendedSection />
        </main>
    )
}

export default Home;