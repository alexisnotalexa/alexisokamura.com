function Header() {
  return (
    <header className="mx-auto w-full max-w-content px-4 pt-[10px] sm:pt-[45px]">
      <nav className="flex items-center justify-between font-serif text-2xl italic">
        <a href="/" className="hidden sm:inline">
          Alexis Okamura
        </a>
        <a
          href="#about"
          className="transition-colors duration-300 hover:text-brand"
        >
          About
        </a>
        <a
          href="#experience"
          className="transition-colors duration-300 hover:text-brand"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="transition-colors duration-300 hover:text-brand"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
