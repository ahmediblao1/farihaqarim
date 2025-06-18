import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const contactInfo = [
    { label: "EMAIL", value: "hello@farihaqarim.com" },
    { label: "PHONE", value: "+90 (535) 716-8085" },
    { label: "LOCATION", value: "Istanbul, Turkey" },
    { label: "RESPONSE TIME", value: "24 HOURS" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xeokzgpj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', projectType: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-retro font-black mb-8">
            CONTACT
          </h1>
          <div className="retro-card bg-white p-8 mx-auto max-w-3xl">
            <p className="text-2xl md:text-3xl font-retro font-bold">
              LET'S CREATE SOMETHING TOGETHER
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="retro-card bg-white p-8">
              <h2 className="text-3xl font-retro font-black mb-8">GET IN TOUCH</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="border-b-2 border-black pb-4">
                    <div className="text-lg font-retro font-bold mb-1">{info.label}</div>
                    <div className="text-xl font-retro">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="retro-card bg-black text-white p-8">
              <h3 className="text-2xl font-retro font-black mb-6">WHY WORK WITH US?</h3>
              <ul className="space-y-4">
                <li className="font-retro">• CREATIVE & STRATEGIC APPROACH</li>
                <li className="font-retro">• TRANSPARENT COMMUNICATION</li>
                <li className="font-retro">• ON-TIME DELIVERY</li>
                <li className="font-retro">• ONGOING SUPPORT</li>
                <li className="font-retro">• COMPETITIVE PRICING</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="retro-card bg-white p-8">
            <h2 className="text-3xl font-retro font-black mb-8">START YOUR PROJECT</h2>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border-2 border-green-500 rounded">
                <p className="font-retro font-bold text-green-800">
                  MESSAGE SENT SUCCESSFULLY! WE'LL GET BACK TO YOU WITHIN 24 HOURS.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border-2 border-red-500 rounded">
                <p className="font-retro font-bold text-red-800">
                  SOMETHING WENT WRONG. PLEASE TRY AGAIN OR EMAIL US DIRECTLY.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="font-retro font-bold text-lg block mb-2">
                  NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  className="w-full retro-border bg-white text-black font-retro text-lg p-4 focus:bg-black focus:text-white transition-all duration-300 outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="font-retro font-bold text-lg block mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                  className="w-full retro-border bg-white text-black font-retro text-lg p-4 focus:bg-black focus:text-white transition-all duration-300 outline-none"
                />
              </div>

              {/* Project Type Field */}
              <div>
                <label className="font-retro font-bold text-lg block mb-2">
                  PROJECT TYPE
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full retro-border bg-white text-black font-retro text-lg p-4 focus:bg-black focus:text-white transition-all duration-300 outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="branding">Branding</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="social-media">Social Media</option>
                  <option value="full-package">Full Package</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="font-retro font-bold text-lg block mb-2">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full retro-border bg-white text-black font-retro text-lg p-4 focus:bg-black focus:text-white transition-all duration-300 resize-none outline-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full retro-button bg-black text-white font-retro font-bold text-xl py-4 px-8 hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>

        {/* Pattern Section */}
        <div className="dots-pattern h-32 opacity-10 my-20"></div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-retro font-black mb-12">
            FREQUENTLY ASKED
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: "HOW LONG DOES A PROJECT TAKE?", a: "Typically 2-8 weeks depending on scope and complexity." },
              { q: "WHAT'S YOUR PROCESS?", a: "Discovery → Design → Development → Launch → Support" },
              { q: "DO YOU OFFER SUPPORT?", a: "Yes, we provide ongoing support and maintenance packages." },
              { q: "WHAT ARE YOUR RATES?", a: "Project rates vary. Contact us for a custom quote." }
            ].map((faq, index) => (
              <div key={index} className="retro-card bg-white p-6 text-left">
                <h4 className="font-retro font-black text-lg mb-3">{faq.q}</h4>
                <p className="font-retro">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}