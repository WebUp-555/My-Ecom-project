import React from 'react';
import Trending from "../Components/Trendingtshirts/Trending";
import Services from "../Components/Services/Ourservices";
import Banner from "../Components/banner/Banner";
import ContactUs from '../Components/Contactus/ContactUs';
import AboutUs from '../Components/About/AboutUs';

const Home = () => {
  return (
    <div>
      <section id="home">
        <Banner />
        <Trending />
        <div className="bg-zinc-900 text-white text-center py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
            Welcome to AnimeTees
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Epic T-Shirts for True Anime Fans
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition">
            Shop Now
          </button>
        </div>
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;