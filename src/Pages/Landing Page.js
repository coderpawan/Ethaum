import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Stats from "../Components/Stats";
import ServiceCard from "../Components/Service Card";
import Footer from "../Components/Footer";
import ScrollTop from "../Components/Scrolltop";
import Testimonials from "../Components/Testimonials";

const LandingPage = () => {
  return (
    <div className="bg-primary text-white w-full h-full">
      <Navbar />
      <ScrollTop />
      <div className="container px-5 md:px-10 mx-auto ">
        <Hero />
        <div className="flex flex-col xs:flex-row flex-wrap items-center justify-between gap-6 md:gap-2 py-20">
          <Stats number="100" title="STARTUPS" />
          <Stats number="40" title="PARTNERS" />
          <Stats number="45" title="MENTORS" />
          <Stats number="150" title="EVENTS" />
        </div>
        <ServiceCard />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
