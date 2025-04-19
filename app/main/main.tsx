import About from '../components/sections/About';
import Contact from '~/components/sections/Contact';
import Experience from '~/components/sections/Experience';
import Footer from '~/components/sections/Footer';

export function Main() {
  return (
    <main className="min-h-screen bg-[#ffffea] text-black px-4 py-10 md:p-10 lg:p-12 font-light">
      <div className="relative max-w-screen-md mx-auto flex flex-col gap-16 sm:gap-18 md:gap-20 lg:gap-28">
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
