import SEO from '../components/SEO';
import { Linkedin, Github, Globe, Shield, Award, MapPin } from 'lucide-react';

const teamMembers = [
    {
        name: "Harsh Kanojia",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/harsh.jpg",
        portfolio: "https://harsh-hak.github.io/",
        linkedin: "https://www.linkedin.com/in/harsh-kanojia369/",
        github: "https://github.com/harsh-hak",
        objectPosition: "object-[center_35%]"
    },
    {
        name: "Manish Garg",
        role: "Business Analytics",
        university: "Deakin University",
        image: "/team/manish.jpg",
        linkedin: "https://www.linkedin.com/in/manish-garg-51b072228/",
        objectPosition: "object-top"
    },
    {
        name: "Himanshi Shrivastava",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/himanshi.jpg",
        linkedin: "https://www.linkedin.com/in/himanshi-shrivastava-8000a5180/",
        objectPosition: "object-center"
    },
    {
        name: "Brijesh Palta",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/brijesh.jpg",
        linkedin: "https://www.linkedin.com/in/brijesh-palta/",
        objectPosition: "object-top"
    },
    {
        name: "Naman Shah",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/naman.jpg",
        linkedin: "https://www.linkedin.com/in/naman-shah-8b67a51a4/",
        objectPosition: "object-center"
    }
];

const Team = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SEO
                title="Our Team"
                description="Meet the dedicated team behind Cyber Sphere Community."
                keywords="cyber sphere team, core team, volunteers, cybersecurity experts"
            />

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    Meet the Team
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    The passionate individuals driving the Cyber Sphere mission forward.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="group relative w-full max-w-sm bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                    >
                        {/* Image Container */}
                        <div className="aspect-[4/3] overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                            <img
                                src={member.image}
                                alt={member.name}
                                loading="lazy"
                                decoding="async"
                                width="384"
                                height="288"
                                className={`w-full h-full object-cover ${member.objectPosition || 'object-center'} group-hover:scale-110 transition-transform duration-500`}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 relative z-20 -mt-12">
                            <div className="bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-lg shadow-xl text-center">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                    {member.name}
                                </h3>
                                <div className="flex items-center justify-center gap-2 text-sm text-cyan-500 mb-1">
                                    <Award className="w-4 h-4" />
                                    <span>{member.role}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-4">
                                    <MapPin className="w-3 h-3" />
                                    <span>{member.university}</span>
                                </div>

                                {/* Social Links */}
                                <div className="flex justify-center gap-4 pt-4 border-t border-slate-700">
                                    {member.portfolio && (
                                        <a
                                            href={member.portfolio}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                                            title="Portfolio"
                                        >
                                            <Globe className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-blue-500 transition-colors transform hover:scale-110"
                                            title="LinkedIn"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.github && (
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
                                            title="GitHub"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Team;
