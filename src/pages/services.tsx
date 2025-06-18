import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "BRANDING",
      description: "Bold visual identities that make powerful first impressions and lasting connections.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      title: "DESIGN",
      description: "Clean, functional designs that prioritize user experience and visual impact.",
      features: ["UI/UX Design", "Web Design", "Mobile Design", "Graphic Design"]
    },
    {
      title: "DEVELOPMENT",
      description: "Robust web applications built with modern technologies and best practices.",
      features: ["Frontend Development", "Backend Development", "E-commerce", "CMS Development"]
    },
    {
      title: "MARKETING",
      description: "Strategic campaigns that drive growth and build meaningful audience connections.",
      features: ["Digital Strategy", "Content Marketing", "SEO/SEM", "Analytics"]
    },
    {
      title: "SOCIAL MEDIA",
      description: "Engaging content and community management that builds authentic brand presence.",
      features: ["Content Creation", "Social Strategy", "Community Management", "Influencer Relations"]
    },
    {
      title: "CONSULTATION",
      description: "Expert guidance to help navigate digital challenges and opportunities.",
      features: ["Strategy Planning", "Digital Audits", "Process Optimization", "Team Training"]
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-retro font-black mb-8">
            SERVICES
          </h1>
          <div className="retro-card bg-white p-8 mx-auto max-w-3xl">
            <p className="text-2xl md:text-3xl font-retro font-bold">
              COMPREHENSIVE DIGITAL SOLUTIONS
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="retro-card bg-white p-8 hover:bg-black hover:text-white transition-all duration-300 group"
            >
              <h3 className="text-3xl font-retro font-black mb-4 group-hover:underline">
                {service.title}
              </h3>
              <p className="text-lg font-retro mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="font-retro font-bold">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="stripes-pattern h-16 opacity-10 mb-16"></div>
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-retro font-black mb-12">
            OUR PROCESS
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "DISCOVER", desc: "Understanding your goals and challenges" },
              { step: "02", title: "DESIGN", desc: "Creating solutions that work" },
              { step: "03", title: "DEVELOP", desc: "Building with precision and care" },
              { step: "04", title: "DELIVER", desc: "Launching and supporting your success" }
            ].map((phase) => (
              <div key={phase.step} className="retro-card bg-white p-6 text-center">
                <div className="text-4xl font-retro font-black mb-4">{phase.step}</div>
                <h4 className="text-2xl font-retro font-bold mb-3">{phase.title}</h4>
                <p className="font-retro">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white p-16 text-center">
          <h3 className="text-4xl md:text-6xl font-retro font-black mb-8">
            READY TO START?
          </h3>
          <p className="text-xl md:text-2xl font-retro mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something remarkable together.
          </p>
          <Link href="/contact" className="retro-button bg-white text-black font-retro font-bold text-xl px-12 py-4">
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </section>
  );
}
