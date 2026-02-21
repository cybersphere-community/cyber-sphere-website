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

    content = content.replace(/dark:bg-slate-900\/60/g, 'dark:bg-white/5 backdrop-blur-md');
    // For smaller cards / inner cards
    content = content.replace(/dark:bg-slate-800\/80/g, 'dark:bg-white/10 backdrop-blur-md');

    // Borders
    content = content.replace(/dark:border-slate-700\/50/g, 'dark:border-white/10');
    content = content.replace(/dark:border-slate-700/g, 'dark:border-white/10');
    content = content.replace(/dark:border-slate-800\/50/g, 'dark:border-white/10');
    content = content.replace(/dark:border-slate-800/g, 'dark:border-white/10');

    // Remove duplicate backdrop-blur-md if they happen
    content = content.replace(/backdrop-blur-md backdrop-blur-md/g, 'backdrop-blur-md');

    if (content !== orig) {
        fs.writeFileSync(file, content);
        console.log('Fixed:', file);
    }
});
