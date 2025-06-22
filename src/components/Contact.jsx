const Contact = () => {
  return (
    <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
        კონტაქტი
      </h2>

      <p className="mb-2 text-gray-300">
        📞 ტელეფონი:{" "}
        <a
          href="tel:+995577774086"
          className="text-blue-400 hover:underline"
          aria-label="Call phone number"
        >
          +995 577 77 40 86
        </a>
      </p>

      <p className="mb-2 text-gray-300">
        📧 ფოსტა:{" "}
        <a
          href="mailto:handyman.garage.tbilisi@gmail.com"
          className="text-blue-400 hover:underline"
          aria-label="Send email"
        >
          handyman.garage.tbilisi@gmail.com
        </a>
      </p>

      <p className="text-gray-300">
        🎥 TikTok:{" "}
        <a
          href="https://www.tiktok.com/@handyman.garage?_t=ZS-8xPmLFszs9g&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
          aria-label="Visit TikTok profile"
        >
          @handyman.garage
        </a>
      </p>
    </section>
  );
};

export default Contact;
