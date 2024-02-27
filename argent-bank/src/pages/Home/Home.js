import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero /> 
                <Features />
            </main>
            <Footer />
        </>
    );
};

export default Home;