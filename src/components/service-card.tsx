interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  color: string;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  color 
}: ServiceCardProps) {
  return (
    <div className="glass-morphism p-8 rounded-2xl hologram-border hover:scale-105 transition-all duration-300 group">
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="w-full h-48 object-cover rounded-xl mb-6" 
      />
      <i className={`fas ${icon} text-4xl ${color} mb-4 group-hover:animate-bounce`}></i>
      <h3 className="text-2xl font-orbitron font-bold text-cyber-blue mb-4">{title}</h3>
      <p className="text-chrome">{description}</p>
    </div>
  );
}
