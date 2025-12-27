import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col font-body text-text-main-light dark:text-text-main-dark bg-background-light dark:bg-background-dark transition-colors duration-300">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow flex flex-col w-full overflow-x-hidden pt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
