import { Mail, User, MessageSquare, Send, Linkedin, Youtube } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
    return (
        <div className="relative min-h-screen bg-transparent pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
            <SEO
                title="Contact Us | Join Cybersecurity Community"
                description="Get in touch with Cyber Sphere Community. Join our cybersecurity community, collaborate with security researchers, or inquire about workshops and events. We're here to help aspiring ethical hackers."
                keywords="contact cybersecurity community, join hacker community, security collaboration, ethical hacking mentorship, infosec community india"
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Centered Page Header */}
                <ScrollReveal className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight uppercase font-orbitron">
                        CONTACT <span className="text-red-600">US</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm">
                        Get in touch with Cyber Sphere Community. We're here to help and collaborate.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Info */}
                    <div className="text-left space-y-6">
                        <ScrollReveal>
                            <h2 className="text-xl font-bold text-slate-900 mb-2 font-orbitron uppercase">Get in touch</h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Have a question about our events, articles, or just want to say hello?
                                We're here to help and collaborate with fellow security enthusiasts.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1} className="flex flex-col space-y-4">
                            <div className="cyber-card p-6 flex items-center gap-5">
                                <div className="p-3 bg-red-50 text-red-600 border border-red-100">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono-tech">Email Us</p>
                                    <a href="mailto:cybersphere.official@outlook.com" className="text-base sm:text-lg text-slate-800 font-bold hover:text-red-600 transition-colors break-all">
                                        cybersphere.official@outlook.com
                                    </a>
                                </div>
                            </div>

                            <div className="cyber-card p-6 flex items-center gap-5">
                                <div className="p-3 bg-red-50 text-red-600 border border-red-100">
                                    <Linkedin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono-tech">Follow on LinkedIn</p>
                                    <a href="https://www.linkedin.com/company/cyber-sphere-369/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-slate-800 font-bold hover:text-red-600 transition-colors break-all">
                                        Cyber Sphere
                                    </a>
                                </div>
                            </div>

                            <div className="cyber-card p-6 flex items-center gap-5">
                                <div className="p-3 bg-red-50 text-red-600 border border-red-100">
                                    <Youtube className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono-tech">Subscribe on YouTube</p>
                                    <a href="https://www.youtube.com/@CyberSphere-x2e" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-slate-800 font-bold hover:text-red-600 transition-colors break-all">
                                        Cyber Sphere
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Form */}
                    <ScrollReveal delay={0.2} className="w-full">
                        <div className="cyber-card p-8 sm:p-10">
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 uppercase font-orbitron">SEND A MESSAGE</h3>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono-tech">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 transition-all text-sm font-medium"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono-tech">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 transition-all text-sm font-medium"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono-tech">Your Message</label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-4 pointer-events-none">
                                            <MessageSquare className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 transition-all text-sm font-medium"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert('Thank you for your message! Opening your mail client...');
                                        const nameVal = document.getElementById('name').value;
                                        const emailVal = document.getElementById('email').value;
                                        const msgVal = document.getElementById('message').value;
                                        const subject = encodeURIComponent(`Inquiry from ${nameVal}`);
                                        const body = encodeURIComponent(`Name: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${msgVal}`);
                                        window.location.href = `mailto:cybersphere.official@outlook.com?subject=${subject}&body=${body}`;
                                    }}
                                    className="btn-cyber-primary w-full py-4 text-xs font-bold font-mono-tech flex items-center justify-center gap-2"
                                >
                                    <Send className="h-4 w-4" />
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default Contact;
