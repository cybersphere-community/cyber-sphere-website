import { Linkedin, Github, Globe, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

const teamMembers = [
    {
        name: "Harsh Kanojia",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/harsh.jpg",
        portfolio: "https://harsh-hak.github.io/",
        linkedin: "https://www.linkedin.com/in/harsh-kanojia369/",
        github: "https://github.com/harsh-hak",
        objectPosition: "object-[center_35%]",
        email: "hk.cybersphere@gmail.com",
        interests: ["Offensive Security", "Malware Analysis", "LLM Hacking"]
    },
    {
        name: "Manish Garg",
        role: "Business Analytics",
        university: "Deakin University",
        image: "/team/manish.jpg",
        linkedin: "https://www.linkedin.com/in/manish-garg-51b072228/",
        objectPosition: "object-top",
        email: "manish.garg@deakin.edu.au",
        interests: ["Data Analytics", "Business Intelligence", "Risk Assessment"]
    },
    {
        name: "Himanshi Shrivastava",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/himanshi.jpg",
        linkedin: "https://www.linkedin.com/in/himanshi-shrivastava-8000a5180/",
        objectPosition: "object-center",
        interests: ["SOC Operations", "Threat Intelligence", "Incident Response"]
    },
    {
        name: "Brijesh Palta",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/brijesh.jpg",
        portfolio: "https://brijesh.janaktravels.com/",
        linkedin: "https://www.linkedin.com/in/brijesh-palta/",
        objectPosition: "object-top",
        interests: ["Cloud Security", "Secure Infra Development", "DevSecOps"]
    },
    {
        name: "Naman Shah",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/naman.jpg",
        linkedin: "https://www.linkedin.com/in/naman-shah-8b67a51a4/",
        objectPosition: "object-center",
        interests: ["Digital Forensics", "Network Forensics", "Cyber Investigation"]
    }
];

const Team = () => {
    return (
        <div className="min-h-screen bg-transparent pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
            <SEO
                title="Our Team"
                description="Meet the dedicated team behind Cyber Sphere Community."
                keywords="cyber sphere team, core team, volunteers, cybersecurity experts"
            />

            {/* Page Header */}
            <ScrollReveal className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight uppercase font-orbitron">
                    MEET THE TEAM
                </h1>
                <p className="text-slate-500 max-w-2xl mx-auto text-sm">
                    The passionate individuals driving the Cyber Sphere mission forward.
                </p>
            </ScrollReveal>

            {/* Team Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                    <ScrollReveal
                        key={index}
                        delay={index % 2 * 0.05}
                        className="h-full"
                    >
                        <div className="cyber-card hover:border-red-600 flex flex-col sm:flex-row items-center sm:items-start gap-6 h-full transition-colors duration-150">
                            {/* Profile Image Square Box */}
                            <div className="w-28 h-28 sm:w-32 sm:h-32 border border-slate-200 bg-slate-50 p-1 flex items-center justify-center shrink-0">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    width="128"
                                    height="128"
                                    className={`w-full h-full object-cover ${member.objectPosition || 'object-center'}`}
                                />
                            </div>

                            {/* Info & Content */}
                            <div className="flex-1 text-center sm:text-left w-full flex flex-col h-full">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">
                                    {member.name}
                                </h3>
                                
                                <span className="cyber-badge cyber-badge-black mr-auto ml-auto sm:ml-0 mb-2">
                                    {member.role}
                                </span>
                                
                                <p className="text-slate-400 text-xs mb-4 italic">{member.university}</p>

                                {/* Interests / Tags */}
                                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-6">
                                    {member.interests.map((interest, idx) => (
                                        <span key={idx} className="cyber-badge cyber-badge-black text-[10px]">
                                            {interest}
                                        </span>
                                    ))}
                                </div>

                                {/* Social Links - Redesigned Horizontal Sockets */}
                                <div className="flex items-center justify-center sm:justify-start gap-2 pt-4 border-t border-slate-100 mt-auto">
                                    {member.portfolio && (
                                        <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="p-2 border border-slate-200 bg-white text-slate-600 hover:text-red-600 hover:border-slate-450 transition-all" title="Portfolio">
                                            <Globe className="w-4 h-4" />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 border border-slate-200 bg-white text-slate-600 hover:text-red-600 hover:border-slate-450 transition-all" title="LinkedIn">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    )}
                                    {member.github && (
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 border border-slate-200 bg-white text-slate-600 hover:text-red-600 hover:border-slate-450 transition-all" title="GitHub">
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                    {member.email && (
                                        <a href={`mailto:${member.email}`} className="p-2 border border-slate-200 bg-white text-slate-600 hover:text-red-600 hover:border-slate-450 transition-all" title="Email">
                                            <Mail className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
};

export default Team;
