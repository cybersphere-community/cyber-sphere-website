import SEO from '../components/SEO';

const Speakers = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <SEO
                    title="Our Speakers"
                    description="Meet the industry experts and researchers speaking at Cyber Sphere events."
                    keywords="cybersecurity speakers, experts, researchers, industry professionals"
                />
                <div className="text-center mb-20">
                    <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-6 tracking-tight">Our Speakers</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Meet the industry experts and researchers leading the conversation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden text-center p-8 shadow-sm border border-slate-200 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
                            <div className="w-32 h-32 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-slate-300 font-bold group-hover:text-brand-accent group-hover:bg-blue-50 transition-colors">
                                ?
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-2">Speaker Name</h3>
                            <p className="text-brand-accent font-bold text-sm uppercase tracking-wide mb-4">Security Researcher</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Expert in penetration testing and cloud security.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Speakers;
