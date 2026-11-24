function Header() {
  return (
    <header className="mx-auto w-full max-w-content px-4 pt-[10px] sm:pt-[24px]">
      <nav className="flex items-center justify-between font-serif text-xl italic">
        <a href="/" className="hidden sm:inline">
          Alexis Okamura
        </a>
        <a href="#about" className="link-underline hover:text-brand">
          About
        </a>
        <a href="#experience" className="link-underline hover:text-brand">
          Experience
        </a>
        <a href="#contact" className="link-underline hover:text-brand">
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
