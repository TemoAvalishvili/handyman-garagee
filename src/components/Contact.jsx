const Contact = () => {
  return (
    <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-white">კონტაქტი</h2>
      <p className="mb-2 text-gray-300">
        📞 ტელეფონი:{" "}
        <a href="tel:+995123456789" className="text-blue-400 hover:underline">
          +995 577 77 40 86
        </a>
      </p>
      <p className="text-gray-300">
        📧 ფოსტა:{" "}
        <a
          href="mailto:garage@example.com"
          className="text-blue-400 hover:underline"
        >
          garage@example.com
        </a>
      </p>
    </section>
  );
};

export default Contact;
