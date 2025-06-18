import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/services", label: "SERVICES" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b-4 border-black">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="text-3xl font-retro font-black cursor-pointer hover:underline">
              FARIHAQARIM
            </div>
          </Link>
          
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <span 
                    className={`font-retro font-bold text-lg cursor-pointer transition-all duration-200 ${
                      location === item.path 
                        ? "underline decoration-4" 
                        : "hover:underline decoration-2"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          
          <button 
            className="md:hidden retro-button bg-white px-4 py-2 font-retro font-bold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            MENU
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-black pt-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <span 
                      className={`block font-retro font-bold text-lg cursor-pointer transition-all duration-200 ${
                        location === item.path 
                          ? "underline decoration-4" 
                          : "hover:underline decoration-2"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
