function Footer() {
  return (
    <footer className="w-full bg-brand text-white">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-4 pt-24 pb-[24px] lg:pt-32">
        <div className="flex gap-6">
          <a href="#" className="transition-opacity hover:opacity-70">
            LinkedIn
          </a>
          <a href="#" className="transition-opacity hover:opacity-70">
            GitHub
          </a>
          <a href="#" className="transition-opacity hover:opacity-70">
            Resume
          </a>
          <a href="#" className="transition-opacity hover:opacity-70">
            Email
          </a>
        </div>
        <span className="text-sm">Designed and built by Alexis Okamura</span>
      </div>
    </footer>
  );
}

export default Footer;
