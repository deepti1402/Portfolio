import { Section } from './ui/Section';
import { Settings, ShieldCheck, FileText, Users, Activity, PenTool } from 'lucide-react';

const skills = [
    {
        category: "Equipment Management",
        icon: Settings,
        color: "from-indigo-500 to-blue-600",
        items: [
            "Preventive Maintenance Planning",
            "Corrective Maintenance & Troubleshooting",
            "Calibration & verification",
            "Breakdown Diagnosis",
            "Equipment Lifecycle Management"
        ]
    },
    {
        category: "Regulatory Compliance",
        icon: ShieldCheck,
        color: "from-emerald-600 to-teal-600",
        items: [
            "NABH (5th Ed) Documentation",
            "AERB Compliance (Radiation Safety)",
            "PNDT Act Record Maintenance",
            "Internal/External Audit Support",
            "Safety & Risk Assessment"
        ]
    },
    {
        category: "Clinical Support",
        icon: Activity,
        color: "from-rose-500 to-pink-600",
        items: [
            "Daily Biomedical Rounds",
            "Technical Support to ICU/OT",
            "User Training for Staff",
            "Patient Safety Assurance",
            "Emergency Operations Support"
        ]
    },
    {
        category: "Documentation & Reporting",
        icon: FileText,
        color: "from-amber-500 to-orange-600",
        items: [
            "Equipment Logs & Service Reports",
            "Vendor Visit Documentation",
            "AMC/CMC Contract Management",
            "Downtime Analysis",
            "Corrective Action Reports (CAPA)"
        ]
    },
    {
        category: "Vendor Management",
        icon: Users,
        color: "from-violet-600 to-purple-600",
        items: [
            "OEM Coordination",
            "Service & Spare Call Tracking",
            "Service Quality Verification",
            "New Equipment Evaluation",
            "Installation & Commissioning"
        ]
    },
    {
        category: "Tools & Soft Skills",
        icon: PenTool,
        color: "from-cyan-500 to-blue-500",
        items: [
            "MS Excel & Word Proficiency",
            "Inventory Management Systems",
            "Problem Solving under Pressure",
            "Cross-functional Communication",
            "Team Mentorship"
        ]
    }
];

export default function Skills() {
    return (
        <Section id="skills" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Professional Expertise
                </h2>
                <div className="h-1 w-20 bg-brand-600 dark:bg-brand-400 rounded-full mx-auto" />
                <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Comprehensive skill set covering technical maintenance, regulatory frameworks, and operational management in healthcare settings.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 text-white text-shadow-sm group-hover:scale-110 transition-transform`}>
                            <skill.icon size={24} />
                        </div>

                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-500 group-hover:to-accent-500 transition-all">
                            {skill.category}
                        </h3>

                        <ul className="space-y-3">
                            {skill.items.map((item, idx) => (
                                <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300 text-sm">
                                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2.5 flex-shrink-0 bg-gradient-to-r ${skill.color}`} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
