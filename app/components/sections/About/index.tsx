import { Link } from 'react-router';
import profilePic from './alexis-fred.jpg';

export default function About() {
  return (
    <div className="flex flex-col items-center text-center">
      <Link
        to="/"
        aria-label="Go to homepage"
        className="no-underline text-inherit"
      >
        <h1 className="font-semibold text-3xl mb-10 sm:mb-12">
          alexis okamura
        </h1>
      </Link>
      <div className="flex flex-col w-full items-center md:flex-row">
        <img
          className="w-3/4 mb-10 md:mb-0 md:w-2/5 md:pr-8"
          alt="Alexis and Fred"
          src={profilePic}
        />
        <div className="w-full flex-1 md:w-1/2">
          <p className="mb-4">
            Born and raised in Honolulu, I've lived coast to coast—Seattle and
            now Brooklyn, where I live with my cat, Frederick Winston.
            Currently, I'm a Software Engineer at Remitly, focused on building
            features that help people worldwide send money to their loved ones.
          </p>
          <p className="mb-4">
            My love for art and design began as soon as I could hold a pencil.
            As a software engineer, I bring a sharp eye and obsessive attention
            to detail to crafting interfaces that are both visually striking and
            thoughtfully engineered. Art has always been at the core of who I
            am, and it's what drives my passion for building beautiful,
            meaningful digital experiences.
          </p>
          <p>✽</p>
        </div>
      </div>
    </div>
  );
}
