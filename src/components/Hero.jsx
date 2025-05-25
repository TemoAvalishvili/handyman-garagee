import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./hero.css";

const images = Array.from({ length: 38 }, (_, i) => `/garage${i + 1}.jpg`);

const Hero = () => {
  return (
    <section className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl overflow-hidden shadow-lg h-[80vh]">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-full bg-[#242424] flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Garage Slide ${idx + 1}`}
                    className="w-full h-full object-contain transition-all duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
