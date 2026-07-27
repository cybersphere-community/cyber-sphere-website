import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
            }, 500);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ScrollReveal className="w-full max-w-5xl mx-auto px-4 relative group">
            <div className="relative bg-slate-50 border border-slate-200 p-8 md:p-12 flex flex-col items-center text-center">
                {/* Decorative Technical Borders */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-slate-900"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-slate-900"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-slate-900"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-slate-900"></div>

                <div className="mb-4">
                    <Quote size={30} className="text-slate-900 opacity-20" />
                </div>

                <div className={`transition-all duration-500 ease-in-out transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <p className="text-lg md:text-2xl text-slate-900 font-medium leading-relaxed mb-6 max-w-3xl mx-auto">
                        "{quotes[currentIndex].text}"
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-[1px] w-6 bg-slate-300"></div>
                        <p className="text-slate-900 font-bold text-xs tracking-wider uppercase font-mono-tech">
                            {quotes[currentIndex].author}
                        </p>
                        <div className="h-[1px] w-6 bg-slate-300"></div>
                    </div>
                </div>

                {/* Indicators - Technical ticks */}
                <div className="flex gap-1.5 mt-8">
                    {quotes.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setFade(false);
                                setTimeout(() => {
                                    setCurrentIndex(idx);
                                    setFade(true);
                                }, 300);
                            }}
                            className={`h-1.5 transition-all duration-150 ${idx === currentIndex
                                    ? 'w-6 bg-red-600'
                                    : 'w-1.5 bg-slate-300 hover:bg-slate-500'
                                }`}
                            aria-label={`Go to quote ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </ScrollReveal>
    );
};

export default SecurityQuotes;
