import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function LandingPageLayout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPageLayout;