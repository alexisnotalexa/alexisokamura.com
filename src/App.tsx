import echoShowImg from './assets/echo-show.jpg';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="mx-auto max-w-content px-4 text-center font-sans text-3xl leading-snug lg:text-5xl">
          Hi, I'm Alexis, not Alexa{' '}
          <img
            src={echoShowImg}
            alt="Amazon Echo Show"
            className="inline-block h-7 w-7 rounded-sm object-cover align-middle lg:h-10 lg:w-10"
          />{' '}
          . I'm a software engineer with a designer's eye, building web and
          mobile products people actually enjoy using. I grew up in Hawaii,
          survived the Seattle freeze, and now call Brooklyn home.{' '}
          <span className="italic">Currently looking for what's next.</span>
        </h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
