import "./main.css";
import profilePic from "./AlexisOkamura-FrederickWinston.jpg";

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
            <h1 className="font-medium text-3xl mb-10 sm:text-5xl sm:mb-12">alexis okamura</h1>
            <img className="w-3/4 mb-6 sm:w-1/2" src={profilePic} />
            <div className="flex-1 w-full">
                <p className="mb-6 leading-relaxed">Born and raised in Honolulu, I've lived coast to coast — Seattle and now Brooklyn, where I live with my cat, Frederick Winston. Currently I'm a Software Engineer at Remitly, focused on building features that help people around the world send money to their loved ones.</p>
                <p className="leading-relaxed">My love for art and design began as soon as I could hold a pencil—and it's shaped everything I do. I bring a sharp eye and obsessive attention to detail to my work as a Software Engineer, crafting interfaces that are both visually striking and thoughtfully engineered. Art has always been at the core of who I am—and it's what drives my passion for building beautiful, meaningful digital experiences.
                </p>
            </div>
        </div>
    );
}

function WorkExperience() {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-full mb-2 sm:mb-0 sm:text-right sm:pr-6 md:pr-8 lg:pr-12 sm:w-1/4">
            <h1 className="font-medium text-3xl">experience</h1>
            </div>
            <div className="flex-1 w-full">
                <p className="font-medium">
                    Software Engineer @ Remitly
                    <sup className="ml-2">'22-Now</sup>
                </p>
                <p>I contributed to various teams, most recently focusing on streamlining the send experience for users transferring money to themselves. I also played a key role in helping to migrate existing design tokens to our new design token system, helping to establish a more cohesive and scalable foundation across the platform.</p>
                <span className="text-xs">React • TypeScript • GraphQL</span>
                <br />
                <br />
                <p>Software Engineer @ Compass<sup className="ml-2">21' - 22'</sup></p>
                <p>I designed and launched an offer management tool that streamlined how agents present client offers. Additionally, I spearheaded the transition to our in-house design system, improving UI consistency and accelerating development cycles.</p>
                <span style={{ fontSize: 12 }}>React • TypeScript • GraphQL</span>
                <br />
                <br />
                <p>Software Engineer @ Cisco<sup className="ml-2">19'- 21'</sup></p>
                <p>I helped modernize legacy contact center software by building scalable, reusable UI components. I also established front-end coding standards and significantly increased test coverage, enhancing code quality and team alignment.</p>
                <span style={{ fontSize: 12 }}>React • TypeScript • GraphQL</span>
                <br />
                <br />
                <p>Front-End Software Engineer @ Flyhomes<sup className="ml-2">18'- 19'</sup></p>
                <p>I led the rebranding of our customer-facing website and built a referral program to track user referrals and bonus payouts. I also improved lead conversion by refining the user signup flow and automating the scheduling of introductory calls.</p>
                <span style={{ fontSize: 12 }}>React • TypeScript • GraphQL</span>
                <br />
                <br />
                <p>Resume →</p>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-full mb-2 sm:mb-0 sm:text-right sm:pr-6 md:pr-8 lg:pr-12 sm:w-1/4">
            <h1 className="font-medium text-3xl">contact</h1>
            </div>
            <div className="flex-1 w-full">
                <p>@alexisnotalexa</p>
                <p className="mb-6">alexiskokamura@gmail.com</p>
                <p>github</p>
                <p>linkedin</p>
                <p>codepen</p>
                <p>instagram</p>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className="flex justify-center">
            <p className="text-xs">© 2025 Alexis Okamura</p>
        </div>
    );
}