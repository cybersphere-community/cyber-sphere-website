import { Link } from 'react-router-dom';
import BlogSection from '../components/BlogSection';
import SecurityQuotes from '../components/SecurityQuotes';
import { Shield, Users, Calendar, Award, Terminal, Code, Lock, Zap, Cpu, Globe, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import { upcomingEvents } from '../data/events';

const Home = () => {
    const featuredEvent = upcomingEvents[0];
    return (
        <div className="min-h-screen bg-brand-light text-brand-secondary overflow-hidden font-sans">
            <SEO
                title="Home"
                description="Welcome to Cyber Sphere Community - The ultimate hub for cybersecurity enthusiasts, students, and professionals to learn, collaborate, and grow."
                keywords="cybersecurity, community, hacking, students, events, ctf, workshops"
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content - Typography & CTA */}
                        <div className="text-left space-y-8 fade-in">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                                </span>
                                <span className="text-neon-cyan text-xs font-mono tracking-widest uppercase">System Online</span>
                            </div>

                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-orbitron leading-tight text-white relative z-20">
                                <span className="block glitch-text text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.7)]" data-text="CYBER">
                                    CYBER
                                </span>
                                <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                    SPHERE
                                </span>
                                <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                    COMMUNITY
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed border-l-2 border-red-600 pl-6">
                                An open collective for hackers, researchers, and defenders.
                                <span className="text-slate-200 font-medium"> No corporate agenda. Just pure security research, knowledge sharing, and ethical hacking.</span>
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://forms.gle/xsLyYgHzMiYsp8zx6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-red-600/10 border border-red-600/50 text-red-500 font-orbitron font-bold tracking-wider uppercase hover:bg-red-600 hover:text-white transition-all duration-300 clip-path-slant"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-red-600/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Join Community
                                </a>
                            </div>
                        </div>

                        {/* Right Content - 3D/Tech Visual */}
                        <div className="relative fade-in mt-12 lg:mt-0" style={{ animationDelay: '0.2s' }}>
                            <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
                                {/* Outer Glow Ring */}
                                <div className="absolute inset-0 rounded-full border border-neon-cyan/20 shadow-[0_0_60px_rgba(0,243,255,0.1)] animate-pulse"></div>

                                {/* Rotating Orbit Ring */}
                                <div className="absolute inset-4 rounded-full border border-slate-800 border-t-neon-cyan/50 animate-spin-slow"></div>

                                {/* Central Logo Container */}
                                <div className="relative w-64 h-64 bg-black/80 backdrop-blur-xl rounded-full border border-slate-700/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,243,255,0.15)] animate-float">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan/5 to-transparent"></div>
                                    <img
                                        src="/terminal-logo.png.png"
                                        alt="Cyber Sphere"
                                        className="w-40 h-40 object-contain drop-shadow-[0_0_25px_rgba(0,243,255,0.3)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar - Minimalist */}
            <div className="border-y border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
                        {[
                            { label: 'MEETUPS', value: '100+' },
                            { label: 'CTFs PLAYED', value: '500+' },
                            { label: 'CONTRIBUTORS', value: '5K+' },
                            { label: 'OPEN SOURCE', value: '100%' }
                        ].map((stat, i) => (
                            <div key={i} className="py-8 text-center group cursor-default">
                                <div className="text-3xl font-bold text-brand-primary mb-1 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-400 font-bold tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section - Clean Cards */}
            <section className="py-24 bg-brand-light relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
                            Our Mission
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Empowering the next generation of defenders through open collaboration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Terminal, title: 'Hands-on Learning', desc: 'Practical workshops and live demos. Learn by protecting real systems.' },
                            { icon: Shield, title: 'Community Defense', desc: 'Collaborate on staying safe online. Share strategies to stop the latest cyber threats.' },
                            { icon: Globe, title: 'Global Network', desc: 'Connect with security experts, researchers, and learners from around the world.' }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                                    <item.icon className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Quotes */}
            <div className="py-12 bg-white">
                <SecurityQuotes />
            </div>

            {/* Featured Event - Clean Design */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
                        <div className="p-10 sm:p-14 lg:w-1/2 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 mb-8">
                                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                                <span className="text-brand-accent font-bold text-sm tracking-widest uppercase">Next Gathering</span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-6 leading-tight">
                                {featuredEvent ? featuredEvent.title : "Upcoming Event"}
                            </h3>
                            <p className="text-slate-500 mb-10 text-lg">
                                {featuredEvent ? featuredEvent.description : "Stay tuned for updates."}
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-slate-100 pt-8">
                                <div>
                                    <span className="block text-slate-400 text-xs font-bold tracking-wider mb-2">DATE</span>
                                    <span className="text-brand-primary font-semibold text-lg">{featuredEvent ? featuredEvent.date : "TBA"}</span>
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-xs font-bold tracking-wider mb-2">TIME</span>
                                    <span className="text-brand-primary font-semibold text-lg">{featuredEvent ? featuredEvent.time : "TBA"}</span>
                                </div>
                            </div>

                            <Link to="/events" className="inline-flex items-center text-brand-accent font-bold hover:gap-4 transition-all gap-2 group">
                                View Full Event Details <ArrowRightWrapper className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="lg:w-1/2 bg-slate-100 relative min-h-[300px]">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                                alt="Event"
                                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <div className="bg-white">
                <BlogSection />
            </div>


        </div>
    );
};

// Helper for the Arrow Icon to avoid cluttering imports if not used elsewhere often
const ArrowRightWrapper = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

export default Home;
