import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, canonical, keywords }) => {
    return (
        <Helmet>
            <title>{title ? `${title} | Cyber Sphere Community` : 'Cyber Sphere Community'}</title>
            <meta name="description" content={description || "Join the Cyber Sphere Community - A hub for cybersecurity enthusiasts, students, and professionals."} />
            <meta name="keywords" content={keywords || "cybersecurity, hacking, pentesting, ethical hacker, cyber sphere, community"} />
            {canonical && <link rel="canonical" href={canonical} />}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || "Cyber Sphere Community"} />
            <meta property="og:description" content={description || "Join the Cyber Sphere Community - A hub for cybersecurity enthusiasts, students, and professionals."} />
            {/* <meta property="og:image" content={image} /> Add image prop if needed */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@CyberSphere" />
            <meta name="twitter:title" content={title || "Cyber Sphere Community"} />
            <meta name="twitter:description" content={description || "Join the Cyber Sphere Community - A hub for cybersecurity enthusiasts, students, and professionals."} />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    canonical: PropTypes.string,
    keywords: PropTypes.string
};

export default SEO;
