import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="w-full pt-12 pb-16 md:py-20 overflow-hidden px-4 md:px-10 lg:px-20 relative">
            {/* Background blobs */}
            <div className="absolute top-0 left-[-100px] w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-[-100px] w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="layout-content-container flex flex-col max-w-[1100px] mx-auto w-full relative z-10">

                {/* Hero Section */}
                <div className="flex flex-col-reverse gap-10 md:gap-12 md:flex-row items-center justify-between">
                    <div className="flex flex-col gap-6 md:gap-8 flex-1 max-w-xl z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                        <div className="flex flex-col gap-4 text-left">
                            <div className="w-fit rounded-full bg-pink-100 dark:bg-pink-900/30 px-4 py-1.5 border border-pink-200 dark:border-pink-800">
                                <span className="text-xs font-bold uppercase tracking-wide text-primary flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">stars</span>
                                    3+ Years of Sparkle & Experience
                                </span>
                            </div>
                            <h1 className="text-text-main-light dark:text-white text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                                Hello, I'm <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Deepti Singh</span>
                            </h1>
                            <h2 className="text-text-muted-light dark:text-text-muted-dark text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                                A <span className="text-primary font-bold">Biomedical Engineer</span> blending technical precision with care. Ensuring patient safety through equipment maintenance, compliance, and cheerful clinical support.
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link
                                to="/contact" // Assuming resume download or contact
                                className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary-hover text-white text-base font-bold tracking-wide transition-all shadow-soft-pink hover:shadow-lg hover:-translate-y-1"
                            >
                                <span className="truncate mr-2">View Resume</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                            <Link
                                to="/contact"
                                className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-white dark:bg-gray-800 border-2 border-pink-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-base font-bold tracking-wide hover:bg-pink-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-1"
                            >
                                <span className="truncate">Contact Me</span>
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full md:w-auto flex-1 flex justify-center md:justify-end opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                        <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] animate-float">
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900 rounded-[2rem] rotate-3 scale-105 shadow-xl"></div>
                            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-[2rem] -rotate-2 scale-[1.02]"></div>
                            <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                    data-alt="Professional headshot of Deepti Singh"
                                    style={{ backgroundImage: `url("/images/profile.jpg")` }}
                                ></div>
                                <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-pink-100 dark:border-gray-700 flex items-center gap-2 animate-bounce-slow">
                                    <span className="material-symbols-outlined text-primary">medical_services</span>
                                    <span className="text-xs font-bold text-gray-800 dark:text-white">Biomedical Expert</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Competencies Section */}
                <section className="flex flex-col gap-10 py-12 md:py-16 relative z-10 mt-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                        <div className="flex flex-col gap-2">
                            <span className="text-primary font-bold uppercase tracking-wider text-sm">My Superpowers</span>
                            <h1 className="text-text-main-light dark:text-white text-3xl md:text-4xl font-black leading-tight">
                                Core Competencies
                            </h1>
                        </div>
                        <p className="text-text-muted-light dark:text-text-muted-dark max-w-md text-right hidden md:block font-medium">
                            Dedicated to the lifecycle management of medical devices with a touch of excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="group flex flex-1 gap-5 rounded-3xl border border-pink-100 dark:border-gray-700 bg-white dark:bg-[#2a1b26] p-8 flex-col shadow-sm hover:shadow-soft-pink transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                            <div className="size-14 rounded-2xl bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-[32px]">precision_manufacturing</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-text-main-light dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">Device Calibration</h2>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-relaxed">
                                    Precision maintenance ensuring device accuracy, reliability, and patient safety across various modalities.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group flex flex-1 gap-5 rounded-3xl border border-pink-100 dark:border-gray-700 bg-white dark:bg-[#2a1b26] p-8 flex-col shadow-sm hover:shadow-soft-pink transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
                            <div className="size-14 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-[32px]">verified_user</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-text-main-light dark:text-white text-xl font-bold leading-tight group-hover:text-secondary transition-colors">Regulatory Compliance</h2>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-relaxed">
                                    Strict adherence to healthcare standards (JCI, NABH) and safety protocols for hospital accreditation.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group flex flex-1 gap-5 rounded-3xl border border-pink-100 dark:border-gray-700 bg-white dark:bg-[#2a1b26] p-8 flex-col shadow-sm hover:shadow-soft-pink transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                            <div className="size-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-[32px]">monitor_heart</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-text-main-light dark:text-white text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors">Clinical Support</h2>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-relaxed">
                                    Providing hands-on technical assistance, troubleshooting, and training for medical staff with a smile.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Home;
