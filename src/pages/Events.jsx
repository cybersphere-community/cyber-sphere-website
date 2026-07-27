import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, Clock, ArrowRight, Linkedin, Download, X } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { upcomingEvents, pastEvents } from '../data/events';

const Events = () => {
    const [selectedEvent, setSelectedEvent] = React.useState(null);

    // Schema.org Structured Data for Events
    const eventSchema = upcomingEvents.map(event => ({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": event.title,
        "startDate": event.date,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
            "@type": "VirtualLocation",
            "url": "https://cybersphere-community.github.io/events"
        },
        "description": event.description,
        "organizer": {
            "@type": "Organization",
            "name": "Cyber Sphere Community",
            "url": "https://cybersphere-community.github.io"
        }
    }));

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedEvent]);

    return (
        <div className="min-h-screen bg-transparent text-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(eventSchema)}
                </script>
            </Helmet>
            <SEO
                title="Cybersecurity Events & Workshops | CTF Competitions"
                description="Attend hands-on cybersecurity workshops, capture the flag (CTF) competitions, and security training events. Learn ethical hacking, penetration testing, and infosec skills through practical sessions."
                keywords="cybersecurity events india, ctf competitions, security workshops, ethical hacking events, penetration testing training, infosec meetups, bug bounty workshops, security conferences"
            />
            <div className="max-w-7xl mx-auto">
                
                {/* Upcoming Events Section */}
                {upcomingEvents.length > 0 && (
                    <section className="mb-20">
                        <ScrollReveal className="text-center mb-10">
                            <h1 className="text-4xl font-extrabold text-slate-900 mt-2 font-orbitron">UPCOMING EVENTS</h1>
                        </ScrollReveal>

                        <div className="grid gap-6">
                            {upcomingEvents.map((event, index) => (
                                <ScrollReveal
                                    key={event.id}
                                    delay={index * 0.05}
                                    className="w-full"
                                >
                                    <div className="cyber-card border-slate-200/80 hover:border-red-600 transition-colors p-8">
                                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                                            <div className="flex-1 space-y-4">
                                                <span className="cyber-badge cyber-badge-red">
                                                    {event.type}
                                                </span>
                                                <h2 className="text-2xl font-bold text-slate-900">
                                                    {event.title}
                                                </h2>
                                                <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                                                    {event.description}
                                                </p>
                                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono-tech text-slate-500 pt-2">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="h-4 w-4 text-red-600" />
                                                        <span>{event.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="h-4 w-4 text-red-600" />
                                                        <span>{event.time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="h-4 w-4 text-red-600" />
                                                        <span>{event.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-auto shrink-0">
                                                <a 
                                                    href="https://forms.gle/xsLyYgHzMiYsp8zx6" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="btn-cyber-primary btn-cyber-primary-green w-full lg:w-auto text-center"
                                                >
                                                    REGISTER_SESSION
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </section>
                )}

                {/* Conducted Events Section */}
                <section>
                    <ScrollReveal className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-orbitron">EVENTS CONDUCTED</h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pastEvents.map((event, index) => (
                            <ScrollReveal
                                key={event.id}
                                delay={index * 0.05}
                                className="h-full"
                            >
                                <div className="cyber-card hover:border-red-600 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="cyber-badge cyber-badge-black">{event.type}</span>
                                        <span className="text-xs font-mono-tech text-slate-400 font-bold">{event.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight">
                                        {event.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                                        {event.description}
                                    </p>

                                    <div className="pt-4 border-t border-slate-100 mt-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                                        {/* Speakers / Organizers */}
                                        <div className="flex flex-wrap gap-4 text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider">
                                            {event.speaker && (
                                                <div>
                                                    <span className="block text-slate-400 text-[9px] mb-0.5">Speaker:</span>
                                                    <span className="font-bold text-slate-700">{event.speaker}</span>
                                                </div>
                                            )}
                                            {event.organizer && (
                                                <div>
                                                    <span className="block text-slate-400 text-[9px] mb-0.5">Organizer:</span>
                                                    <span className="font-bold text-slate-700">{event.organizer}</span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        {/* Recap CTA */}
                                        {event.blogContent && (
                                            <button
                                                onClick={() => setSelectedEvent(event)}
                                                className="btn-cyber-secondary px-4 py-2 text-xs flex items-center justify-center gap-1.5 shrink-0"
                                            >
                                                <span>READ_RECAP</span>
                                                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </div>

            {/* Full Screen Event Recap Modal */}
            {selectedEvent && createPortal(
                <div className="fixed inset-0 z-[100] bg-white overflow-y-auto font-sans">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* Header bar */}
                        <div className="flex justify-between items-center mb-10">
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="btn-cyber-secondary px-4 py-2 text-xs flex items-center gap-2"
                            >
                                <X className="w-4 h-4" />
                                <span>CLOSE_RECAP</span>
                            </button>
                            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Event Recap</span>
                        </div>

                        {/* Layout Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                            {/* Left Side: Metadata & Profiles */}
                            <div className="lg:col-span-4 space-y-6">
                                {selectedEvent.eventPoster && (
                                    <div className="border border-slate-200 p-1 bg-slate-50">
                                        <img src={selectedEvent.eventPoster} alt="Event Poster" className="w-full h-auto object-cover" />
                                    </div>
                                )}

                                <div className="space-y-4">
                                    {/* Speaker Profile */}
                                    {selectedEvent.speaker && (
                                        <div className="border border-slate-200 bg-slate-50 p-6 text-center">
                                            <div className="w-16 h-16 overflow-hidden mx-auto mb-3 border border-slate-300">
                                                {selectedEvent.speakerImage ? (
                                                    <img src={selectedEvent.speakerImage} alt={selectedEvent.speaker} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center font-mono text-xl font-bold text-white">
                                                        {selectedEvent.speaker.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <h4 className="font-bold text-slate-900 text-sm mb-0.5">{selectedEvent.speaker}</h4>
                                            <p className="text-slate-400 text-[10px] font-mono-tech uppercase mb-3">Speaker</p>
                                            {selectedEvent.speakerUrl && (
                                                <a href={selectedEvent.speakerUrl} target="_blank" rel="noopener noreferrer" className="btn-cyber-secondary px-3 py-1.5 text-[10px] flex items-center justify-center gap-1.5 w-full">
                                                    <Linkedin className="w-3 h-3 text-sky-700" />
                                                    <span>LINKEDIN</span>
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    {/* Organizer Profile */}
                                    {selectedEvent.organizer && (
                                        <div className="border border-slate-200 bg-slate-50 p-6 text-center">
                                            <div className="w-16 h-16 overflow-hidden mx-auto mb-3 border border-slate-300">
                                                {selectedEvent.organizerImage ? (
                                                    <img src={selectedEvent.organizerImage} alt={selectedEvent.organizer} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center font-mono text-xl font-bold text-white">
                                                        {selectedEvent.organizer.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <h4 className="font-bold text-slate-900 text-sm mb-0.5">{selectedEvent.organizer}</h4>
                                            <p className="text-slate-400 text-[10px] font-mono-tech uppercase mb-3">Organizer</p>
                                            {selectedEvent.organizerUrl && (
                                                <a href={selectedEvent.organizerUrl} target="_blank" rel="noopener noreferrer" className="btn-cyber-secondary px-3 py-1.5 text-[10px] flex items-center justify-center gap-1.5 w-full">
                                                    <Linkedin className="w-3 h-3 text-sky-700" />
                                                    <span>LINKEDIN</span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Side: Recap content */}
                            <div className="lg:col-span-8 space-y-6">
                                <div>
                                    <span className="cyber-badge cyber-badge-red mb-4">
                                        {selectedEvent.type} RECAP
                                    </span>
                                    <h1 className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                                        {selectedEvent.title}
                                    </h1>
                                    
                                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 text-slate-500 font-mono-tech text-xs">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4 text-red-600" /> {selectedEvent.date}
                                        </span>
                                        {selectedEvent.presentationLink && selectedEvent.presentationLink !== '#' && (
                                            <a
                                                href={selectedEvent.presentationLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-cyber-primary flex items-center gap-1.5 px-4 py-2 text-xs"
                                            >
                                                <Download className="w-3.5 h-3.5" />
                                                <span>DOWNLOAD_PRESENTATION</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4">
                                    {selectedEvent.blogContent?.split('\n').map((paragraph, idx) => {
                                        const trimmed = paragraph.trim();
                                        if (!trimmed) return null;
                                        if (trimmed.startsWith('###')) {
                                            return (
                                                <h3 key={idx} className="text-lg font-bold text-slate-900 font-mono-tech uppercase border-b border-slate-100 pb-2 mt-8 mb-3">
                                                    {trimmed.replace('###', '').trim()}
                                                </h3>
                                            );
                                        }
                                        if (trimmed.startsWith('-')) {
                                            return (
                                                <li key={idx} className="ml-4 list-disc pl-1 mb-1 font-sans text-slate-600">
                                                    {trimmed.replace('-', '').trim()}
                                                </li>
                                            );
                                        }
                                        if (trimmed.startsWith('**')) {
                                            return <p key={idx} className="font-bold text-slate-900 mb-2">{trimmed.replace(/\*\*/g, '')}</p>;
                                        }
                                        return <p key={idx} className="font-sans text-slate-600">{trimmed}</p>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Events;
