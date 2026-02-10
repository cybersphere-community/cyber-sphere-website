import { Mail } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 cyber-grid">
            <SEO
                title="Contact Us"
                description="Get in touch with Cyber Sphere Community. We'd love to hear from you."
                keywords="contact, email, support, questions"
            />
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
                    <p className="text-slate-300 text-lg mb-6">Have a question or want to collaborate? We'd love to hear from you.</p>

                    {/* Official Email Display */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-sky-500/50 hover:bg-slate-800/80 transition-all duration-300 group shadow-lg shadow-sky-900/10">
                        <div className="p-2 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                            <Mail className="h-5 w-5 text-sky-400" />
                        </div>
                        <a href="mailto:cybersphere.official@outlook.com" className="text-lg text-slate-200 group-hover:text-white font-medium transition-colors">
                            cybersphere.official@outlook.com
                        </a>
                    </div>
                </div>
                <div className="card p-10">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-lg bg-slate-800 border-2 border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-lg bg-slate-800 border-2 border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full rounded-lg bg-slate-800 border-2 border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all resize-none"
                                placeholder="Tell us what's on your mind..."
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;
