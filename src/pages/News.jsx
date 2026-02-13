const News = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-brand-primary mb-8 tracking-tight">Latest News</h1>
            <div className="space-y-6">
                {[1, 2].map((i) => (
                    <article key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-card transition-all duration-300">
                        <h2 className="text-2xl font-bold text-brand-primary mb-3">Cyber Sphere Hackathon {2024 + i} Announced</h2>
                        <p className="text-slate-500 mb-6 leading-relaxed">We are thrilled to announce our annual hackathon focusing on AI safety, bringing together the brightest minds in the community.</p>
                        <a href="#" className="inline-flex items-center text-brand-accent font-bold hover:text-blue-700 transition-colors">
                            Read more <span className="ml-2">→</span>
                        </a>
                    </article>
                ))}
            </div>
        </div>
    );
};
export default News;
