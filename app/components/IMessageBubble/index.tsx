import { useState, useEffect } from 'react';
import './IMessageBubble.css';

export default function IMessageBubble({ text }: { text: string }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (!pos) return null;

  return (
    <p
      className="bubble text-xs"
      style={{
        position: 'fixed',
        left: `${pos.x + 12}px`,
        top: `${pos.y - 24}px`,
        zIndex: 100,
        pointerEvents: 'none',
      }}
    >
      {text}
    </p>
  );
}
