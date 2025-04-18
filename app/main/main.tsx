import "./main.css";
import profilePic from "./AlexisOkamura-FrederickWinston.jpg";
import fred from "./fred.png";

export function Main() {
    return (
        <main className="min-h-screen bg-[#fdfdfa] text-black px-4 py-10 md:p-10 lg:p-12 font-light">
            <div className="relative max-w-screen-md mx-auto flex flex-col gap-16 sm:gap-18 md:gap-20 lg:gap-28">
                <About />
                <WorkExperience />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}

function About() {
    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="font-semibold text-3xl mb-10 sm:mb-12">alexis okamura</h1>
            <div className="flex flex-col w-full items-center md:flex-row">
                <img className="w-3/4 mb-10 md:mb-0 md:w-2/5 md:pr-8" src={profilePic} />
                <div className="w-full flex-1 md:w-1/2">
                    <p className="mb-4">Born and raised in Honolulu, I've lived coast to coast—Seattle and now Brooklyn, where I live with my cat, Frederick Winston. Currently, I'm a Software Engineer at Remitly, focused on building features that help people worldwide send money to their loved ones.</p>
                    <p className="mb-4">My love for art and design began as soon as I could hold a pencil. As a software engineer, I bring a sharp eye and obsessive attention to detail to crafting interfaces that are both visually striking and thoughtfully engineered. Art has always been at the core of who I am, and it's what drives my passion for building beautiful, meaningful digital experiences.
                    </p>
                    <p>✽</p>
                </div>
            </div>
        </div>
    );
}

interface Experience {
    title: string;
    href: string;
    duration: string;
    description: string;
    technologies: Array<string>;
}

function WorkExperience() {
    const experiences: Array<Experience> = [
        {
            title: "Software Engineer @ Remitly",
            href: "https://www.remitly.com/",
            duration: "11/22—Now",
            description: "I contributed to various teams, most recently focusing on streamlining the send experience for users transferring money to themselves. I also played a key role in helping to migrate existing design tokens to our new design token system, helping to establish a more cohesive and scalable foundation across the platform.",
            technologies: ["React Native", "TypeScript", "Redux", "Apollo GraphQL", "GraphQL", "Node.js"]
        },
        {
            title: "Software Engineer @ Compass",
            href: "https://www.compass.com/",
            duration: "12/21—9/22",
            description: "I designed and launched an offer management tool that streamlined how agents present client offers. Additionally, I spearheaded the transition to our in-house design system, improving UI consistency and accelerating development cycles.",
            technologies: ["React", "TypeScript", "Redux", "MobX"]
        },
        {
            title: "Software Engineer @ Cisco",
            href: "https://www.cisco.com/c/en/us/products/conferencing/webex.html",
            duration: "10/19—11/21",
            description: "I helped modernize legacy contact center software by building scalable, reusable UI components. I also established front-end coding standards and significantly increased test coverage, enhancing code quality and team alignment.",
            technologies: ["React", "TypeScript", "Apollo GraphQL", "GraphQL", "Web Components", "Scala"]
        },
        {
            title: "Front-End Software Engineer @ Flyhomes",
            href: "https://flyhomes.com/",
            duration: "06/18—10/19",
            description: "I led the rebranding of our customer-facing website and built a referral program to track user referrals and bonus payouts. I also improved lead conversion by refining the user signup flow and automating the scheduling of introductory calls.",
            technologies: ["React", "Redux", "Ruby on Rails", "AWS"]
        },
    ];

    function renderExperience({ title, href, duration, description, technologies }: Experience) {
        return (
            <div className="mb-10" role="listitem">
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mb-0 transition-all duration-300 relative inline-block"
                >
                    <span className="font-medium inline-block after:block after:h-0.5 after:w-full after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">{title}</span>
                    <sup className="font-medium ml-1">{duration}</sup>
                </a>
                <p className="mb-4">{description}</p>
                <p className="text-xs" aria-label="Technologies used">
                    {technologies.map((tech, i, arr) => (
                        <span key={tech}>
                        {tech}
                        {i < arr.length - 1 && <span aria-hidden="true"> • </span>}
                        </span>
                    ))}
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full mb-2 md:mb-0 md:text-right md:w-1/4 md:pr-8 lg:pr-12">
            <h1 className="font-semibold text-3xl">experience</h1>
            </div>
            <div className="flex-1 w-full" role="list">
                {experiences.map((experience) => renderExperience(experience))}
                <a
                  href="https://docs.google.com/document/d/1_51J00ObtTVf8BIMcWZuNjnIhfuLikkv0iPoSgQxRP4/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mb-0 transition-all duration-300 relative"
                >
                    <span className="font-medium inline-block after:block after:h-0.5 after:w-full after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
                        Resume
                    </span>
                    <span className="font-medium inline-block transition-transform duration-300 group-hover:translate-x-1">&nbsp;→</span>
                </a>
            </div>
        </div>
    );
}

import { useState, useEffect } from "react";


function IMessageBubble({ text }: { text: string }) {
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  
    useEffect(() => {
      const move = (e: MouseEvent) => {
        setPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    }, []);
  
    if (!pos) return null;
  
    return (
      <div
        className="fixed z-50 px-3 py-1 text-white text-xs bg-blue-500 rounded-2xl shadow-md pointer-events-none transition-transform duration-75"
        style={{
          left: `${pos.x + 8}px`,
          top: `${pos.y - 24}px`,
        }}
      >
        {text}
        {/* Tail (right-middle) */}
        <div
          className="absolute w-3 h-3 bg-blue-500 rotate-45"
          style={{
            top: "50%",
            right: "-3px",
            transform: "translateY(-50%) rotate(45deg)",
            borderRadius: "2px",
            boxSizing: "unset"
          }}
        />
      </div>
    );
  }

function Contact() {
    const [hovered, setHovered] = useState<"twitter" | "email" | null>(null);

    const links = [
        { label: 'codepen', href: 'https://codepen.io/alexisnotalexa' },
        { label: 'github', href: 'https://github.com/alexisnotalexa' },
        { label: 'instagram', href: 'https://www.instagram.com/hikkkkki/' },
        { label: 'linkedin', href: 'https://www.linkedin.com/in/alexiskokamura/' },
    ];
  
    return (
      <div className="flex flex-col md:flex-row" role="list">
        {hovered === "twitter" && <IMessageBubble text="tweet me" />}
        {hovered === "email" && <IMessageBubble text="email me" />}

        <div className="w-full mb-2 md:mb-0 md:text-right md:w-1/4 md:pr-8 lg:pr-12">
          <h2 className="font-semibold text-3xl">contact</h2>
        </div>
  
        <div className="flex flex-col flex-1 w-full space-y-2">
          <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-0"
          onMouseEnter={() => setHovered("twitter")}
          onMouseLeave={() => setHovered(null)}
          role="listitem"
        >
          @alexisnotalexa
        </a>
        <a
          href="mailto:alexiskokamura@gmail.com"
          className="inline-block mb-6"
          onMouseEnter={() => setHovered("email")}
          onMouseLeave={() => setHovered(null)}
          role="listitem"
        >
          alexiskokamura@gmail.com
        </a>
  
          <ul className="space-y-1">
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
      </div>
    );
  }

function Footer() {
    return (
        <footer className="flex flex-col items-center w-full">
            <p className="bubble hidden">follow my cat fred, @lilexoticfred</p>
            <a
                href="https://www.instagram.com/lilexoticfred"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <img 
                    src={fred} 
                    alt="Frederick Winston" 
                    className="block w-20 mb-2 xl:mb-0 xl:fixed xl:left-[calc(50%+450px)] xl:bottom-[5vh] xl:z-50 hover:translate-y-0.5"
                />
            </a>
            <p>© 2025 Alexis Okamura</p>
        </footer>
    );
}