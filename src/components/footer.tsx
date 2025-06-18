import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Branding", href: "/services" },
      { name: "Design", href: "/services" },
      { name: "Development", href: "/services" },
      { name: "Marketing", href: "/services" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact", href: "/contact" },
      { name: "Services", href: "/services" }
    ],
    contact: [
      { name: "hello@farihaqarim.com", href: "mailto:hello@farihaqarim.com" },
      { name: "+1 (555) 123-4567", href: "tel:+15551234567" },
      { name: "New York, NY", href: "#" }
    ]
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <h3 className="text-3xl font-retro font-black mb-6 cursor-pointer hover:underline">
                FARIHAQARIM
              </h3>
            </Link>
            <p className="font-retro text-lg leading-relaxed">
              Creating bold, striking digital experiences that make an impact.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-retro font-black mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="font-retro hover:underline cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-retro font-black mb-6">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="font-retro hover:underline cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-retro font-black mb-6">CONTACT</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-retro hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-white pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-retro font-bold mb-4 md:mb-0">
              © {currentYear} FARIHAQARIM. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-8">
              <span className="font-retro hover:underline cursor-pointer">PRIVACY</span>
              <span className="font-retro hover:underline cursor-pointer">TERMS</span>
              <span className="font-retro hover:underline cursor-pointer">COOKIES</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}