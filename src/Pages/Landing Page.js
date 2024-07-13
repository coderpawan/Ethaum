import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Stats from "../Components/Stats";
import ServiceCard from "../Components/Service Card";
import Footer from "../Components/Footer";
import ScrollTop from "../Components/Scrolltop";
import Testimonials from "../Components/Testimonials";
import Business from "../Components/Business";
import Pricing from "../Components/New Pricing";
import Category from "../Components/Category";
import Featured from "../Components/Featured Products";
import { jwtDecode } from "jwt-decode";

const LandingPage = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    // Function to get the token from the URL
    const getTokenFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get("token");
    };

    // Extract the token
    const token = getTokenFromUrl();

    if (token) {
      // Decode the token to get user information
      const decoded = jwtDecode(token);

      // Store the token in local storage
      localStorage.setItem("token", token);

      // Set the user state
      console.log(decoded.picture);
      setUser(decoded);
    }
  }, []);
  return (
    <div className="bg-primary text-white w-full h-full">
      {/* {user ? <Navbar user={user} /> : <Navbar />} */}

      <Navbar user={user} />
      <ScrollTop />
      <div className="container px-5 md:px-10 mx-auto ">
        <Hero />
        <div className="flex flex-col xs:flex-row flex-wrap items-center justify-between gap-6 md:gap-2 py-20">
          <Stats number="100" title="STARTUPS" />
          <Stats number="40" title="PARTNERS" />
          <Stats number="45" title="MENTORS" />
          <Stats number="150" title="EVENTS" />
        </div>
        <Business />
        <Featured />
        <ServiceCard />
        <Testimonials />
        <Category />
        <Pricing />
        <a href="/price" className="">
          <div className="justify-center text-center mb-24">
            <button
              type="button"
              class="text-slate-800 mt-10 justify-center bg-blue-gradient font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Discover More
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </a>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
