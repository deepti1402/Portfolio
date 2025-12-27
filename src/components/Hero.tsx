
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-400/30 dark:bg-brand-500/10 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-accent-400/30 dark:bg-accent-600/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="space-y-8 max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full text-brand-600 dark:text-brand-400 font-semibold mb-4 shadow-sm animate-float">
                        Biomedical Engineer • 3 Years Experience
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-serif text-slate-900 dark:text-white mb-6 leading-tight">
                        Ensuring <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">Patient Safety</span><br />
                        through Reliable Operations
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Specializing in critical care equipment maintenance, NABH compliance, and clinical support across multi-specialty environments.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-500/20 cursor-pointer"
                        >
                            Explore My Work
                            <ArrowDown className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

