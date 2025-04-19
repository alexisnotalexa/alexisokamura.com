import './main.css';
import fred from './fred.png';
import About from '../components/sections/About';
import Experience from '~/components/sections/Experience';

export function Main() {
  return (
    <main className="min-h-screen bg-[#ffffea] text-black px-4 py-10 md:p-10 lg:p-12 font-light">
      <div className="relative max-w-screen-md mx-auto flex flex-col gap-16 sm:gap-18 md:gap-20 lg:gap-28">
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

import { useState, useEffect } from 'react';

function IMessageBubble({ text }: { text: string }) {
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

function Contact() {
  const [hovered, setHovered] = useState<'twitter' | 'email' | null>(null);

  const links = [
    { label: 'codepen', href: 'https://codepen.io/alexisnotalexa' },
    { label: 'github', href: 'https://github.com/alexisnotalexa' },
    { label: 'instagram', href: 'https://www.instagram.com/hikkkkki/' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/alexiskokamura/' },
  ];

  return (
    <div className="flex flex-col md:flex-row" role="list">
      {hovered === 'twitter' && <IMessageBubble text="tweet me" />}
      {hovered === 'email' && <IMessageBubble text="email me" />}

      <div className="w-full mb-2 md:mb-0 md:text-right md:w-1/4 md:pr-8 lg:pr-12">
        <h2 className="font-semibold text-3xl">contact</h2>
      </div>

      <ul className="flex flex-col flex-1 w-full">
        <li className="mb-0" role="listitem">
          <a
            href="https://twitter.com/alexisnotalexa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-0"
            onMouseEnter={() => setHovered('twitter')}
            onMouseLeave={() => setHovered(null)}
            role="listitem"
          >
            @alexisnotalexa
          </a>
        </li>

        <li className="mb-0" role="listitem">
          <a
            href="mailto:alexiskokamura@gmail.com"
            className="inline-block mb-6"
            onMouseEnter={() => setHovered('email')}
            onMouseLeave={() => setHovered(null)}
            role="listitem"
          >
            alexiskokamura@gmail.com
          </a>
        </li>

        {links.map(({ label, href }) => (
          <li key={label} className="mb-0" role="listitem">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-0 inline-block transition-all duration-300 relative after:block after:h-0.5 after:w-full after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
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
