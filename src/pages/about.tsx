import { Link } from "wouter";

export default function About() {
  const teamMembers = [
    { name: "Abdul Rahim", role: "CREATIVE DIRECTOR", expertise: "Brand Strategy & Visual Identity" },
    { name: "ahmed iblao", role: "LEAD DEVELOPER", expertise: "Full-Stack Development & Architecture" },
    { name: "Abdul Rahim", role: "UX DESIGNER", expertise: "User Experience & Interface Design" },
    { name: "Iblao Ahmed", role: "MARKETING LEAD", expertise: "Digital Strategy & Growth Marketing" }
  ];

  const values = [
    { title: "BOLD CREATIVITY", description: "We push boundaries and challenge conventions in every project." },
    { title: "TECHNICAL EXCELLENCE", description: "Quality code and attention to detail drive everything we build." },
    { title: "CLIENT PARTNERSHIP", description: "Your success is our success. We work as an extension of your team." },
    { title: "CONTINUOUS GROWTH", description: "We stay ahead of trends and constantly evolve our skills." }
  ];

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-retro font-black mb-8">
            ABOUT US
          </h1>
          <div className="retro-card bg-white p-8 mx-auto max-w-4xl">
            <p className="text-2xl md:text-3xl font-retro font-bold mb-6">
              CREATIVE MINDS, TECHNICAL EXPERTISE
            </p>
            <p className="text-lg font-retro leading-relaxed">
              We are a collective of designers, developers, and strategists who believe 
              great digital experiences come from the perfect blend of creativity and precision. 
              Founded in 2019, we've helped businesses of all sizes achieve their digital goals.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="retro-card bg-white p-8">
            <h2 className="text-4xl font-retro font-black mb-6">OUR STORY</h2>
            <p className="text-lg font-retro leading-relaxed mb-4">
              Started in a small studio with big dreams, Farihaqarim began as a passion project 
              between friends who shared a vision: digital work should be both beautiful and functional.
            </p>
            <p className="text-lg font-retro leading-relaxed mb-4">
              Today, we've grown into a full-service agency that partners with clients across 
              industries, from innovative startups to established enterprises looking to modernize 
              their digital presence.
            </p>
            <p className="text-lg font-retro leading-relaxed">
              Every project teaches us something new, and we bring that learning to everything we create.
            </p>
          </div>
          <div className="retro-card bg-black text-white p-8">
            <h3 className="text-3xl font-retro font-black mb-6">BY THE NUMBERS</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-retro font-bold">PROJECTS COMPLETED</span>
                <span className="font-retro font-black">150+</span>
              </div>
              <div className="flex justify-between">
                <span className="font-retro font-bold">HAPPY CLIENTS</span>
                <span className="font-retro font-black">50+</span>
              </div>
              <div className="flex justify-between">
                <span className="font-retro font-bold">TEAM MEMBERS</span>
                <span className="font-retro font-black">12</span>
              </div>
              <div className="flex justify-between">
                <span className="font-retro font-bold">YEARS EXPERIENCE</span>
                <span className="font-retro font-black">5+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-retro font-black text-center mb-12">
            OUR VALUES
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="retro-card bg-white p-8 hover:bg-black hover:text-white transition-all duration-300"
              >
                <h3 className="text-2xl font-retro font-black mb-4">{value.title}</h3>
                <p className="text-lg font-retro leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pattern Break */}
        <div className="stripes-pattern h-16 opacity-10 mb-20"></div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-retro font-black text-center mb-12">
            THE TEAM
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="retro-card bg-white p-6 text-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <h3 className="text-xl font-retro font-black mb-2">{member.name}</h3>
                <h4 className="text-lg font-retro font-bold mb-3">{member.role}</h4>
                <p className="font-retro text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white p-16 text-center">
          <h3 className="text-4xl md:text-6xl font-retro font-black mb-8">
            JOIN OUR JOURNEY
          </h3>
          <p className="text-xl md:text-2xl font-retro mb-8 max-w-2xl mx-auto">
            Ready to create something amazing together? Let's start the conversation.
          </p>
          <Link href="/contact" className="retro-button bg-white text-black font-retro font-bold text-xl px-12 py-4">
            GET STARTED
          </Link>
        </div>
      </div>
    </section>
  );
}
