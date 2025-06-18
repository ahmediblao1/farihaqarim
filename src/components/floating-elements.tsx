export default function FloatingElements() {
  const elements = [
    {
      id: 1,
      className: "w-20 h-20 bg-cyber-gradient rounded-full opacity-50",
      style: { top: "20%", left: "10%", animationDelay: "0s" }
    },
    {
      id: 2,
      className: "w-16 h-16 bg-hot-pink rounded-lg opacity-60",
      style: { top: "40%", right: "20%", animationDelay: "1s" }
    },
    {
      id: 3,
      className: "w-24 h-24 bg-neon-green rounded-full opacity-40",
      style: { bottom: "40%", left: "20%", animationDelay: "2s" }
    },
    {
      id: 4,
      className: "w-18 h-18 bg-deep-purple rounded-lg opacity-50",
      style: { bottom: "20%", right: "10%", animationDelay: "1.5s" }
    }
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute animate-float ${element.className}`}
          style={element.style}
        />
      ))}
    </div>
  );
}
