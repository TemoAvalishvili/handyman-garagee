import Hero from "./components/Hero";
import Description from "./components/Description";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="w-full py-8 bg-gray-800 shadow-md">
        <h1 className="text-4xl font-bold text-center text-white">
          ქირავდება გარაჟი
        </h1>
      </header>

      <main className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-10 space-y-20">
        <Hero />
        <Description />
        <Contact />
      </main>

      <footer className="text-center text-sm text-gray-400 py-6">
        &copy; {new Date().getFullYear()} Handyman Garage
      </footer>
    </div>
  );
}

export default App;
