import { useState } from 'react';
import IMessageBubble from '../IMessageBubble';

export default function Contact() {
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
