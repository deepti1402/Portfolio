import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ui/theme-toggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Skills', path: '/skills' },
        { name: 'Equipment', path: '/equipment' },
        { name: 'Compliance', path: '/compliance' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md shadow-sm border-b border-pink-100 dark:border-pink-900/30 py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="size-10 flex items-center justify-center text-primary group-hover:rotate-12 transition-transform duration-300">
                            <span className="material-symbols-outlined text-4xl">medical_services</span>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tight text-text-main-light dark:text-white">
                            Deepti Singh
                        </h2>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => `
                                    text-sm font-bold transition-all duration-300 relative group
                                    ${isActive
                                        ? 'text-primary dark:text-primary'
                                        : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary'
                                    }
                                `}
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                        <a
                            href="/Deepti_Resume_Final.pdf"
                            download="Deepti_Singh_Resume.pdf"
                            className="flex items-center justify-center rounded-full h-10 px-6 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <span className="material-symbols-outlined text-sm mr-2">download</span>
                            Resume
                        </a>
                        <ThemeToggle />
                    </nav>

                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-text-main-light dark:text-white hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-pink-100 dark:border-pink-900/30 shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="flex flex-col py-4 px-4 gap-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => `
                                px-4 py-3 rounded-xl text-base font-bold transition-colors flex items-center gap-3
                                ${isActive
                                        ? 'bg-pink-50 dark:bg-pink-900/20 text-primary'
                                        : 'text-text-muted-light dark:text-text-muted-dark hover:bg-gray-50 dark:hover:bg-white/5'
                                    }
                            `}
                            >
                                {/* Optional icons for mobile menu */}
                                <span className="material-symbols-outlined text-xl">
                                    {link.name === 'Home' ? 'home' :
                                        link.name === 'Experience' ? 'work' :
                                            link.name === 'Skills' ? 'handyman' :
                                                link.name === 'Equipment' ? 'medical_services' :
                                                    link.name === 'Compliance' ? 'verified_user' : 'mail'}
                                </span>
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="pt-2 mt-2 border-t border-pink-100 dark:border-pink-900/30">
                            <a
                                href="/Deepti_Resume_Final.pdf"
                                download="Deepti_Singh_Resume.pdf"
                                className="flex w-full items-center justify-center rounded-xl h-12 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold shadow-md"
                            >
                                <span className="material-symbols-outlined mr-2">download</span>
                                Download Resume
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
