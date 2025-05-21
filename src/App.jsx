import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="text-center p-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold">Garage for Rent</h1>
      </header>

      <main className="p-6 space-y-10">
        {/* Garage Image */}
        <section>
          <img
            src="/garage.png"
            alt="Garage"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </section>

        {/* Description */}
        <section className="max-w-3xl mx-auto text-lg">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p>
            Spacious and secure garage available for rent in central Tbilisi.
            Suitable for car storage or small workshop.
          </p>
        </section>

        {/* Contact */}
        <section className="max-w-3xl mx-auto text-lg">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            📞 Phone:{" "}
            <a href="tel:+995123456789" className="text-blue-600">
              +995 123 456 789
            </a>
          </p>
          <p>
            📧 Email:{" "}
            <a href="mailto:garage@example.com" className="text-blue-600">
              garage@example.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
