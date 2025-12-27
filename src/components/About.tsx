import { Section } from './ui/Section';
import { User, MapPin, Mail, Award, CheckCircle } from 'lucide-react';

export default function About() {
    return (
        <Section id="about" className="bg-white dark:bg-slate-950">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        About Me
                    </h2>
                    <div className="h-1 w-20 bg-brand-600 dark:bg-brand-400 rounded-full" />

                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        I am a <span className="font-semibold text-brand-700 dark:text-brand-300">Biomedical Engineer</span> with approximately 3 years of hands-on hospital experience, specializing in medical equipment maintenance, calibration, regulatory compliance, and clinical support.
                    </p>

                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        My experience spans multi-specialty hospital environments including <span className="text-slate-900 dark:text-slate-100">critical care, diagnostics, and life-support systems</span>. I have strong exposure to <span className="text-slate-900 dark:text-slate-100">NABH (5th Edition), AERB, and PNDT compliance</span>, vendor coordination, and audit preparation.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center text-slate-700 dark:text-slate-300">
                            <MapPin className="h-5 w-5 text-brand-600 dark:text-brand-400 mr-3" />
                            Delhi, India
                        </div>
                        <div className="flex items-center text-slate-700 dark:text-slate-300">
                            <Mail className="h-5 w-5 text-brand-600 dark:text-brand-400 mr-3" />
                            deeptisd123@gmail.com
                        </div>
                        <div className="flex items-center text-slate-700 dark:text-slate-300">
                            <User className="h-5 w-5 text-brand-600 dark:text-brand-400 mr-3" />
                            3 Years Experience
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-brand-500/10" />

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center relative z-10">
                        <Award className="h-6 w-6 text-brand-600 dark:text-brand-400 mr-2" />
                        Core Responsibilities
                    </h3>

                    <ul className="space-y-4 relative z-10">
                        {[
                            "Independent Site Engineer Operations",
                            "Preventive & Corrective Maintenance",
                            "Medical Equipment Calibration",
                            "Quality Systems & Audits Support",
                            "Continuous Improvement Initiatives"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-700 dark:text-slate-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
