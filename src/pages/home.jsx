import NavBar from '../components/navbar';
import HeroSection from '../components/hero_section';
import Problems from '../components/problems';
import Features from '../components/features';
import JoinSection from '../components/join_section';
import Footer from '../components/footer';
import Download from '../components/download';





function Home() {
    return (
        <>
        <NavBar />

        <HeroSection />
        <Problems />
        <Features />
        <Download />
        <JoinSection />
        <Footer />
        </>
    );
}

export default Home;