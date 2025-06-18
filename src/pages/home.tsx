import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textScramble, setTextScramble] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const heroRef = useRef(null);
  const floatingElementsRef = useRef([]);

  // Scramble text effect
  useEffect(() => {
    const text = "FARIHAQARIM";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let iteration = 0;
    
    const scramble = setInterval(() => {
      setTextScramble(prev => 
        text.split("").map((letter, index) => {
          if (index < iteration) return letter;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(scramble);
      }
      iteration += 1/3;
    }, 50);

    return () => clearInterval(scramble);
  }, []);

  // Initialize loading sequence
  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 1500); // Small delay after completion
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment for realistic feel
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    // Animate floating elements
    const animateFloating = () => {
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          const speed = 0.002 + index * 0.001;
          const amplitude = 20 + index * 10;
          const offset = index * Math.PI * 0.5;
          const y = Math.sin(Date.now() * speed + offset) * amplitude;
          el.style.transform = `translateY(${y}px) rotate(${Math.sin(Date.now() * speed * 0.5) * 5}deg)`;
        }
      });
      requestAnimationFrame(animateFloating);
    };
    animateFloating();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const services = [
    { name: "BRANDING", desc: "Visual identity design", icon: "🎨" },
    { name: "DESIGN", desc: "UI/UX experiences", icon: "✨" },
    { name: "DEVELOPMENT", desc: "Web applications", icon: "⚡" },
    { name: "MARKETING", desc: "Digital campaigns", icon: "🚀" },
    { name: "SOCIAL MEDIA", desc: "Content & community", icon: "📱" },
    { name: "CONSULTATION", desc: "Strategic guidance", icon: "💡" }
  ];

  const stats = [
    { number: "150+", label: "PROJECTS" },
    { number: "50+", label: "CLIENTS" },
    { number: "5", label: "YEARS" },
    { number: "24/7", label: "SUPPORT" }
  ];

  // Create floating background elements
  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={el => floatingElementsRef.current[i] = el}
          className="absolute opacity-10"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
            fontSize: `${2 + i * 0.5}rem`,
          }}
        >
          {['◆', '●', '▲', '■', '★', '◇', '▼', '◯'][i]}
        </div>
      ))}
    </div>
  );

  // Animated background gradient
  const AnimatedBackground = () => (
    <div 
      className="fixed inset-0 opacity-30 pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.1) 0%, transparent 50%)`,
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    />
  );

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute border-white"
                style={{
                  left: `${i * 5}%`,
                  top: 0,
                  width: '1px',
                  height: '100%',
                  borderLeft: '1px solid currentColor',
                  animation: `pulse ${2 + i * 0.1}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute border-white"
                style={{
                  top: `${i * 5}%`,
                  left: 0,
                  height: '1px',
                  width: '100%',
                  borderTop: '1px solid currentColor',
                  animation: `pulse ${2 + i * 0.1}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
          
          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10">
          {/* Scrambling title */}
          <div className="text-4xl md:text-6xl font-bold mb-8 text-white font-mono tracking-wider">
            <span 
              className="inline-block"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)',
                animation: 'scramble-glow 0.1s ease-in-out infinite'
              }}
            >
              {textScramble || "FARIHAQARIM"}
            </span>
          </div>
          
          {/* Loading subtitle */}
          <div className="text-lg mb-8 text-gray-400 font-mono">
            <span className="animate-pulse">INITIALIZING CREATIVE REALITY...</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-80 h-2 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden border border-gray-600">
            <div 
              className="h-full bg-gradient-to-r from-white via-gray-300 to-white rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${Math.min(loadingProgress, 100)}%`,
                boxShadow: '0 0 10px rgba(255,255,255,0.5)'
              }}
            />
          </div>
          
          {/* Progress percentage */}
          <div className="text-sm text-gray-500 font-mono">
            {Math.floor(Math.min(loadingProgress, 100))}% COMPLETE
          </div>
          
          {/* Loading messages */}
          <div className="mt-6 text-xs text-gray-600 font-mono">
            {loadingProgress < 30 && "LOADING CREATIVE ASSETS..."}
            {loadingProgress >= 30 && loadingProgress < 60 && "INITIALIZING DESIGN SYSTEMS..."}
            {loadingProgress >= 60 && loadingProgress < 90 && "CONFIGURING USER EXPERIENCE..."}
            {loadingProgress >= 90 && "FINALIZING PRESENTATION..."}
          </div>
        </div>

        <style jsx>{`
          @keyframes scramble-glow {
            0%, 100% { 
              text-shadow: 0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3);
            }
            50% { 
              text-shadow: 0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.5);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="bg-white relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0,0,0,0.1); }
          50% { box-shadow: 0 0 40px rgba(0,0,0,0.2); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(0,0,0,0.3); }
          50% { text-shadow: 0 0 20px rgba(0,0,0,0.5); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scramble-glow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(0,0,0,0.3);
            transform: scale(1);
          }
          50% { 
            text-shadow: 0 0 30px rgba(0,0,0,0.6), 0 0 40px rgba(255,255,255,0.3);
            transform: scale(1.02);
          }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 4s ease-in-out infinite; }
        .animate-scramble-glow { animation: scramble-glow 0.1s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-scale-in { animation: scale-in 0.6s ease-out; }
        .hover-3d { 
          transition: all 0.3s ease;
          transform-style: preserve-3d;
        }
        .hover-3d:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
        }
        .retro-card {
          border: 4px solid black;
          position: relative;
          overflow: hidden;
        }
        .retro-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.6s;
          opacity: 0;
        }
        .retro-card:hover::before {
          animation: shine 0.6s ease-in-out;
        }
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
        }
        .retro-button {
          border: 3px solid;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .retro-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .retro-button:hover::before {
          left: 100%;
        }
        .retro-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .parallax-text {
          transform: translateY(${scrollY * 0.5}px);
        }
        .counter-parallax {
          transform: translateY(${scrollY * -0.2}px);
        }
        .scramble-text {
          font-family: 'Courier New', monospace;
          letter-spacing: 0.1em;
        }
      `}</style>

      <FloatingElements />
      <AnimatedBackground />

      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-20 pb-10 relative"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 
            className={`text-6xl md:text-9xl font-bold mb-8 tracking-tight parallax-text scramble-text ${
              textScramble !== "FARIHAQARIM" ? 'animate-scramble-glow' : 'animate-text-glow'
            }`}
            style={{
              transform: `perspective(1000px) rotateX(${scrollY * 0.02}deg) translateY(${scrollY * 0.1}px)`,
            }}
          >
            {textScramble !== "" ? textScramble : "FARIHAQARIM"}
          </h1>
          
          <div className="retro-card bg-white p-8 mx-auto max-w-4xl mb-12 hover-3d animate-pulse-glow animate-scale-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 counter-parallax">
              CREATIVE DIGITAL AGENCY
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              WE CREATE <span className="animate-text-glow">BOLD</span>, STRIKING DIGITAL EXPERIENCES
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="retro-button bg-black text-white font-bold text-xl px-12 py-4 w-full md:w-auto hover-3d">
                  START PROJECT
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="retro-button bg-white text-black font-bold text-xl px-12 py-4 w-full md:w-auto hover-3d">
                  VIEW WORK
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section 
        id="services" 
        data-animate
        className={`py-20 transition-all duration-1000 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 animate-text-glow">
            WHAT WE DO
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.name}
                className="retro-card bg-white p-8 text-center hover:bg-black hover:text-white transition-all duration-500 group hover-3d animate-scale-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 5}px)`
                }}
              >
                <div className="text-4xl mb-4 group-hover:animate-float">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:underline">
                  {service.name}
                </h3>
                <p className="text-lg group-hover:animate-pulse">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Counter Animation */}
      <section 
        id="stats" 
        data-animate
        className={`py-20 bg-black text-white transition-all duration-1000 relative overflow-hidden ${isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white animate-spin"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white animate-ping"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
            BY THE NUMBERS
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center hover-3d"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transform: `translateY(${Math.cos(scrollY * 0.01 + index) * 3}px)`
                }}
              >
                <div className="text-5xl md:text-6xl font-black mb-4 animate-pulse">
                  {stat.number}
                </div>
                <div className="font-bold text-xl">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section 
        id="about" 
        data-animate
        className={`py-20 transition-all duration-1000 ${isVisible['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="hover-3d">
              <h2 className="text-4xl md:text-6xl font-black mb-8 animate-text-glow">
                WHO WE ARE
              </h2>
              <p className="text-xl leading-relaxed mb-8 animate-slide-up">
                We are a collective of designers, developers, and strategists who believe 
                great digital experiences come from the perfect blend of creativity and precision.
              </p>
              <Link href="/about">
                <button className="retro-button bg-black text-white font-bold text-lg px-8 py-3 hover-3d">
                  LEARN MORE
                </button>
              </Link>
            </div>
            <div className="retro-card bg-white p-8 hover-3d animate-float">
              <h3 className="text-2xl font-black mb-6">OUR VALUES</h3>
              <ul className="space-y-4">
                {['BOLD CREATIVITY', 'TECHNICAL EXCELLENCE', 'CLIENT PARTNERSHIP', 'CONTINUOUS GROWTH'].map((value, index) => (
                  <li 
                    key={value}
                    className="font-bold animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    • {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Pattern Section */}
      <div 
        className="h-20 opacity-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)`,
          transform: `translateX(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 flex items-center">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-full bg-black mx-2 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <section 
        id="cta" 
        data-animate
        className={`py-20 bg-black text-white transition-all duration-1000 relative overflow-hidden ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-full bg-white opacity-5 animate-pulse"
              style={{
                left: `${20 + i * 20}%`,
                animationDelay: `${i * 0.3}s`,
                transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 10}px)`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 animate-text-glow hover-3d">
            READY TO START?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-slide-up">
            Let's discuss your project and create something <span className="animate-pulse">remarkable</span> together.
          </p>
          <Link href="/contact">
            <button className="retro-button bg-white text-black font-bold text-xl px-12 py-4 hover-3d animate-pulse-glow">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}