import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <div className="flex-grow flex flex-col items-center w-full pt-10">
            {/* Background elements */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            </div>

            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-10">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-body font-semibold">
                    <Link to="/" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary bg-white dark:bg-surface-dark px-3 py-1 rounded-full shadow-sm">Home</Link>
                    <span className="text-primary font-black">/</span>
                    <span className="text-primary bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full">Experience Details</span>
                </div>

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 pb-10 border-b-2 border-dashed border-border-light dark:border-border-dark relative">
                    <div className="flex flex-col gap-6 max-w-3xl z-10">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-text-main-light dark:text-text-main-dark">
                            Biomedical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent">Superpowers</span>
                            <span className="text-4xl align-top animate-bounce inline-block ml-2">✨</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-2xl font-body font-medium">
                            Hello! I'm Deepti. I spend my days ensuring critical care equipment is happy and healthy. With 3 years of hands-on magic, I specialize in keeping patients safe through rigorous maintenance, compliance wizardry, and rapid troubleshooting!
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 justify-start lg:justify-center z-10 flex-wrap">
                        <div className="group flex items-center lg:justify-end gap-3 hover:-translate-x-2 transition-transform duration-300">
                            <div className="text-right">
                                <span className="block text-3xl font-black text-primary">3+</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-text-muted-light">Years</span>
                            </div>
                            <div className="size-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-primary border-2 border-primary">
                                <span className="material-symbols-outlined">calendar_month</span>
                            </div>
                        </div>
                        <div className="group flex items-center lg:justify-end gap-3 hover:-translate-x-2 transition-transform duration-300">
                            <div className="text-right">
                                <span className="block text-3xl font-black text-secondary">500+</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-text-muted-light">Assets</span>
                            </div>
                            <div className="size-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-secondary border-2 border-secondary">
                                <span className="material-symbols-outlined">inventory_2</span>
                            </div>
                        </div>
                        <div className="group flex items-center lg:justify-end gap-3 hover:-translate-x-2 transition-transform duration-300">
                            <div className="text-right">
                                <span className="block text-3xl font-black text-accent">100%</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-text-muted-light">Compliance</span>
                            </div>
                            <div className="size-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-accent border-2 border-accent">
                                <span className="material-symbols-outlined">verified_user</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Preventive Maintenance */}
                    <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-3xl border-2 border-pink-200 dark:border-pink-800 shadow-card-pink hover:shadow-playful-hover hover:-translate-y-1 transition-all duration-300 p-8 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 opacity-5 transform rotate-12 scale-150 pointer-events-none">
                            <span className="material-symbols-outlined text-[150px] text-primary">medical_services</span>
                        </div>
                        <div className="mb-6 inline-flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 text-white shadow-lg shadow-pink-300/50 transform group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl">monitor_heart</span>
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-text-main-light dark:text-white">Preventive Maintenance</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark font-body mb-6 leading-relaxed">
                            Keeping machines happy before they get grumpy! Proactive scheduling to minimize downtime.
                        </p>
                        <ul className="flex flex-col gap-4 mb-8 flex-grow">
                            <li className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                <span>Scheduled PM on critical life support (Ventilators, Anesthesia).</span>
                            </li>
                            <li className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                <span>Battery endurance testing & replacement.</span>
                            </li>
                            <li className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                <span>Audit-ready service logs in CMMS.</span>
                            </li>
                        </ul>
                        <div className="pt-6 border-t-2 border-dashed border-pink-100 dark:border-pink-900">
                            <p className="text-xs font-black uppercase tracking-wider text-pink-400 mb-3">Key Equipment</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs font-bold border border-pink-200 dark:border-pink-800">Ventilators</span>
                                <span className="px-3 py-1.5 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs font-bold border border-pink-200 dark:border-pink-800">Syringe Pumps</span>
                                <span className="px-3 py-1.5 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs font-bold border border-pink-200 dark:border-pink-800">Defibrillators</span>
                            </div>
                        </div>
                    </div>

                    {/* Corrective Maintenance */}
                    <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-3xl border-2 border-purple-200 dark:border-purple-800 shadow-card-purple hover:shadow-playful-hover hover:-translate-y-1 transition-all duration-300 p-8 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 opacity-5 transform rotate-12 scale-150 pointer-events-none">
                            <span className="material-symbols-outlined text-[150px] text-secondary">build_circle</span>
                        </div>
                        <div className="mb-6 inline-flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg shadow-purple-300/50 transform group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl">handyman</span>
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-text-main-light dark:text-white">Corrective Maintenance</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark font-body mb-6 leading-relaxed">
                            The equipment doctor is in! Rapid response troubleshooting in high-pressure environments.
                        </p>
                        <ul className="flex flex-col gap-4 mb-8 flex-grow">
                            <li className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                                <span>Emergency breakdown support (ICU, OT, ER).</span>
                            </li>
                            <li className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                                <span>Root Cause Analysis (RCA) on failures.</span>
                            </li>
                            <li className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                                <span>Vendor coordination for complex repairs.</span>
                            </li>
                        </ul>
                        <div className="pt-6 border-t-2 border-dashed border-purple-100 dark:border-purple-900">
                            <p className="text-xs font-black uppercase tracking-wider text-purple-400 mb-3">Super Skills</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-800">Troubleshooting</span>
                                <span className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-800">Soldering</span>
                                <span className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-800">Circuit Analysis</span>
                            </div>
                        </div>
                    </div>

                    {/* Calibration & Quality */}
                    <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-3xl border-2 border-cyan-200 dark:border-cyan-800 shadow-card-cyan hover:shadow-playful-hover hover:-translate-y-1 transition-all duration-300 p-8 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 opacity-5 transform rotate-12 scale-150 pointer-events-none">
                            <span className="material-symbols-outlined text-[150px] text-accent">fact_check</span>
                        </div>
                        <div className="mb-6 inline-flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 text-white shadow-lg shadow-cyan-300/50 transform group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl">tune</span>
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-text-main-light dark:text-white">Calibration & Quality</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark font-body mb-6 leading-relaxed">
                            Accuracy is everything. Verifying that every beep and boop meets strict safety standards.
                        </p>
                        <ul className="flex flex-col gap-4 mb-8 flex-grow">
                            <li className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-accent shrink-0">check_circle</span>
                                <span>Performance verification with Biomedical Analyzers.</span>
                            </li>
                            <li className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-accent shrink-0">check_circle</span>
                                <span>Electrical Safety Testing (IEC 60601/62353).</span>
                            </li>
                            <li className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-accent shrink-0">check_circle</span>
                                <span>NABH/JCI accreditation audit prep.</span>
                            </li>
                        </ul>
                        <div className="pt-6 border-t-2 border-dashed border-cyan-100 dark:border-cyan-900">
                            <p className="text-xs font-black uppercase tracking-wider text-cyan-400 mb-3">Tools & Standards</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 text-xs font-bold border border-cyan-200 dark:border-cyan-800">ISO 13485</span>
                                <span className="px-3 py-1.5 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 text-xs font-bold border border-cyan-200 dark:border-cyan-800">Fluke</span>
                                <span className="px-3 py-1.5 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 text-xs font-bold border border-cyan-200 dark:border-cyan-800">Rigel</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Banner */}
                <div className="w-full mt-4 bg-white dark:bg-surface-dark border-2 border-dashed border-pink-200 dark:border-pink-800 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative shadow-sm mb-12">
                    <div className="absolute -left-2 -top-2 size-6 rounded-full bg-primary animate-pulse"></div>
                    <div className="absolute -right-2 -bottom-2 size-6 rounded-full bg-secondary animate-pulse animation-delay-500"></div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-black text-text-main-light dark:text-text-main-dark flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">auto_awesome</span>
                            Tech Stack
                        </h3>
                        <p className="text-sm font-bold text-text-muted-light dark:text-text-muted-dark font-body">Other cool things I use to make magic happen.</p>
                    </div>
                    <div className="flex flex-wrap gap-3 md:max-w-xl md:justify-end">
                        <div className="group flex h-10 items-center justify-center gap-x-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all cursor-default">
                            <span className="material-symbols-outlined text-lg text-gray-400 group-hover:text-green-600 transition-colors">table_view</span>
                            <p className="text-gray-600 dark:text-gray-300 group-hover:text-green-600 text-sm font-bold">Microsoft Excel</p>
                        </div>
                        <div className="group flex h-10 items-center justify-center gap-x-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-default">
                            <span className="material-symbols-outlined text-lg text-gray-400 group-hover:text-blue-600 transition-colors">description</span>
                            <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 text-sm font-bold">Microsoft Word</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
