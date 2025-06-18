import { useEffect, useState } from "react";

interface RainDrop {
  id: number;
  left: string;
  animationDelay: string;
  content: string;
}

export default function MatrixRain() {
  const [rainDrops, setRainDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    const createRainDrop = (): RainDrop => ({
      id: Math.random(),
      left: Math.random() * 100 + "%",
      animationDelay: Math.random() * 3 + "s",
      content: Array.from({ length: 8 }, () => 
        Math.random() > 0.5 ? "1" : "0"
      ).join(" "),
    });

    // Initial rain drops
    const initialDrops = Array.from({ length: 15 }, createRainDrop);
    setRainDrops(initialDrops);

    const interval = setInterval(() => {
      setRainDrops(current => {
        // Remove old drops and add new ones
        const newDrops = current.slice(-20); // Keep only last 20
        newDrops.push(createRainDrop());
        return newDrops;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-matrix-green text-xs opacity-20 animate-matrix-rain"
          style={{ 
            left: drop.left, 
            animationDelay: drop.animationDelay,
            top: "-100vh"
          }}
        >
          {drop.content}
        </div>
      ))}
    </div>
  );
}
