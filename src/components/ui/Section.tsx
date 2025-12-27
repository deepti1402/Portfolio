

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

export function Section({ id, className = '', children }: SectionProps) {
    return (
        <section id={id} className={`py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}
