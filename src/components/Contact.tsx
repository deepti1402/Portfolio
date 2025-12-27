import { Section } from './ui/Section';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from './ui/theme-provider';

export default function Contact() {
    const { theme } = useTheme();

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

            cal("ui", {
                theme: isDark ? "dark" : "light",
                styles: { branding: { brandColor: "#4f46e5" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, [theme]);

    return (
        <Section id="contact" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                        Open to opportunities in biomedical engineering, clinical engineering, and hospital operations management. Schedule a meeting directly or connect via social channels.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:deeptisd123@gmail.com" className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-brand-400 dark:hover:border-brand-400 transition-colors group">
                            <div className="bg-brand-50 dark:bg-brand-900/50 p-3 rounded-full text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                <Mail size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-slate-500 dark:text-slate-400">Email Me</p>
                                <p className="text-slate-900 dark:text-white font-semibold">deeptisd123@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/deeptisingh1402/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-brand-400 dark:hover:border-brand-400 transition-colors group">
                            <div className="bg-brand-50 dark:bg-brand-900/50 p-3 rounded-full text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                <Linkedin size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                                <p className="text-slate-900 dark:text-white font-semibold">Connect on LinkedIn</p>
                            </div>
                        </a>

                        <div className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <div className="bg-brand-50 dark:bg-brand-900/50 p-3 rounded-full text-brand-600 dark:text-brand-400">
                                <MapPin size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                                <p className="text-slate-900 dark:text-white font-semibold">Delhi, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-[600px] overflow-hidden">
                    <Cal
                        calLink="deepti-singh/30min"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ layout: 'month_view' }}
                    />
                </div>
            </div>
        </Section>
    );
}
