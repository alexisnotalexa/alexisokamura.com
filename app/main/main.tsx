import "./main.css";
import profilePic from "./AlexisOkamura-FrederickWinston.jpg";

export function Main() {
    return (
        <main className="relative max-w-screen-2xl mx-auto flex flex-col gap-16 sm:gap-18 md:gap-20 lg:gap-28">
            <About />
            <WorkExperience />
            <Contact />
            <p>© 2025 Alexis Okamura</p>
        </main>
    );
}

function About() {
    return (
        <div className="flex justify-center">
            <div className="sm:text-right" style={{ marginRight: 16 }}>
            <h1 className="font-medium" style={{ fontSize: 32 }}>alexis okamura</h1>
            <img src={profilePic} style={{ width: 200 }} />
            </div>
            <div style={{ width: "50%"}}>
                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur aliquet nisi laoreet vehicula. Nulla turpis nulla, aliquam quis feugiat ut, gravida eu est. Etiam eget magna nec sem eleifend interdum. Proin ut ligula quis mauris rutrum tincidunt eu vitae leo. Donec viverra orci vehicula, aliquet tortor sit amet, luctus augue. Donec molestie eu risus eget elementum. Quisque elementum imperdiet egestas. Nunc vel quam placerat, aliquam justo nec, lacinia elit. Quisque porta odio metus, bibendum porta velit condimentum vel. Vivamus varius orci mauris, vel accumsan est auctor aliquet. Nulla eget gravida lorem. Aliquam nec dui massa. In hac habitasse platea dictumst.</p>
            </div>
        </div>
    );
}

function WorkExperience() {
    return (
        <div className="flex justify-center">
            <div className="sm:text-right" style={{ marginRight: 16 }}>
            <h1 className="font-medium" style={{ fontSize: 32 }}>experience</h1>
            </div>
            <div style={{ width: "50%"}}>
                <p className="font-light">Software Engineer @ Remitly</p>
                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur aliquet nisi laoreet vehicula.</p>
                <span className="font-light" style={{ fontSize: 12 }}>React • TypeScript • GraphQL</span>
                <br />
                <br />
                <p className="font-light">Software Engineer @ Remitly</p>
                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur aliquet nisi laoreet vehicula.</p>
                <span className="font-light" style={{ fontSize: 12 }}>React • TypeScript • GraphQL</span>
                <br />
                <br />
                <p className="font-light">Software Engineer @ Remitly</p>
                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur aliquet nisi laoreet vehicula.</p>
                <span className="font-light" style={{ fontSize: 12 }}>React • TypeScript • GraphQL</span>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="flex justify-center">
            <div className="sm:text-right" style={{ marginRight: 16 }}>
            <h1 className="font-medium" style={{ fontSize: 32 }}>contact</h1>
            </div>
            <div style={{ width: "50%"}}>
                <p className="font-light">alexiskokamura@gmail.com</p>
                <p className="font-light">@alexisnotalexa</p>
                <br />
                <p className="font-light">github</p>
                <p className="font-light">linkedin</p>
                <p className="font-light">codepen</p>
            </div>
        </div>
    );
}