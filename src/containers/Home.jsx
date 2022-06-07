import "../styles/Home.css";
import RecommendedSection from "../components/RecommendedSection/index.js";
import TrendingSection from '../components/TrendingSection/index.js'

const Home  = () => {
    return (
        <main className="home">
            <TrendingSection />
            <RecommendedSection />
        </main>
    )
}

export default Home;