import { Link } from 'react-router-dom';
import BlogSection from '../components/BlogSection';
import SecurityQuotes from '../components/SecurityQuotes';
import { Shield, Users, Calendar, Award, Terminal, Code, Lock, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="min-h-screen text-white">
            <SEO
                title="Home"
                description="Welcome to Cyber Sphere Community - The ultimate hub for cybersecurity enthusiasts, students, and professionals to learn, collaborate, and grow."
                keywords="cybersecurity, community, hacking, students, events, ctf, workshops"
            />
            {/* Hero Section - Centered Layout */}
            <section className="relative overflow-hidden py-12 sm:py-20 lg:py-32 cyber-grid">
                {/* Background with blur effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center space-y-8 fade-in">
                        {/* Logo - Small & Cool */}
                        <div className="flex justify-center mb-8 sm:mb-12">
                            <div className="relative group">
                                {/* Animated Glow Grid */}
                                <div className="absolute -inset-8 bg-gradient-to-r from-sky-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                {/* Rotating Rings */}
                                <div className="absolute -inset-4 rounded-full border border-sky-500/30 border-t-transparent animate-spin-slow"></div>
                                <div className="absolute -inset-2 rounded-full border border-cyan-500/20 border-b-transparent animate-reverse-spin"></div>

                                {/* Logo Image */}
                                <img
                                    src="/terminal-logo.png.png" // Preserving original filename
                                    alt="Cyber Sphere Terminal"
                                    className="relative w-32 h-32 sm:w-40 sm:h-40 object-contain transform group-hover:scale-105 transition-all duration-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                                />

                                {/* Tech Decorators */}
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-[3px] border-b-[3px] border-sky-400 rounded-br-md"></div>
                                <div className="absolute top-0 left-0 w-3 h-3 border-l-[3px] border-t-[3px] border-sky-400 rounded-tl-md"></div>
                            </div>
                        </div>

                        {/* Main Title */}
                        <div>
                            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight tracking-wider drop-shadow-[0_0_25px_rgba(0,180,255,0.4)] uppercase">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-600 text-shimmer drop-shadow-sm">Cyber</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-sky-200 to-slate-100 text-shimmer drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ animationDelay: '0.5s' }}> Sphere</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 mt-2 tracking-widest text-shadow-glow">Community</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto px-4">
                            A community-driven cybersecurity initiative to promote threat awareness, defensive strategies, and build a network for students, researchers, and industry professionals.
                        </p>

                        {/* Key Features */}
                        <div className="flex flex-wrap justify-center gap-6 pt-8 max-w-3xl mx-auto">
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-sky-500/30 rounded-full">
                                <Terminal className="h-5 w-5 text-sky-400" />
                                <span className="text-sm text-slate-200">Hands-on Training</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full">
                                <Shield className="h-5 w-5 text-cyan-400" />
                                <span className="text-sm text-slate-200">Expert Mentorship</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-blue-500/30 rounded-full">
                                <Users className="h-5 w-5 text-blue-400" />
                                <span className="text-sm text-slate-200">Collaborative Learning</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <a
                                href="https://lnkd.in/gJQN6f5J"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white bg-transparent border-2 border-sky-500 rounded-lg hover:bg-sky-500/10 transition-all duration-300 group"
                            >
                                Join Cyber Sphere
                                <Shield className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                            </a>
                        </div>

                        {/* Stats Section */}
                        <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                            {[
                                { icon: Users, value: '5000+', label: 'Active Members' },
                                { icon: Calendar, value: '10+', label: 'Events Hosted' },
                                { icon: Award, value: '10+', label: 'Workshops' },
                                { icon: Terminal, value: '100+', label: 'CTF Challenges' }
                            ].map((stat, index) => (
                                <div key={index} className="p-4 sm:p-6 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-sky-500/50 transition-all hover:scale-105 group">
                                    <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-2 sm:mb-3 text-sky-400 group-hover:scale-110 transition-transform" />
                                    <div className="text-xl sm:text-3xl font-bold text-sky-400 mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Secondary CTA */}
                        <div className="pt-6">
                            <Link
                                to="/events"
                                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors group"
                            >
                                <span>Explore Our Events</span>
                                <Calendar className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Running Security Quotes */}
                        <div className="mt-16 fade-in" style={{ animationDelay: '0.6s' }}>
                            <SecurityQuotes />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Split Design */}
            <section className="py-12 sm:py-20 cyber-grid">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                                <Lock className="h-4 w-4 text-cyan-400" />
                                <span className="text-cyan-400 text-sm font-semibold">About Us</span>
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">
                                Empowering the Next Generation of <span className="gradient-text">Cyber Defenders</span>
                            </h2>
                            <p className="text-slate-300 mb-5 leading-relaxed text-lg">
                                Cyber Sphere is dedicated to bridging the gap between academic knowledge and industry practice in the field of cybersecurity.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: Code, text: 'Hands-on workshops and CTF competitions' },
                                    { icon: Users, text: 'Collaborative learning environment' },
                                    { icon: Award, text: 'Industry expert-led sessions' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="bg-sky-500/10 p-2 rounded-lg border border-sky-500/20">
                                            <item.icon className="h-5 w-5 text-sky-400" />
                                        </div>
                                        <p className="text-slate-300 pt-1">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Visual Element */}
                        <div className="relative">
                            <div className="card p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 border-sky-500/20">
                                <div className="aspect-video bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNCwxNjUsMjMzLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
                                    <Shield className="h-32 w-32 text-sky-400/30" />
                                    <div className="absolute top-4 right-4 bg-green-500 h-3 w-3 rounded-full animate-pulse"></div>
                                    <div className="absolute bottom-4 left-4 text-sky-400 text-xs font-mono">SECURE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Event - Neon Card */}
            <section className="py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                            Upcoming <span className="gradient-text">Event</span>
                        </h2>
                        <p className="text-slate-400">Don't miss our next cybersecurity session</p>
                    </div>

                    <div className="card p-6 sm:p-10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 border-sky-500/30 glow-hover relative overflow-hidden">
                        {/* Accent Corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/20 to-transparent"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
                            <div className="md:col-span-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/10 text-sky-400 text-sm font-semibold rounded-full mb-4 border border-sky-500/20">
                                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                                    Webinar
                                </div>
                                <h3 className="text-xl sm:text-3xl font-bold mb-3 text-white">Advanced Penetration Testing Techniques</h3>
                                <p className="text-slate-300 mb-6 leading-relaxed">Join us for a deep dive into modern pentesting methodologies with industry experts.</p>
                                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5 text-sky-500" />
                                        <span>Oct 25, 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-5 w-5 text-sky-500">⏰</div>
                                        <span>18:00 IST</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-end">
                                <a href="/events/1" className="btn-primary w-full md:w-auto text-center">
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <BlogSection />
        </div>
    );
};

export default Home;
