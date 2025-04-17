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
            <h1 className="font-medium text-3xl mb-8 sm:text-5xl sm:mb-12">alexis okamura</h1>
            <img className="w-3/4 mb-8 sm:w-1/2" src={profilePic} />
            <div className="flex-1 w-full">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur aliquet nisi laoreet vehicula. Nulla turpis nulla, aliquam quis feugiat ut, gravida eu est. Etiam eget magna nec sem eleifend interdum. Proin ut ligula quis mauris rutrum tincidunt eu vitae leo. Donec viverra orci vehicula, aliquet tortor sit amet, luctus augue. Donec molestie eu risus eget elementum. Quisque elementum imperdiet egestas. Nunc vel quam placerat, aliquam justo nec, lacinia elit. Quisque porta odio metus, bibendum porta velit condimentum vel. Vivamus varius orci mauris, vel accumsan est auctor aliquet. Nulla eget gravida lorem. Aliquam nec dui massa. In hac habitasse platea dictumst.</p>
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
                <p>Software Engineer @ Remitly<sup>22'- Now</sup></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur aliquet nisi laoreet vehicula.</p>
                <span className="text-xs">React • TypeScript • GraphQL</span>
                <br />
                <br />
                <p>Software Engineer @ Compass<sup>21'- 22'</sup></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur aliquet nisi laoreet vehicula.</p>
                <span style={{ fontSize: 12 }}>React • TypeScript • GraphQL</span>
                <br />
                <br />
                <p>Software Engineer @ Cisco<sup>19'- 21'</sup></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur aliquet nisi laoreet vehicula.</p>
                <span style={{ fontSize: 12 }}>React • TypeScript • GraphQL</span>
                <br />
                <br />
                <p>Front-End Software Engineer @ Flyhomes<sup>18'- 19'</sup></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur aliquet nisi laoreet vehicula.</p>
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
                <p>alexiskokamura@gmail.com</p>
                <p>@alexisnotalexa</p>
                <br />
                <p>github</p>
                <p>linkedin</p>
                <p>codepen</p>
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