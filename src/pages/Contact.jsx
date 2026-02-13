import { Mail } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 font-sans">
            <SEO
                title="Contact Us"
                description="Get in touch with Cyber Sphere Community. We'd love to hear from you."
                keywords="contact, email, support, questions"
            />
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-6 tracking-tight">Get in Touch</h1>
                    <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-lg mx-auto">Have a question or want to collaborate? We'd love to hear from you.</p>

                    {/* Official Email Display */}
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-white border border-slate-200 rounded-2xl hover:border-brand-accent/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                        <div className="p-2.5 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                            <Mail className="h-6 w-6 text-brand-accent" />
                        </div>
                        <a href="mailto:cybersphere.official@outlook.com" className="text-lg text-slate-600 group-hover:text-brand-primary font-bold transition-colors">
                            cybersphere.official@outlook.com
                        </a>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none placeholder-slate-400 font-medium"
                                placeholder="Tell us what's on your mind..."
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary justify-center text-lg py-4 shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;
