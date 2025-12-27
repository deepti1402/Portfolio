import { Section } from './ui/Section';
import { HeartPulse, MonitorSmartphone, Beaker, Zap } from 'lucide-react';

const equipmentData = [
    {
        title: "Life-Support Equipment",
        icon: HeartPulse,
        gradient: "from-rose-600 to-red-600",
        bgAccent: "bg-rose-600/10",
        description: "Critical care devices ensuring patient survival and stability.",
        items: [
            "Ventilators",
            "Defibrillators",
            "Infusion & Syringe Pumps",
            "Anesthesia Workstations",
            "Oxygen Concentrators"
        ]
    },
    {
        title: "Monitoring Systems",
        icon: MonitorSmartphone,
        gradient: "from-indigo-600 to-blue-600",
        bgAccent: "bg-indigo-600/10",
        description: "Real-time patient vital signs tracking and visualization.",
        items: [
            "Multiparameter Patient Monitors",
            "ECG Machines",
            "Pulse Oximeters",
            "NIBP Devices",
            "Telemetry Systems"
        ]
    },
    {
        title: "Diagnostic Equipment",
        icon: Beaker,
        gradient: "from-violet-600 to-purple-600",
        bgAccent: "bg-violet-600/10",
        description: "Imaging and laboratory tools for accurate diagnosis.",
        items: [
            "Ultrasound Machines (PNDT)",
            "X-ray Systems (AERB Compliance)",
            "Laboratory Analyzers",
            "Microscopes",
            "Centrifuges"
        ]
    },
    {
        title: "Hospital Utility Systems",
        icon: Zap,
        gradient: "from-amber-500 to-orange-500",
        bgAccent: "bg-amber-500/10",
        description: "Infrastructure support systems for hospital operations.",
        items: [
            "Medical Gas Pipeline System (MGPS)",
            "Gas Manifold Systems",
            "Suction Systems",
            "UPS Management",
            "Power Backup Coordination"
        ]
    }
];

export default function Equipment() {
    return (
        <Section id="projects" className="bg-white dark:bg-slate-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Equipment Expertise
                </h2>
                <div className="h-1 w-20 bg-brand-600 dark:bg-brand-400 rounded-full mx-auto" />
                <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Hands-on proficiency with a wide range of critical and non-critical medical technologies.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {equipmentData.map((category, index) => (
                    <div
                        key={index}
                        className="group relative bg-slate-50 dark:bg-slate-900 rounded-2xl p-1 overflow-hidden hover:shadow-2xl transition-all duration-500"
                    >
                        {/* Gradient Border Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative h-full bg-white dark:bg-slate-900 rounded-xl p-6 transition-transform duration-300">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${category.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                <category.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {category.title}
                            </h3>

                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 min-h-[40px]">
                                {category.description}
                            </p>

                            <div className="space-y-2">
                                {category.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
