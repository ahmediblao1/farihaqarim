import { useState } from "react";
import ProjectDialog from "../components/project-dialog";
import { Link } from "wouter";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const portfolioItems = [
    {
      title: "BRAND REVOLUTION",
      category: "BRANDING",
      description: "Complete brand transformation for a tech startup, including logo, guidelines, and digital presence.",
      year: "2024",
      client: "TechFlow Inc.",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Guidelines"],
      challenge: "The client needed a complete rebrand to position themselves as industry leaders and attract enterprise clients.",
      solution: "We created a bold, modern identity system with consistent messaging and visual language across all touchpoints.",
      results: ["400% increase in brand recognition", "50% growth in enterprise leads", "Featured in Design Week magazine"]
    },
    {
      title: "MINIMAL INTERFACE",
      category: "UI/UX DESIGN",
      description: "Clean, user-focused interface design for a productivity application with 50k+ users.",
      year: "2024",
      technologies: ["React", "TypeScript", "Figma", "User Testing"],
      challenge: "Users were overwhelmed by complex interfaces and abandoning the productivity app after trial periods.",
      solution: "We redesigned the entire user experience with minimalist principles and intuitive navigation patterns.",
      results: ["85% increase in user retention", "60% reduction in support tickets", "4.8/5 app store rating"]
    },
    {
      title: "E-COMMERCE PLATFORM",
      category: "DEVELOPMENT",
      description: "Full-stack e-commerce solution with custom CMS and payment integration.",
      year: "2023",
      technologies: ["Node.js", "React", "PostgreSQL", "Stripe", "AWS"],
      challenge: "Client needed a scalable e-commerce platform that could handle high traffic and complex inventory management.",
      solution: "Built a robust platform with microservices architecture, real-time inventory tracking, and seamless payment processing.",
      results: ["99.9% uptime achieved", "300% increase in sales", "50% faster page load times"]
    },
    {
      title: "SOCIAL CAMPAIGN",
      category: "MARKETING",
      description: "Viral social media campaign that increased brand awareness by 300%.",
      year: "2024",
      technologies: ["Social Media Analytics", "Content Creation", "Influencer Partnerships"],
      challenge: "Brand struggled with low social media engagement and limited reach among target demographics.",
      solution: "Created a multi-platform campaign with user-generated content and strategic influencer collaborations.",
      results: ["5M+ impressions", "300% follower growth", "150% engagement rate increase"]
    },
    {
      title: "CORPORATE IDENTITY",
      category: "BRANDING",
      description: "Professional rebrand for established consulting firm, modernizing their visual identity.",
      year: "2023",
      technologies: ["Brand Strategy", "Logo Design", "Print Design", "Digital Assets"],
      challenge: "Traditional consulting firm needed to modernize their image to attract younger clients and talent.",
      solution: "Developed a sophisticated yet approachable brand identity that balanced professionalism with innovation.",
      results: ["40% increase in millennial clients", "Brand recognition up 250%", "Employee satisfaction improved"]
    },
    {
      title: "MOBILE APP DESIGN",
      category: "UI/UX DESIGN",
      description: "Intuitive mobile app design focusing on accessibility and user engagement.",
      year: "2024",
      technologies: ["React Native", "Accessibility Guidelines", "User Research", "Prototyping"],
      challenge: "App needed to be fully accessible while maintaining engaging user experience for all demographics.",
      solution: "Implemented comprehensive accessibility features without compromising on visual appeal or functionality.",
      results: ["WCAG 2.1 AA compliance", "95% user satisfaction", "Featured as Apple's App of the Day"]
    },
    {
      title: "WEB PLATFORM",
      category: "DEVELOPMENT",
      description: "Custom web platform for content creators with advanced analytics and monetization.",
      year: "2023",
      technologies: ["Vue.js", "Python", "Machine Learning", "Payment APIs", "Analytics"],
      challenge: "Content creators needed better tools to understand their audience and monetize their content effectively.",
      solution: "Built an AI-powered platform with predictive analytics and integrated monetization features.",
      results: ["200% creator earnings increase", "90% user retention rate", "50,000+ active creators"]
    },
    {
      title: "DIGITAL STRATEGY",
      category: "CONSULTING",
      description: "Comprehensive digital transformation strategy for traditional retail business.",
      year: "2024",
      technologies: ["Digital Audit", "Technology Strategy", "Process Optimization", "Training Programs"],
      challenge: "Traditional retailer was losing market share to online competitors and needed digital transformation.",
      solution: "Developed phased digital transformation plan including e-commerce, inventory systems, and staff training.",
      results: ["180% online sales growth", "40% operational efficiency gain", "Successfully expanded to 3 new markets"]
    }
  ];

  const categories = ["ALL", "BRANDING", "UI/UX DESIGN", "DEVELOPMENT", "MARKETING", "CONSULTING"];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-retro font-black mb-8">
            PORTFOLIO
          </h1>
          <div className="retro-card bg-white p-8 mx-auto max-w-3xl">
            <p className="text-2xl md:text-3xl font-retro font-bold">
              SELECTED WORKS & CASE STUDIES
            </p>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button 
              key={category}
              className="retro-button bg-white text-black font-retro font-bold px-6 py-3 hover:bg-black hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="retro-card bg-white p-8 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer"
              onClick={() => handleProjectClick(item)}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-retro font-bold text-sm bg-black text-white px-3 py-1 group-hover:bg-white group-hover:text-black">
                  {item.category}
                </span>
                <span className="font-retro font-bold text-2xl">
                  {item.year}
                </span>
              </div>
              <h3 className="text-3xl font-retro font-black mb-4 group-hover:underline">
                {item.title}
              </h3>
              <p className="text-lg font-retro leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="font-retro font-bold text-sm group-hover:underline">
                CLICK TO VIEW DETAILS →
              </div>
            </div>
          ))}
        </div>

        {/* Pattern Break */}
        <div className="checkerboard-pattern h-16 opacity-10 mb-16"></div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "150+", label: "PROJECTS COMPLETED" },
            { number: "50+", label: "HAPPY CLIENTS" },
            { number: "5", label: "YEARS EXPERIENCE" },
            { number: "24/7", label: "SUPPORT AVAILABLE" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-retro font-black mb-2">
                {stat.number}
              </div>
              <div className="font-retro font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white p-16 text-center">
          <h3 className="text-4xl md:text-6xl font-retro font-black mb-8">
            NEXT PROJECT?
          </h3>
          <p className="text-xl md:text-2xl font-retro mb-8 max-w-2xl mx-auto">
            Ready to create something extraordinary? Let's make it happen.
          </p>
          <Link href="/contact" className="retro-button bg-white text-black font-retro font-bold text-xl px-12 py-4">
            START YOUR PROJECT
          </Link>
        </div>
      </div>
      
      {/* Project Dialog */}
      <ProjectDialog 
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        project={selectedProject}
      />
    </section>
  );
}
