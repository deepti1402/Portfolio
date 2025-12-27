import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400">
                            Deepti Singh
                        </span>
                        <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-sm">
                            Dedicated Biomedical Engineer ensuring healthcare excellence through technology management and safety compliance.
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 dark:text-slate-400">
                        {new Date().getFullYear()} Deepti Singh. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
