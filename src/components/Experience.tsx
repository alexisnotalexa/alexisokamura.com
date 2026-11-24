const experiences = [
  {
    company: 'Squarespace',
    position: 'Software Engineer',
    tenure: '2025-2026',
    info: "lorem ipsum dolor sit amet consectetur adipiscing elit sint fuga ut laboris vero facere illum voluptatum est eum reprehenderit ea amet aute imperdiet commodo nulla minim in nobis tempore libero quo temporibus nisi quos eos consequat eligendi id et esse distinctio sint maxime non officia incididunt ut ex proident dolorem",
  },
  {
    company: 'Compass',
    position: 'Software Engineer',
    tenure: '2025-2026',
    info: "lorem ipsum dolor sit amet consectetur adipiscing elit sint fuga ut laboris vero facere illum voluptatum est eum reprehenderit ea amet aute imperdiet commodo nulla minim in nobis tempore libero quo temporibus nisi quos eos consequat eligendi id et esse distinctio sint maxime non officia incididunt ut ex proident dolorem",
  },
  {
    company: 'Remitly',
    position: 'Software Engineer',
    tenure: '2025-2026',
    info: "lorem ipsum dolor sit amet consectetur adipiscing elit sint fuga ut laboris vero facere illum voluptatum est eum reprehenderit ea amet aute imperdiet commodo nulla minim in nobis tempore libero quo temporibus nisi quos eos consequat eligendi id et esse distinctio sint maxime non officia incididunt ut ex proident dolorem",
  },
];

function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-content px-4 py-24">
      <h2 className="font-serif text-3xl italic">Experience</h2>
      <div className="mt-4 border-t border-ink" />

      {/* Desktop table */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1.8fr] gap-x-8 pt-6 text-xs tracking-wide text-gray-500 uppercase">
          <span>Company</span>
          <span>Position</span>
          <span>Tenure</span>
          <span>Info</span>
        </div>
        <div className="mt-4 border-t border-ink" />

        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="grid grid-cols-[1.6fr_1fr_1fr_1.8fr] items-start gap-x-8 py-10"
          >
            <div className="flex items-start gap-4">
              <div className="h-16 w-36 shrink-0 bg-gray-200" />
              <span>{exp.company}</span>
            </div>
            <span>{exp.position}</span>
            <span>{exp.tenure}</span>
            <p className="text-sm leading-relaxed">{exp.info}</p>
          </div>
        ))}

        <div className="border-t border-ink" />
      </div>

      {/* Mobile stacked layout */}
      <div className="lg:hidden">
        {experiences.map((exp) => (
          <div key={exp.company} className="py-10">
            <div className="h-40 w-full bg-gray-200" />

            <div className="mt-4 flex items-start justify-between text-xs tracking-wide text-gray-500 uppercase">
              <span>Company</span>
              <span>Tenure</span>
            </div>
            <div className="flex items-start justify-between">
              <span>{exp.company}</span>
              <span>{exp.tenure}</span>
            </div>

            <div className="mt-4 text-xs tracking-wide text-gray-500 uppercase">
              Position
            </div>
            <div>{exp.position}</div>

            <div className="mt-4 text-xs tracking-wide text-gray-500 uppercase">
              Info
            </div>
            <p className="text-sm leading-relaxed">{exp.info}</p>
          </div>
        ))}

        <div className="border-t border-ink" />
      </div>
    </section>
  );
}

export default Experience;
