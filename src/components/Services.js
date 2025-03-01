import React from "react";
import "../styles/services.css"; 
import { FaFileAlt, FaMobileAlt, FaCode, FaHeadphones, FaHandshake } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

const servicesData = [
  {
    icon: <FaFileAlt />,
    title: "Text Processing",
    description:
      "We provide advanced text processing solutions, including NLP, sentiment analysis, and text classification.",
  },
  {
    icon: <FaHeadphones />,
    title: "Audio Processing",
    description:
      "From speech-to-text conversion to audio enhancement, we leverage AI to transform audio data into insights.",
  },
  {
    icon: <FaHandshake />,
    title: "AI Agents",
    description:
      "We build AI agents that autonomously makes decisions, takes actions, and interacts with others—without human input.",
  },
  {
    icon: <MdArticle />,
    title: "AI Summarizers",
    description:
      "Our AI-powered summarization tools help extract key information from large documents, saving time.",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "We build responsive, user-friendly, and scalable web applications using the latest technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Android Development",
    description:
      "Our team creates high-performance Android apps with intuitive interfaces and robust functionality.",
  },
];

const blogsData = [
  {
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    title: "Top AI Trends in 2025",
    link: "https://cloud.google.com/blog/topics/public-sector/5-ai-trends-shaping-the-future-of-the-public-sector-in-2025",
    description: "Discover the latest trends in AI and how they are shaping industries.",
  },
  {
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    title: "How NLP is Transforming Businesses",
    link: "https://www.forbes.com/councils/forbestechcouncil/2023/05/16/how-natural-language-processing-is-revolutionizing-business-operations/",
    description: "Learn how NLP is revolutionizing customer service and data analysis.",
  },
  {
    image: "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg",
    title: "Building Scalable Web Applications",
    link: "https://www.qovery.com/blog/7-things-to-consider-to-build-scalable-web-applications/",
    description: "Explore best practices for creating scalable and efficient web applications.",
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

const BlogCard = ({ image, title, link, description }) => (
  <div className="blog-card">
    <img src={image} alt={title} className="blog-image" />
    <h3 className="blog-title">{title}</h3>
    <p className="blog-description">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
  </div>
);

const Services = () => {
  return (
    <div className="services-section" id="services">
      {/* Services Introduction */}
      <div className="services-intro">
        <p className="section-subtitle">Services</p>
        <h2 className="section-title">
          Delivering cutting-edge services tailored to your needs.
        </h2>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Relevant Blogs Section */}
      <div className="blogs-section">
        <h2 className="blogs-title">Relevant Blogs</h2>
        <div className="blogs-grid">
          {blogsData.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
