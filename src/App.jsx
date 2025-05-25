import Hero from "./components/Hero";
import Description from "./components/Description";
import Contact from "./components/Contact";
import Logo from "./assets/garage.png";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="w-full bg-gray-800 shadow-md">
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 py-4">
          <div className="flex items-center gap-4">
            <img
              src={Logo}
              alt="Handyman Garage Logo"
              className="h-17 w-17 rounded-full border border-gray-400 hover:scale-105 hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-300 cursor-pointer"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            ქირავდება ავტოფარეხი
          </h1>
        </div>
      </header>

      <main className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-10 space-y-20">
        <Hero />
        <Description />
        <Contact />
      </main>
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-10">
        <h2 className="text-2xl font-bold mb-4">ადგილმდებარეობა</h2>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Garage Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=41.781455,44.800527&z=17&output=embed&markers=41.781455, 44.800527"
          ></iframe>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-400 py-6">
        &copy; {new Date().getFullYear()} Handyman Garage
      </footer>
    </div>
  );
}

export default App;
