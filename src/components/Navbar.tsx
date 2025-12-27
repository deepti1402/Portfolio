
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';

const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-200/50 dark:border-slate-800/50'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <img src="/logo.svg" alt="DS Logo" className="h-10 w-10 object-contain group-hover:scale-110 transition-transform" />
                        <span className="text-xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400">
                            Deepti Singh
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-slate-700">
                            <ThemeToggle />
                            <a
                                href="/assets/resume.pdf"
                                download="Deepti_Singh_Resume.pdf"
                                className="flex items-center px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-500/25"
                            >
                                <Download size={16} className="mr-2" />
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white dark:bg-slate-900 shadow-xl border-t border-slate-100 dark:border-slate-800">
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="block text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="/assets/resume.pdf"
                            download="Deepti_Singh_Resume.pdf"
                            className="flex w-full items-center justify-center px-4 py-3 bg-brand-600 text-white rounded-lg font-medium"
                        >
                            <Download size={18} className="mr-2" />
                            Download Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

