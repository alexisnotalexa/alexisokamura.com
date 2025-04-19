interface Job {
  title: string;
  href: string;
  duration: string;
  description: string;
  technologies: Array<string>;
}

export default function Experience() {
  const jobs: Array<Job> = [
    {
      title: 'Software Engineer @ Remitly',
      href: 'https://www.remitly.com/',
      duration: '11/22—Now',
      description:
        'I contributed to various teams, most recently focusing on streamlining the send experience for users transferring money to themselves. I also played a key role in helping to migrate existing design tokens to our new design token system, helping to establish a more cohesive and scalable foundation across the platform.',
      technologies: [
        'React Native',
        'TypeScript',
        'Redux',
        'Apollo GraphQL',
        'GraphQL',
        'Node.js',
      ],
    },
    {
      title: 'Software Engineer @ Compass',
      href: 'https://www.compass.com/',
      duration: '12/21—9/22',
      description:
        'I designed and launched an offer management tool that streamlined how agents present client offers. Additionally, I spearheaded the transition to our in-house design system, improving UI consistency and accelerating development cycles.',
      technologies: ['React', 'TypeScript', 'Redux', 'MobX'],
    },
    {
      title: 'Software Engineer @ Cisco',
      href: 'https://www.cisco.com/c/en/us/products/conferencing/webex.html',
      duration: '10/19—11/21',
      description:
        'I helped modernize legacy contact center software by building scalable, reusable UI components. I also established front-end coding standards and significantly increased test coverage, enhancing code quality and team alignment.',
      technologies: [
        'React',
        'TypeScript',
        'Apollo GraphQL',
        'GraphQL',
        'Web Components',
        'Scala',
      ],
    },
    {
      title: 'Front-End Software Engineer @ Flyhomes',
      href: 'https://flyhomes.com/',
      duration: '06/18—10/19',
      description:
        'I led the rebranding of our customer-facing website and built a referral program to track user referrals and bonus payouts. I also improved lead conversion by refining the user signup flow and automating the scheduling of introductory calls.',
      technologies: ['React', 'Redux', 'Ruby on Rails', 'AWS'],
    },
  ];

  function renderJob({
    title,
    href,
    duration,
    description,
    technologies,
  }: Job) {
    return (
      <div className="mb-10" role="listitem">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-0 transition-all duration-300 relative inline-block"
        >
          <span className="font-medium inline-block after:block after:h-0.5 after:w-full after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
            {title}
          </span>
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
        <h2 className="font-semibold text-3xl">experience</h2>
      </div>
      <div className="flex-1 w-full" role="list">
        {jobs.map((experience) => renderJob(experience))}
        <a
          href="https://docs.google.com/document/d/1_51J00ObtTVf8BIMcWZuNjnIhfuLikkv0iPoSgQxRP4/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-0 transition-all duration-300 relative"
        >
          <span className="font-medium inline-block after:block after:h-0.5 after:w-full after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
            Resume
          </span>
          <span className="font-medium inline-block transition-transform duration-300 group-hover:translate-x-1">
            &nbsp;→
          </span>
        </a>
      </div>
    </div>
  );
}
