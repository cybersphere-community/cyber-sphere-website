import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
    { text: "Security is not a product, but a process.", author: "Bruce Schneier" },
    { text: "The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.", author: "Gene Spafford" },
    { text: "Passwords are like underwear: don't let people see it, change it very often, and you shouldn't share it with strangers.", author: "Chris Pirillo" },
    { text: "If you think technology can solve your security problems, then you don't understand the problems and you don't understand the technology.", author: "Bruce Schneier" },
    { text: "Amateurs hack systems, professionals hack people.", author: "Bruce Schneier" },
    { text: "There are only two types of companies: those that have been hacked and those that will be.", author: "Robert Mueller" },
    { text: "Security is ensuring that data is accessed only by authorized users.", author: "Tech Target" },
    { text: "Privacy is not an option, and it shouldn't be the price we accept for just getting on the Internet.", author: "Gary Kovacs" }
];

const SecurityQuotes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
                setFade(true);
            }, 500); // Wait for fade out
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto mt-12 mb-8 px-4">
            <div className="relative bg-slate-900/50 border-l-4 border-sky-500 rounded-r-xl p-6 backdrop-blur-sm">
                <div className="absolute top-4 left-4 opacity-10">
                    <Quote size={48} className="text-sky-400" />
                </div>

                <div className={`transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-lg md:text-xl text-slate-200 font-mono italic mb-3 tracking-wide text-center">
                        "{quotes[currentIndex].text}"
                    </p>
                    <p className="text-right text-sky-400 font-bold text-sm uppercase tracking-wider">
                        — {quotes[currentIndex].author}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800 rounded-br-xl overflow-hidden">
                    <div
                        key={currentIndex}
                        className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 animate-[progress_5s_linear]"
                    ></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>
        </div>
    );
};

export default SecurityQuotes;
