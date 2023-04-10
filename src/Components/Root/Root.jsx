import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home';
export default function Root() {
    return (
        <>
            <Navbar />

            <Routes>

                <Route  path='/' element={<Home />} />
                <Route path='contact' element={<Contact />} />
                <Route path='about' element={<About />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

        
            <Footer />
        </>
    )
}