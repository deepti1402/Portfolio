const Equipment = () => {
    return (
        <div className="flex h-full grow flex-col pt-10">
            <div className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-8">
                <div className="flex flex-col max-w-[1200px] flex-1">

                    {/* Hero Card */}
                    <div className="@container mb-16">
                        <div className="relative flex min-h-[360px] flex-col gap-6 overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat items-center justify-center p-8 md:p-16 text-center shadow-soft-pink ring-4 ring-white dark:ring-pink-900" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXqlRgz-YT6qCkdJdvXM1CVlgRukEn8mx2N9uMYlRyFdxMWusxSyY6t6Dj9n85R2b-Fdw-F1ja7BRR59tpFYg-gFESRK1LyxQx6UM9_kXV0B5zc3KVyr6BUkO9n4Z7G0vDsFlbVwqNe44Z76ln0hiV1zIbOAOISXA3j-MuBuGocNvbG8E6lQKV--brt-zKrjXR9Orzx8cjHF5bPM4kb3DtOgL_VSeJK-FKbmcyB6KfXO_khXqYf9-xZkW7OFkCaojsWvixRqzhmrA")` }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-blue-500/60 mix-blend-multiply z-0"></div>
                            <div className="absolute inset-0 bg-black/10 z-0"></div>

                            <div className="flex flex-col gap-4 max-w-3xl z-10">
                                <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold w-fit mx-auto mb-2 animate-pulse">
                                    <span className="material-symbols-outlined text-[18px]">verified</span> Biomedical Engineer
                                </div>
                                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-md">
                                    Healing Machines & <br />Happy Hospitals
                                </h1>
                                <h2 className="text-pink-50 text-lg md:text-xl font-semibold leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                                    Bringing color and precision to medical equipment maintenance, ensuring every heartbeat counts.
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Section Header */}
                    <div className="mb-10 text-center relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent -z-10"></div>
                        <span className="bg-background-light dark:bg-background-dark px-6 text-primary font-black uppercase tracking-widest text-sm">Portfolio Showcase</span>
                        <h2 className="text-text-main-light dark:text-white text-3xl md:text-4xl font-black mt-2 mb-4">Equipment Wonderland</h2>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-2xl mx-auto font-medium">
                            Step into my colorful collection of medical technologies where precision meets care.
                        </p>
                    </div>

                    {/* Equipment Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">

                        {/* Card 1: Critical Care */}
                        <div className="group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-surface-dark transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(244,63,94,0.3)] overflow-hidden border-2 border-transparent hover:border-pink-200 dark:hover:border-pink-800">
                            <div className="h-56 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhMMZCcUmeZDTI6YjcFcAOAR8wpyvG2HecgnperhyzejakNJWuNjLiJkNIlLIlcHAdn1oDidtkMFi--yOps8Gx5ESP3wM28t8ej4HZrqMfVYn00rf50UvmWEpurGCEw9QCO_rAmWWNpitAAEsptQeAEuttUymre_Q_QzPX6aD2B3i4sMSHNSMtJgAPIt8pdyCd_LfEpDaSDoQy8UZ7HkMSMcMpUZgMefns5JIingPrXGToUG875ZyDjD4xGXAoCXfJRcSgSuib7Xs")` }}></div>
                                <div className="absolute inset-0 bg-primary/80 mix-blend-overlay opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-dark via-transparent to-transparent"></div>
                                <div className="absolute top-6 left-6 z-10">
                                    <div className="size-16 rounded-2xl bg-white dark:bg-pink-900 text-primary shadow-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-[32px]">favorite</span>
                                    </div>
                                </div>
                                <div className="absolute top-6 right-6 z-10">
                                    <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-black uppercase tracking-wider shadow-sm">Critical Care</span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 px-8 pb-8 pt-2">
                                <h3 className="text-2xl font-black text-text-main-light dark:text-white mb-2 group-hover:text-primary transition-colors">Life-Support Magic</h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark font-medium mb-6">Keeping the rhythm of life steady with high-precision maintenance for critical systems.</p>
                                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-2xl p-5 mb-4 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition-colors duration-300">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">stars</span> Key Expertise
                                    </h4>
                                    <ul className="space-y-3">
                                        {['Ventilators (Invasive & Non-invasive)', 'Anesthesia Workstations', 'Defibrillators & AEDs'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-text-main-light dark:text-pink-100 transition-transform duration-300 group-hover:translate-x-1" style={{ transitionDelay: `${i * 75}ms` }}>
                                                <span className="size-6 rounded-full bg-white dark:bg-pink-800 flex items-center justify-center text-primary shadow-sm"><span className="material-symbols-outlined text-[14px]">check</span></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Monitoring */}
                        <div className="group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-surface-dark transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(139,92,246,0.3)] overflow-hidden border-2 border-transparent hover:border-secondary dark:hover:border-purple-800">
                            <div className="h-56 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3ZZk5Rf0Dn3aVnj_b60djHriorfw2WDSI6ey7q1fPFD6HVJHECYPAd79JkSCBZTfH0XnX-1Z4wrTzqnX_qTcz1SzIzAmdH68EpYFWZLeI5xW4b617b6GDZNUIYZtPKQEJAv_1PfakYq-_4rEH2Sxdp5JaJGccud8DLeL8PHuHWvifPLWweKkpBbjZMy5zZ_rgrzYF3_J3VDtmzJwDxkOCxHlSkbhyDojBi5HLSRpRcm4a3OYOa_8P_Hz-BuV9NjmHi3NK2SwZSPM")` }}></div>
                                <div className="absolute inset-0 bg-secondary/80 mix-blend-overlay opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-dark via-transparent to-transparent"></div>
                                <div className="absolute top-6 left-6 z-10">
                                    <div className="size-16 rounded-2xl bg-white dark:bg-purple-900 text-secondary shadow-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-[32px]">ecg</span>
                                    </div>
                                </div>
                                <div className="absolute top-6 right-6 z-10">
                                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-black uppercase tracking-wider shadow-sm">Real-time</span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 px-8 pb-8 pt-2">
                                <h3 className="text-2xl font-black text-text-main-light dark:text-white mb-2 group-hover:text-secondary transition-colors">Patient Watchers</h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark font-medium mb-6">Ensuring every beep means something with accurately calibrated monitoring systems.</p>
                                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-5 mb-4 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors duration-300">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">stars</span> Key Expertise
                                    </h4>
                                    <ul className="space-y-3">
                                        {['Multipara Patient Monitors', 'ECG/EKG Machines', 'Pulse Oximeters & Capnography'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-text-main-light dark:text-purple-100 transition-transform duration-300 group-hover:translate-x-1" style={{ transitionDelay: `${i * 75}ms` }}>
                                                <span className="size-6 rounded-full bg-white dark:bg-purple-800 flex items-center justify-center text-secondary shadow-sm"><span className="material-symbols-outlined text-[14px]">bolt</span></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Imaging */}
                        <div className="group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-surface-dark transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.3)] overflow-hidden border-2 border-transparent hover:border-accent dark:hover:border-cyan-800">
                            <div className="h-56 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDmU-BzKydu41-fkx4gTdjJ9d41ILqKg3F9lYukKEKZbBRacSgYSdgbBxDVee3d0X7R9wvBYQvVPfl3M_GKb2bhl87S62a59izuoIwhnZFYNYo90Gx0BrJroa9rNsP0aA9BqHgBvH-ZJfLCXRIKvKc1edsMoRVmm7CFqJK9iH8sSdLKal68rln6qX-x3hvPcfDLhJ5ubEKwcC2VRV3oTaIWv1Q3ZFvYYUwlLADUyowKQDBbVRLZoJZkLpIVslxNSic2NZf4nWMTtQ")` }}></div>
                                <div className="absolute inset-0 bg-accent/80 mix-blend-overlay opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-dark via-transparent to-transparent"></div>
                                <div className="absolute top-6 left-6 z-10">
                                    <div className="size-16 rounded-2xl bg-white dark:bg-cyan-900 text-accent shadow-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-[32px]">radiology</span>
                                    </div>
                                </div>
                                <div className="absolute top-6 right-6 z-10">
                                    <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-600 text-xs font-black uppercase tracking-wider shadow-sm">Imaging</span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 px-8 pb-8 pt-2">
                                <h3 className="text-2xl font-black text-text-main-light dark:text-white mb-2 group-hover:text-accent transition-colors">Diagnostic Detectives</h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark font-medium mb-6">Crystal clear imaging and precise analytics for the perfect diagnosis.</p>
                                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl p-5 mb-4 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30 transition-colors duration-300">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">stars</span> Key Expertise
                                    </h4>
                                    <ul className="space-y-3">
                                        {['Ultrasound & Doppler Systems', 'Digital X-Ray (Maintenance)', 'Blood Gas Analyzers'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-text-main-light dark:text-cyan-100 transition-transform duration-300 group-hover:translate-x-1" style={{ transitionDelay: `${i * 75}ms` }}>
                                                <span className="size-6 rounded-full bg-white dark:bg-cyan-800 flex items-center justify-center text-accent shadow-sm"><span className="material-symbols-outlined text-[14px]">visibility</span></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Utility */}
                        <div className="group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-surface-dark transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.3)] overflow-hidden border-2 border-transparent hover:border-amber-200 dark:hover:border-amber-800">
                            <div className="h-56 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_-VPSPwMDKa4BK6P6YSEEO6ZLbigLdzydi2gM3i4K9mnU9sA9-pdBBn_qXRqgY3hKPlrrtO8rNuyiyIAreTpUYJEZegTkofYUGoonCEJ1lF2-pSYYBK4SiF7F2F9yYtjT0j3jhV3IlGHfRiKw_uchLdGlGW-x6iMbUtl6vmmhYvUfda4DbGPUTOU0PlGkLbuoN-gPUyXpIlSg2ghM3ux3jBz1Hi79iT7xd_4qzl1-jCV15M_p6_ZZt6Aa85LJaIdKSX4IFie50Vk")` }}></div>
                                <div className="absolute inset-0 bg-amber-500/80 mix-blend-overlay opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-dark via-transparent to-transparent"></div>
                                <div className="absolute top-6 left-6 z-10">
                                    <div className="size-16 rounded-2xl bg-white dark:bg-amber-900 text-amber-500 shadow-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-[32px]">plumbing</span>
                                    </div>
                                </div>
                                <div className="absolute top-6 right-6 z-10">
                                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-xs font-black uppercase tracking-wider shadow-sm">Utility</span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 px-8 pb-8 pt-2">
                                <h3 className="text-2xl font-black text-text-main-light dark:text-white mb-2 group-hover:text-amber-500 transition-colors">Hospital Backbone</h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark font-medium mb-6">Managing the invisible flows of gas and sterility that keep the hospital running.</p>
                                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 mb-4 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors duration-300">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">stars</span> Key Expertise
                                    </h4>
                                    <ul className="space-y-3">
                                        {['Medical Gas Pipeline Systems', 'Autoclaves & Sterilizers', 'Surgical Lights & Tables'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-text-main-light dark:text-amber-100 transition-transform duration-300 group-hover:translate-x-1" style={{ transitionDelay: `${i * 75}ms` }}>
                                                <span className="size-6 rounded-full bg-white dark:bg-amber-800 flex items-center justify-center text-amber-500 shadow-sm"><span className="material-symbols-outlined text-[14px]">settings</span></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;
