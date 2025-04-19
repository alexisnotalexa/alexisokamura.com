import { useState } from 'react';
import fred from './fred.png';
import IMessageBubble from '~/components/IMessageBubble';

export default function Footer() {
  const [hovered, setHovered] = useState<'fred' | null>(null);

  return (
    <footer className="flex flex-col items-center w-full">
      {hovered === 'fred' && (
        <IMessageBubble text="follow fred, @lilexoticfred!" />
      )}
      <a
        href="https://www.instagram.com/lilexoticfred"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onMouseEnter={() => setHovered('fred')}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          src={fred}
          alt="Alexis' cat, Frederick Winston"
          className="block w-20 mb-2 xl:mb-0 xl:fixed xl:left-[calc(50%+450px)] xl:bottom-[5vh] xl:z-50 hover:translate-y-0.5"
        />
      </a>
      <p>© 2025 Alexis Okamura</p>
    </footer>
  );
}
