import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { Linkedin, Globe } from 'lucide-react';

const speakers = [
    {
        name: "Harsh Kanojia",
        role: "Founder & Security Researcher",
        image: "/team/harsh.jpg",
        description: "Driving community initiatives and workshops. Researching offensive security, malware analysis, and LLM hacking.",
        linkedin: "https://www.linkedin.com/in/harsh-kanojia369/"
    },
    {
        name: "Naman Shah",
        role: "Security Researcher",
        image: "/team/naman.jpg",
        description: "Expert in router-level vulnerabilities, IoT architecture, and attacker methodology. Delivered hands-on workshops on IoT hacking.",
        linkedin: "https://www.linkedin.com/in/naman-shah-8b67a51a4/"
    },
    {
        name: "Brijesh Palta",
        role: "Cloud Security Engineer",
        image: "/team/brijesh.jpg",
        description: "Specialist in cloud infrastructure security, Shared Responsibility Models, and securing cloud-native applications.",
        linkedin: "https://www.linkedin.com/in/brijesh-palta/"
    },
    {
        name: "Himanshi Shrivastava",
        role: "SOC Operations",
        image: "/team/himanshi.jpg",
        description: "Conducted hands-on Linux Exploitation Workshop. Specializes in SOC Operations, Threat Intelligence, and Incident Response.",
        linkedin: "https://www.linkedin.com/in/himanshi-shrivastava-8000a5180/"
    },
    {
        name: "S Aravind",
        role: "Blue Team Researcher",
        image: "/team/aravind.jpg",
        description: "Specializing in Blue Team Operations and SIEM detection. Building hands-on expertise in log analysis, threat hunting, and incident response within SOC environments.",
        linkedin: "https://www.linkedin.com/in/s-aravind-2590b22b0/"
    },
    {
        name: "Gauthaman Sakthivel",
        role: "Secure Azure Data Engineer",
        image: "/team/gauthaman.jpg",
        description: "Specializing in Secure ADF pipelines, Key Vault & RBAC. Delivered the talk on 'AI Security: Threats, Risks & Defense'.",
        linkedin: "https://www.linkedin.com/in/gauthamansakthivel/",
        presentation: "https://docs.google.com/presentation/d/1R8Fz_CeKMWf_t4G0ROQG7JQHuAzgJQJf/edit?usp=sharing&ouid=113587794034483694144&rtpof=true&sd=true"
    },
    {
        name: "Kanhaiya",
        role: "IT Security Analyst",
        image: "/team/kanhaiya.jpg",
        description: "Specializing in Web and Mobile (Android) Application Security testing, network security, and secure configuration reviews. Focused on hardening enterprise security postures.",
        linkedin: "https://www.linkedin.com/in/kanhaiya-666/"
    },
    {
        name: "Lavanya Goyal",
        role: "Associate Security Engineer",
        image: "/team/lavanya.png",
        description: "Associate Security Engineer, Google Women Techmaker, and Co-Founder of IcyGirl.CreamyBoy. Self-motivated, result-focused, and passionate about cybersecurity and entrepreneurship.",
        linkedin: "https://www.linkedin.com/in/lavanya-goyal/"
    }
];

const Speakers = () => {
    return (
        <div className="min-h-screen bg-transparent pt-24 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <SEO
                    title="Our Speakers"
                    description="Meet the industry experts and researchers speaking at Cyber Sphere events."
                    keywords="cybersecurity speakers, experts, researchers, industry professionals"
                />
                
                <ScrollReveal className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-slate-900 mt-2 font-orbitron">OUR SPEAKERS</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm mt-3">
                        Meet the security analysts and researchers leading our hands-on workshops and sessions.
                    </p>
                </ScrollReveal>

                {/* Speaker Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {speakers.map((speaker, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.05}
                            className="h-full"
                        >
                            <div className="cyber-card hover:border-red-600 transition-all flex flex-col h-full text-center">
                                {/* Profile image inside square schematic frame */}
                                <div className="w-32 h-32 mx-auto mb-6 border border-slate-200 bg-slate-50 p-1 flex items-center justify-center">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                    {speaker.name}
                                </h3>
                                
                                <span className="cyber-badge cyber-badge-black mx-auto mb-4">
                                    {speaker.role}
                                </span>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {speaker.description}
                                </p>

                                {/* Action Buttons Footer */}
                                <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap justify-center gap-2">
                                    {speaker.linkedin && (
                                        <a
                                            href={speaker.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-cyber-secondary px-3 py-1.5 text-xs flex items-center gap-1.5"
                                        >
                                            <Linkedin className="w-3.5 h-3.5" />
                                            <span>LINKEDIN</span>
                                        </a>
                                    )}
                                    {speaker.presentation && (
                                        <a
                                            href={speaker.presentation}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-cyber-secondary px-3 py-1.5 text-xs flex items-center gap-1.5 border-red-200 text-red-600 hover:border-red-500 hover:bg-red-50"
                                        >
                                            <Globe className="w-3.5 h-3.5" />
                                            <span>SLIDES</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Speakers;
