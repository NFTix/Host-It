import React from "react";
import Navbar from "../components/Home/Navbar";
import { HeroSection } from "../components/Home/HeroSection";
import About from "./About";
import FAQs from "../components/Home/FAQs";
import Contact from "./contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-hero">
      <Navbar />
      <section className="mb-6">
        <HeroSection />
      </section>
      <section className="lg:px-20 py-5 bg-black">
        <About />
      </section>
      <section className="lg:px-20 py-10 bg-hero">
        <div className="container mx-auto">
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-extralight leading-snug text-neutral-100">
            Sell your favorite events tickets effortlessly{" "}
            <span className="bg-clip-text font-medium text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9] font-sans">
              without stress and Ads{" "}
            </span>
            fees or multiple click confirmation pop-ups that hold you back
          </h1>
        </div>
      </section>
      <section className="lg:px-20 py-10 bg-black-2">
        <FAQs />
      </section>
      <section id="contact" className="lg:px-20 py-40 bg-contact-img bg-center">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
