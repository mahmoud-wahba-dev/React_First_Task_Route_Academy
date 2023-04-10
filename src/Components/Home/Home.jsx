import Navbar from '../Navbar/Navbar';
import HeroSec from '../HeroSec/HeroSec';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Location from '../Location/Location';
import Footer from '../Footer/Footer';
export default function Home() {
    return (
        <>
            <HeroSec />
            <Portfolio />
            <About />
            <Contact />
            <Location />
        </>
    )
}