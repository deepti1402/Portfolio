const Compliance = () => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Hero Section */}
            <div className="w-full px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-8">
                <div className="flex flex-col max-w-[1024px] flex-1">
                    <div className="@container mb-12 relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200/50 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-20 right-0 w-60 h-60 bg-pink-200/50 rounded-full blur-3xl"></div>

                        <div className="flex flex-col gap-8 py-10 lg:flex-row items-center relative z-10">
                            <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
                                <div className="flex flex-col gap-4 text-left">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-surface-dark border-2 border-primary/20 shadow-sm w-fit animate-bounce-slow">
                                        <span className="material-symbols-outlined text-primary text-lg">verified</span>
                                        <span className="text-primary text-xs font-extrabold uppercase tracking-wide">Compliance Expert</span>
                                    </div>
                                    <h1 className="text-text-main-light dark:text-white text-5xl font-black leading-tight tracking-tight drop-shadow-sm">
                                        Regulatory &amp; Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Compliance</span>
                                    </h1>
                                    <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-medium leading-relaxed max-w-lg">
                                        Specializing in <span className="text-secondary font-bold">NABH</span>, <span className="text-accent font-bold">AERB</span>, and <span className="text-primary font-bold">PNDT</span> protocols. I bring color to compliance by ensuring safety, integrity, and operational excellence! ✨
                                    </p>
                                </div>
                                <div className="flex gap-4 flex-wrap mt-2">
                                    <a href="/Deepti_Resume_Final.pdf" download="Deepti_Singh_Resume.pdf" className="flex min-w-[150px] cursor-pointer items-center justify-center rounded-2xl h-14 px-8 bg-text-main-light dark:bg-white text-white dark:text-surface-dark hover:scale-105 active:scale-95 text-base font-bold shadow-xl shadow-slate-200 dark:shadow-none transition-all duration-300">
                                        <span className="truncate">Download CV</span>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                                <div className="relative w-full max-w-md aspect-square">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-[2rem] transform rotate-3 scale-105 animate-wobble"></div>
                                    <div className="absolute inset-0 bg-white dark:bg-surface-dark rounded-[2rem] transform -rotate-2 shadow-xl overflow-hidden border-4 border-white dark:border-slate-700">
                                        <div
                                            className="w-full h-full bg-center bg-no-repeat bg-cover hover:scale-110 transition-transform duration-700"
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")`
                                            }}
                                        >
                                        </div>
                                    </div>
                                    {/* Floating badges */}
                                    <div className="absolute -right-4 -top-4 bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '0s' }}>
                                        <span className="material-symbols-outlined text-primary text-3xl">medical_services</span>
                                    </div>
                                    <div className="absolute -left-4 bottom-10 bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                                        <span className="material-symbols-outlined text-secondary text-3xl">shield</span>
                                    </div>
                                    <div className="absolute right-10 -bottom-6 bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                                        <span className="material-symbols-outlined text-accent text-3xl">assignment_turned_in</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 mb-12">
                            <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-sm border-b-4 border-primary hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-primary">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-bold uppercase tracking-wide">Audit Success</p>
                                </div>
                                <p className="text-text-main-light dark:text-white text-4xl font-black">100%</p>
                            </div>
                            <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-sm border-b-4 border-secondary hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-secondary">
                                        <span className="material-symbols-outlined">engineering</span>
                                    </div>
                                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-bold uppercase tracking-wide">Calibrations</p>
                                </div>
                                <p className="text-text-main-light dark:text-white text-4xl font-black">50+</p>
                            </div>
                            <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-sm border-b-4 border-accent hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-xl text-accent">
                                        <span className="material-symbols-outlined">history</span>
                                    </div>
                                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-bold uppercase tracking-wide">Experience</p>
                                </div>
                                <p className="text-text-main-light dark:text-white text-4xl font-black">3 Years</p>
                            </div>
                        </div>

                        {/* Expertise Section */}
                        <div className="flex flex-col items-center text-center gap-4 pb-10 pt-5">
                            <span className="text-secondary font-black tracking-wider uppercase text-sm bg-secondary/10 px-4 py-1 rounded-full">My Expertise</span>
                            <h2 className="text-text-main-light dark:text-white text-4xl font-black leading-tight tracking-tight">
                                Core Compliance Expertise
                            </h2>
                            <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-2xl font-medium">
                                Comprehensive management of regulatory requirements across critical medical domains.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
                            {/* NABH */}
                            <div className="relative group opacity-0 animate-unfold" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300 to-purple-300 rounded-[2rem] opacity-50 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                                <div className="relative flex flex-col h-full gap-5 rounded-[1.8rem] bg-white dark:bg-surface-dark p-8 shadow-sm transition-all duration-300">
                                    <div className="size-16 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/40 dark:to-surface-dark flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        <span className="material-symbols-outlined text-[32px]">verified_user</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-text-main-light dark:text-white text-2xl font-black">NABH</h3>
                                        <div className="h-1 w-12 bg-pink-300 rounded-full"></div>
                                        <p className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed">
                                            Keeping hospital standards sky-high! Managing logs, vendor contracts, and PM schedules with precision.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* AERB */}
                            <div className="relative group opacity-0 animate-unfold" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-[2rem] opacity-50 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                                <div className="relative flex flex-col h-full gap-5 rounded-[1.8rem] bg-white dark:bg-surface-dark p-8 shadow-sm transition-all duration-300">
                                    <div className="size-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/40 dark:to-surface-dark flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        <span className="material-symbols-outlined text-[32px]">radiology</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-text-main-light dark:text-white text-2xl font-black">AERB</h3>
                                        <div className="h-1 w-12 bg-purple-300 rounded-full"></div>
                                        <p className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed">
                                            Radiation safety is my priority. Ensuring X-ray quality assurance and TLD badge monitoring.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* PNDT */}
                            <div className="relative group opacity-0 animate-unfold" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-[2rem] opacity-50 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                                <div className="relative flex flex-col h-full gap-5 rounded-[1.8rem] bg-white dark:bg-surface-dark p-8 shadow-sm transition-all duration-300">
                                    <div className="size-16 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-900/40 dark:to-surface-dark flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        <span className="material-symbols-outlined text-[32px]">gavel</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-text-main-light dark:text-white text-2xl font-black">PNDT Act</h3>
                                        <div className="h-1 w-12 bg-teal-300 rounded-full"></div>
                                        <p className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed">
                                            Strict tracking & filing! I handle legal reporting and documentation for ultrasound machines.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compliance;
