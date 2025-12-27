import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div className="flex-grow flex flex-col items-center w-full pt-10">
            <div className="layout-content-container flex flex-col max-w-[960px] w-full px-4 sm:px-10 py-8 gap-12">

                {/* Header */}
                <div className="flex flex-col gap-6 py-6 text-center items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-pink-200 dark:border-pink-900 shadow-sm animate-bounce-slow">
                        <span className="size-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">Open to Work</span>
                    </div>
                    <div className="flex flex-col gap-4 max-w-3xl">
                        <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">Skills & Expertise</span>
                        </h1>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-lg sm:text-xl font-medium leading-relaxed">
                            Bridging the gap between <span className="text-primary font-bold">Engineering</span> & <span className="text-secondary font-bold">Clinical Care</span> with a sprinkle of creativity and technical precision.
                        </p>
                    </div>
                </div>

                {/* Professional Competencies */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-primary">
                            <span className="material-symbols-outlined">engineering</span>
                        </div>
                        <h2 className="text-text-main-light dark:text-white text-2xl font-bold">Professional Competencies</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="group relative flex flex-col gap-4 rounded-3xl bg-white dark:bg-surface-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-slate-100 dark:border-slate-700 hover:border-pink-200 dark:hover:border-pink-500/50">
                            <div className="absolute right-0 top-0 size-24 bg-pink-50 dark:bg-pink-900/10 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
                            <div className="size-14 rounded-2xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-primary shadow-sm z-10 group-hover:rotate-6 transition-transform">
                                <span className="material-symbols-outlined text-3xl">build_circle</span>
                            </div>
                            <div className="z-10">
                                <h3 className="text-text-main-light dark:text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors">Maintenance</h3>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Preventive & corrective care for critical devices.</p>
                            </div>
                        </div>
                        <div className="group relative flex flex-col gap-4 rounded-3xl bg-white dark:bg-surface-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-slate-100 dark:border-slate-700 hover:border-secondary hover:border-opacity-50">
                            <div className="absolute right-0 top-0 size-24 bg-purple-50 dark:bg-purple-900/10 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
                            <div className="size-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-secondary shadow-sm z-10 group-hover:rotate-6 transition-transform">
                                <span className="material-symbols-outlined text-3xl">square_foot</span>
                            </div>
                            <div className="z-10">
                                <h3 className="text-text-main-light dark:text-white text-lg font-bold mb-2 group-hover:text-secondary transition-colors">Calibration & QA</h3>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Ensuring accuracy via rigorous testing.</p>
                            </div>
                        </div>
                        <div className="group relative flex flex-col gap-4 rounded-3xl bg-white dark:bg-surface-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-slate-100 dark:border-slate-700 hover:border-cyan-200 dark:hover:border-cyan-500/50">
                            <div className="absolute right-0 top-0 size-24 bg-cyan-50 dark:bg-cyan-900/10 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
                            <div className="size-14 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-accent shadow-sm z-10 group-hover:rotate-6 transition-transform">
                                <span className="material-symbols-outlined text-3xl">verified_user</span>
                            </div>
                            <div className="z-10">
                                <h3 className="text-text-main-light dark:text-white text-lg font-bold mb-2 group-hover:text-accent transition-colors">Compliance</h3>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">FDA, ISO 13485, and JCI safety standards.</p>
                            </div>
                        </div>
                        <div className="group relative flex flex-col gap-4 rounded-3xl bg-white dark:bg-surface-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-slate-100 dark:border-slate-700 hover:border-amber-200 dark:hover:border-amber-500/50">
                            <div className="absolute right-0 top-0 size-24 bg-amber-50 dark:bg-amber-900/10 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
                            <div className="size-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500 shadow-sm z-10 group-hover:rotate-6 transition-transform">
                                <span className="material-symbols-outlined text-3xl">support_agent</span>
                            </div>
                            <div className="z-10">
                                <h3 className="text-text-main-light dark:text-white text-lg font-bold mb-2 group-hover:text-amber-500 transition-colors">Clinical Support</h3>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Technical liaison for medical staff.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid for Soft Skills & Regulatory */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Soft Skills */}
                    <section className="flex flex-col gap-4 h-full">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-secondary">
                                <span className="material-symbols-outlined">psychology_alt</span>
                            </div>
                            <h2 className="text-text-main-light dark:text-white text-2xl font-bold">Soft Skills</h2>
                        </div>
                        <div className="flex-1 bg-white dark:bg-surface-dark border-2 border-slate-100 dark:border-slate-700 rounded-3xl p-8 shadow-sm relative overflow-hidden group hover:border-secondary transition-colors">
                            <div className="absolute -right-10 -bottom-10 size-40 bg-purple-50 dark:bg-purple-900/10 rounded-full transition-transform group-hover:scale-110"></div>
                            <div className="flex flex-wrap gap-3 relative z-10">
                                {["Communication 💬", "Problem Solving 🧩", "Time Management ⏳", "Leadership 🚀", "Adaptability 🦎", "Critical Thinking 🧠"].map((skill, index) => (
                                    <div key={index} className="px-5 py-2.5 rounded-full bg-slate-50 dark:bg-slate-800 text-text-main-light dark:text-text-main-dark text-sm font-bold border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform cursor-default shadow-sm hover:border-primary hover:text-primary dark:hover:text-primary">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Regulatory Knowledge */}
                    <section className="flex flex-col gap-4 h-full">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600">
                                <span className="material-symbols-outlined">gavel</span>
                            </div>
                            <h2 className="text-text-main-light dark:text-white text-2xl font-bold">Regulatory Knowledge</h2>
                        </div>
                        <div className="flex-1 bg-white dark:bg-surface-dark border-2 border-slate-100 dark:border-slate-700 rounded-3xl p-8 shadow-sm flex flex-col justify-center relative overflow-hidden group hover:border-emerald-200 transition-colors">
                            <div className="absolute -right-10 -top-10 size-40 bg-emerald-50 dark:bg-emerald-900/10 rounded-full transition-transform group-hover:scale-110"></div>
                            <ul className="flex flex-col gap-4 relative z-10">
                                {[
                                    { name: "ISO 13485", sub: "(QMS for Medical Devices)" },
                                    { name: "JCI Accreditation", sub: "" },
                                    { name: "IEC 60601", sub: "(Medical Equipment)" },
                                    { name: "FDA 21 CFR Part 820", sub: "" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                                        <div className="size-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                            <span className="material-symbols-outlined text-lg">check</span>
                                        </div>
                                        <span className="text-text-main-light dark:text-white font-bold">
                                            {item.name} <span className="text-xs font-normal text-text-muted-light ml-1 block sm:inline">{item.sub}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Software Tools */}

                {/* Call to Action */}
                <div className="w-full flex justify-center py-6">
                    <div className="flex flex-col items-center gap-6 text-center p-10 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-surface-dark dark:to-background-dark rounded-[2rem] border-2 border-white dark:border-slate-700 shadow-xl w-full">
                        <div className="size-16 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-3xl animate-wobble">👋</div>
                        <h3 className="text-3xl font-black text-text-main-light dark:text-white">Interested in my work?</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark max-w-lg font-medium">I'm currently open to new opportunities in biomedical engineering and clinical technology management.</p>
                        <div className="flex flex-wrap justify-center gap-4 mt-2">
                            <Link to="/contact" className="flex items-center gap-2 cursor-pointer overflow-hidden rounded-full h-12 px-8 bg-text-main-light dark:bg-white hover:bg-primary dark:hover:bg-primary hover:text-white text-white dark:text-slate-900 text-sm font-bold transition-all shadow-lg hover:scale-105">
                                <span className="material-symbols-outlined text-lg">mail</span>
                                <span>Contact Me</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
