import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <Sun className="absolute w-6 h-6 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute w-6 h-6 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
            </div>
        </button>
    );
}
