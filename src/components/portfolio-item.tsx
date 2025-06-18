interface PortfolioItemProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  gradientClass: string;
}

export default function PortfolioItem({ 
  imageUrl, 
  imageAlt, 
  title, 
  subtitle, 
  gradientClass 
}: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl hologram-border">
      <img 
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
      />
      <div className={`absolute inset-0 ${gradientClass} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}>
        <div className="text-center">
          <h4 className="text-xl font-orbitron font-bold text-black mb-2">{title}</h4>
          <p className="text-black">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
