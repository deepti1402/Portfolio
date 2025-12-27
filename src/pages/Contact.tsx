const Contact = () => {
    return (
        <div className="flex-grow w-full pt-10 relative overflow-hidden flex flex-col items-center">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 dark:bg-pink-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 dark:bg-purple-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-16 relative z-10">

                {/* Career Objective Section */}
                <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-pink-200 dark:border-pink-800 shadow-sm w-fit animate-fade-in-up">
                            <span className="material-symbols-outlined text-primary text-lg">flag</span>
                            <span className="text-xs font-bold uppercase tracking-wide text-primary">Career Objective</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-text-main-light dark:text-white leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Purpose</span>, <br />
                            Powered by <span className="underline decoration-wavy decoration-accent decoration-4">Precision</span>.
                        </h1>
                        <p className="text-lg text-text-muted-light dark:text-text-muted-dark font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            To leverage my <span className="font-bold text-text-main-light dark:text-white">biomedical engineering expertise</span> in a challenging environment where I can ensure the reliability of critical healthcare technology, optimize patient safety standards, and contribute to seamless clinical operations.
                        </p>

                        {/* Key Objectives Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                            <div className="p-4 rounded-2xl bg-white dark:bg-surface-dark border border-pink-100 dark:border-pink-900/30 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="size-8 rounded-full bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-sm">trending_up</span>
                                    </div>
                                    <h3 className="font-bold text-text-main-light dark:text-white">Growth</h3>
                                </div>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Continuous learning in medical technology advancements.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white dark:bg-surface-dark border border-purple-100 dark:border-purple-900/30 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="size-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-secondary">
                                        <span className="material-symbols-outlined text-sm">handshake</span>
                                    </div>
                                    <h3 className="font-bold text-text-main-light dark:text-white">Impact</h3>
                                </div>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Enhancing patient care quality through technical excellence.</p>
                            </div>
                        </div>
                    </div>

                    {/* Fun Illustration / Image */}
                    <div className="relative w-full max-w-md aspect-square flex items-center justify-center animate-float">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-purple-500/20 to-accent/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10 w-full h-full bg-white dark:bg-surface-dark rounded-[3rem] shadow-2xl border-4 border-white dark:border-slate-700 overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFwQ4B3g_vjXIBqWkKy8yYp5O5U44P72FjXhK4Wv4y7YtBwz3k6wXF6vC9f9Yj5q5L4p4W7E2r2T7y3U7_I4n4O6q3A6j8K7l9P1m0N2B5V3H4Z8xJ9c1d2e3f4g5H6i7j8k9l0m1n")` }} // Using a placeholder or existing image
                            ></div>
                            {/* Overlay content if no image */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-white dark:from-surface-dark dark:to-background-dark p-8 text-center opacity-100">
                                <span className="material-symbols-outlined text-6xl text-primary mb-4 animate-bounce">rocket_launch</span>
                                <h3 className="text-2xl font-black text-text-main-light dark:text-white">Ready to Launch!</h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark font-medium mt-2">Open to opportunities that challenge and inspire.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col md:flex-row gap-10 bg-white dark:bg-surface-dark rounded-[3rem] p-8 md:p-12 shadow-xl shadow-pink-100 dark:shadow-none border border-pink-50 dark:border-pink-900/30">
                    <div className="flex-1 flex flex-col gap-6">
                        <div>
                            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Get in Touch</span>
                            <h2 className="text-3xl md:text-4xl font-black text-text-main-light dark:text-white mt-2">Let's Connect!</h2>
                            <p className="text-text-muted-light dark:text-text-muted-dark text-lg mt-2 font-medium">
                                Whether you have a question, a job opportunity, or just want to say hi, my inbox is always open!
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 mt-4">
                            <a href="mailto:deeptisd123@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors group">
                                <div className="size-12 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark uppercase">Email Me</p>
                                    <p className="text-lg font-bold text-text-main-light dark:text-white">deeptisd123@gmail.com</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/deeptisingh1402/" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group">
                                <div className="size-12 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                    <span className="font-bold text-xl">in</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark uppercase">LinkedIn</p>
                                    <p className="text-lg font-bold text-text-main-light dark:text-white">/in/deeptisingh1402</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-1 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-[2rem] p-8 border border-white dark:border-slate-700 shadow-inner">
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-text-main-light dark:text-white ml-1">Name</label>
                                <input type="text" placeholder="John Doe" className="w-full h-12 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 font-medium focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-text-main-light dark:text-white ml-1">Email</label>
                                <input type="email" placeholder="john@example.com" className="w-full h-12 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 font-medium focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-text-main-light dark:text-white ml-1">Subject</label>
                                <div className="flex gap-2">
                                    <select className="flex-[2] h-12 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 font-medium focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all cursor-pointer text-text-muted-light">
                                        <option>Just saying hi 👋</option>
                                        <option>Job Opportunity 💼</option>
                                        <option>Collaboration 🤝</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-text-main-light dark:text-white ml-1">Message</label>
                                <textarea rows={4} placeholder="Write your message here..." className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 p-4 font-medium focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"></textarea>
                            </div>
                            <button type="submit" className="mt-2 h-12 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg shadow-lg shadow-pink-200 dark:shadow-none hover:-translate-y-1 active:translate-y-0 transition-all">
                                Send Message 🚀
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
