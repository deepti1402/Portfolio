import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">Deepti Singh</span>
                </div>

                <p className="mb-8 text-slate-400 max-w-md mx-auto">
                    Dedicated to excellence in Biomedical Engineering and Healthcare Operations.
                </p>

                <div className="border-t border-slate-800 pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Deepti Singh. All rights reserved.</p>
                    <div className="flex items-center px-4 py-2 bg-slate-800 rounded-full border border-slate-700/50">
                        <span>Built with</span>
                        <Heart size={16} className="mx-1.5 text-rose-500 fill-rose-500 animate-pulse" />
                        <span>by AmiT</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
