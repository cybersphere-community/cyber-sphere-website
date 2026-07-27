import CallForSpeakers from '../components/CallForSpeakers';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';


const CallForSpeakersPage = () => {
    return (
        <div className="min-h-screen bg-transparent pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 font-sans">
            <SEO
                title="Call for Speakers - Cyber Sphere"
                description="Submit your proposal to speak at Cyber Sphere events. Share your knowledge with the community."
                keywords="call for speakers, cybersecurity talks, submit proposal, speaker application"
            />
            <div className="max-w-7xl mx-auto">
                {/* Centered Page Header */}
                <ScrollReveal className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight uppercase font-orbitron">
                        CALL FOR <span className="text-red-600">SPEAKERS</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm">
                        Submit your proposal to speak at Cyber Sphere events and share your knowledge with the community.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <CallForSpeakers />
                </ScrollReveal>
            </div>
        </div>
    );
};

export default CallForSpeakersPage;
