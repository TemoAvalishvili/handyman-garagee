import Hero from "./components/Hero";
import Description from "./components/Description";
import Contact from "./components/Contact";
import Logo from "./assets/garage.png";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="w-full bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-32 py-4 gap-4 sm:gap-0">
          <div className="flex items-center gap-4">
            <img
              src={Logo}
              alt="Handyman Garage Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full border border-gray-400 hover:scale-105 hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-300 cursor-pointer"
            />
          </div>
          <h1 className="text-center text-md sm:text-md md:text-md font-bold text-white leading-tight">
            ქირავდება ავტოფარეხი დღიურად
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="w-full px-4 sm:px-6 md:px-12 lg:px-32 py-10 space-y-20">
        <Hero />
        <Description />
        <Contact />
        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            დაგვიკავშირდით
          </a>
        </div>
      </main>

      {/* Map Section */}
      <section
        id="location"
        className="w-full px-4 sm:px-6 md:px-12 lg:px-32 py-10 space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-bold">ადგილმდებარეობა</h2>
        <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Garage Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=41.781147,44.800635&z=17&output=embed&markers=41.781147, 44.800635"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-6">
        &copy; {new Date().getFullYear()} Handyman Garage
      </footer>
    </div>
  );
}

export default App;
