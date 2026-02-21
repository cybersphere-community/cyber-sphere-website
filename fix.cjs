const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        if (fs.statSync(dirFile).isDirectory()) {
            filelist = walkSync(dirFile, filelist);
        } else {
            filelist.push(dirFile);
        }
    });
    return filelist;
};

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = walkSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const orig = content;

    // 1. Fix the broken /60
    content = content.replace(/dark:bg-slate-\/60/g, 'dark:bg-slate-900/60');

    // 2. Add dark mode backgrounds to rounded cards/containers
    // Find classNames that have bg-white or bg-slate-50 and rounded, but no dark:bg
    content = content.replace(/className=(["`])(.*?)\1/g, (match, quote, classList) => {
        let classes = classList.split(/\s+/).filter(c => c.trim().length > 0);

        // If it's a card (bg-white or bg-slate-50) and has rounded corners, but no dark:bg
        if ((classes.includes('bg-white') || classes.includes('bg-slate-50')) &&
            classes.some(c => c.startsWith('rounded')) &&
            !classes.some(c => c.startsWith('dark:bg-'))) {

            if (classes.includes('bg-white')) {
                classes.push('dark:bg-slate-900/60');
            } else if (classes.includes('bg-slate-50')) {
                classes.push('dark:bg-slate-800/80');
            }
        }

        // Add dark:border for border-slate-200
        if (classes.includes('border-slate-200') && !classes.some(c => c.startsWith('dark:border-'))) {
            classes.push('dark:border-slate-700/50');
        }

        // Dark text colors
        if (classes.includes('text-brand-primary') && !classes.some(c => c.startsWith('dark:text-'))) {
            classes.push('dark:text-white');
        }
        if (classes.includes('text-slate-800') && !classes.some(c => c.startsWith('dark:text-'))) {
            classes.push('dark:text-slate-100');
        }
        if (classes.includes('text-slate-600') && !classes.some(c => c.startsWith('dark:text-'))) {
            classes.push('dark:text-slate-300');
        }
        if (classes.includes('text-slate-500') && !classes.some(c => c.startsWith('dark:text-'))) {
            classes.push('dark:text-slate-400');
        }

        return `className=${quote}${classes.join(' ')}${quote}`;
    });

    if (content !== orig) {
        fs.writeFileSync(file, content);
        console.log('Fixed:', file);
    }
});
