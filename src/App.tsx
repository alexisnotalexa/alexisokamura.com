import { useState } from 'react';
import echoShowImg from './assets/echo-show.jpg';
import Header from './components/Header';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [hireMePos, setHireMePos] = useState<{ x: number; y: number } | null>(
    null
  );

  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="mx-auto max-w-content px-4 text-center font-sans text-3xl leading-snug lg:text-5xl">
          Hi, I'm Alexis, not Alexa{' '}
          <span className="relative inline-block h-[41.25px] w-14 align-top lg:h-[66px] lg:w-[90px]">
            <img
              src={echoShowImg}
              alt="Amazon Echo Show"
              className="absolute top-1/2 left-1/2 h-11 w-14 -translate-x-1/2 -translate-y-1/2 object-cover lg:h-[70px] lg:w-[90px]"
            />
          </span>
          . I'm a software engineer with an eye for design, building web and
          mobile products people actually enjoy using. I grew up in Hawaii,
          survived the Seattle freeze, and now call Brooklyn home.
          <br />
          <span
            className="cursor-none italic"
            onMouseEnter={(e) => setHireMePos({ x: e.clientX, y: e.clientY })}
            onMouseMove={(e) => setHireMePos({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setHireMePos(null)}
          >
            Currently looking for what's next.
          </span>
        </h1>
      </main>
      <Experience />
      <Footer />
      {hireMePos && (
        <span
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand px-4 py-2 font-sans text-sm not-italic text-white"
          style={{ left: hireMePos.x, top: hireMePos.y }}
        >
          Hire me!
        </span>
      )}
    </>
  );
}

export default App;
