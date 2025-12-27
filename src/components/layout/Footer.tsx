const Footer = () => {
    return (
        <footer className="w-full border-t border-pink-100 dark:border-pink-900/30 bg-white dark:bg-surface-dark py-10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="size-8 text-primary p-1.5 flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl">medical_services</span>
                    </div>
                    <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium">
                        © {new Date().getFullYear()} Deepti Singh. Crafted with <span className="text-primary">♥</span> and Precision.
                    </span>
                </div>

                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/deeptisingh1402/"
                        className="size-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-white/5 text-text-muted-light dark:text-text-muted-dark hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <span className="font-bold text-xs">in</span>
                    </a>
                    <a
                        href="mailto:deeptisd123@gmail.com"
                        className="size-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-white/5 text-text-muted-light dark:text-text-muted-dark hover:bg-secondary hover:text-white dark:hover:bg-secondary dark:hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label="Email"
                    >
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
