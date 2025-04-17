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
    function renderTest() {
        return (
            <>
                <img className="w-3/4 mb-6 sm:w-1/2 grayscale hover:grayscale-0 transition-all duration-1000" src={profilePic} />
                <div className="flex-1 w-full">
                    <p className="mb-6">Born and raised in Honolulu, I've lived coast to coast—Seattle and now Brooklyn, where I live with my cat, Frederick Winston. Currently, I'm a Software Engineer at Remitly, focused on building features that help people worldwide send money to their loved ones.</p>
                    <p>My love for art and design began as soon as I could hold a pencil—and it's shaped everything I do. As a software engineer, I bring a sharp eye and obsessive attention to detail to crafting interfaces that are both visually striking and thoughtfully engineered. Art has always been at the core of who I am, and it's what drives my passion for building beautiful, meaningful digital experiences.
                    </p>
                </div>
            </>
        );
    }

    function renderTest2() {
        return (
            <div className="flex flex-col sm:flex-row w-full items-center">
                <img className="w-2/5 pr-8" src={profilePic} />
                <div className="flex-1 w-1/2">
                    <p>Born and raised in Honolulu, I've lived coast to coast—Seattle and now Brooklyn, where I live with my cat, Frederick Winston. Currently, I'm a Software Engineer at Remitly, focused on building features that help people worldwide send money to their loved ones.</p>
                    <p>My love for art and design began as soon as I could hold a pencil—and it's shaped everything I do. As a software engineer, I bring a sharp eye and obsessive attention to detail to crafting interfaces that are both visually striking and thoughtfully engineered. Art has always been at the core of who I am, and it's what drives my passion for building beautiful, meaningful digital experiences.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="font-medium text-3xl mb-10 sm:text-5xl sm:mb-12">alexis okamura</h1>
            {renderTest()}
        </div>
    );
}

interface Experience {
    title: string;
    duration: string;
    description: string;
    technologies: Array<string>;
}

function WorkExperience() {
    const experiences: Array<Experience> = [
        {
            title: "Software Engineer @ Remitly",
            duration: "'22-Now",
            description: "I contributed to various teams, most recently focusing on streamlining the send experience for users transferring money to themselves. I also played a key role in helping to migrate existing design tokens to our new design token system, helping to establish a more cohesive and scalable foundation across the platform.",
            technologies: ["React Native", "TypeScript", "Redux", "Apollo GraphQL", "GraphQL", "Node.js"]
        },
        {
            title: "Software Engineer @ Compass",
            duration: "21'-22'",
            description: "I designed and launched an offer management tool that streamlined how agents present client offers. Additionally, I spearheaded the transition to our in-house design system, improving UI consistency and accelerating development cycles.",
            technologies: ["React", "TypeScript", "Redux", "MobX"]
        },
        {
            title: "Software Engineer @ Cisco",
            duration: "19'-21'",
            description: "I helped modernize legacy contact center software by building scalable, reusable UI components. I also established front-end coding standards and significantly increased test coverage, enhancing code quality and team alignment.",
            technologies: ["React", "TypeScript", "Apollo GraphQL", "GraphQL", "Web Components", "Scala"]
        },
        {
            title: "Front-End Software Engineer @ Flyhomes",
            duration: "18'-19'",
            description: "I led the rebranding of our customer-facing website and built a referral program to track user referrals and bonus payouts. I also improved lead conversion by refining the user signup flow and automating the scheduling of introductory calls.",
            technologies: ["React", "Redux", "Ruby on Rails", "AWS"]
        },
    ];

    function renderExperience(experience: Experience) {
        return (
            <div className="mb-8" role="listitem">
                <p className="font-medium mb-1">
                    {experience.title}
                    <sup className="ml-1">{experience.duration}</sup>
                </p>
                <p className="mb-2">{experience.description}</p>
                <p className="text-xs" aria-label="Technologies used">
                    {experience.technologies.map((tech, i, arr) => (
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
        <div className="flex flex-col sm:flex-row">
            <div className="w-full mb-2 sm:mb-0 sm:text-right sm:pr-6 md:pr-8 lg:pr-12 sm:w-1/4">
            <h1 className="font-medium text-3xl">experience</h1>
            </div>
            <div className="flex-1 w-full" role="list">
                {experiences.map((experience) => renderExperience(experience))}
                <p>Resume →</p>
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
        { label: 'codepen', href: '#' },
        { label: 'github', href: '#' },
        { label: 'instagram', href: '#' },
        { label: 'linkedin', href: '#' },
    ];
  
    return (
      <div className="flex flex-col sm:flex-row mb-12" role="list">
        {hovered === "twitter" && <IMessageBubble text="tweet me" />}
        {hovered === "email" && <IMessageBubble text="email me" />}

        <div className="w-full mb-2 sm:mb-0 sm:text-right sm:pr-6 md:pr-8 lg:pr-12 sm:w-1/4">
          <h2 className="font-medium text-3xl">contact</h2>
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
                  className=" mb-0 inline-block transition-all duration-300 relative after:block after:h-0.5 after:w-full after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 active:translate-y-0.5"
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
        <div className="flex flex-col items-center justify-center">
            <p className="bubble">
                follow my cat fred, @lilexoticfred
            </p>
            <img src={fred} style={{ width: 80, position: "fixed", left: "80vw", bottom: 0, zIndex: 50 }} />
            <p className="text-xs">© 2025 Alexis Okamura</p>
        </div>
    );
}

// function Contact() {
//     return (
//         <div className="flex flex-col sm:flex-row">
//             <div className="w-full mb-2 sm:mb-0 sm:text-right sm:pr-6 md:pr-8 lg:pr-12 sm:w-1/4">
//             <h1 className="font-medium text-3xl">contact</h1>
//             </div>
//             <div className="flex-1 w-full">
//                 <p>@alexisnotalexa</p>
//                 <p className="mb-6">alexiskokamura@gmail.com</p>
//                 <p>github</p>
//                 <p>linkedin</p>
//                 <p>codepen</p>
//                 <p>instagram</p>
//             </div>
//         </div>
//     );
// }