import React, { useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import axios from "axios";

// const testimonials = [
//   {
//     id: "1",
//     about:
//       "I've saved thousands of dollars using NachoNacho. I tell all my friends to use it for both personal and company use. This is such an easy way to make / save money!",
//     image: person1,
//     name: "Sophia Anne",
//     title: "Founder & Leader",
//   },
//   {
//     id: "2",
//     about:
//       "NachoNacho has already saved me over $1000 in the last 45 days - if you need to execute a SaaS chop or want to keep an eye on where your money is going - this will be a game-changer for you.",
//     image: person2,
//     name: "Steve Smith",
//     title: "CEO",
//   },
//   {
//     id: "3",
//     about:
//       "Now I have much better visibility and control over SaaS expenses. The net result is about 3 hours a week of my time saved, and even more for my team as they no longer need to chase me whenever they need to pay for something.",
//     image: person3,
//     name: "Jasmine Florence",
//     title: "Founder & Leader",
//   },
//   {
//     id: "4",
//     about:
//       "I relied on NachoNacho to ensure we never exceeded budget across dozens of marketing channels. Quite frankly, it’s the only true firewall to overspending. A game-changer for managing business spend. I highly recommend it.",
//     image: person3,
//     name: "Jasmine Florence",
//     title: "Founder & Leader",
//   },
//   {
//     id: "5",
//     about:
//       "NachoNacho just keeps getting better! It gives each department buying power and control over their subscriptions and one-time expenses. It's effortless to manage cards and issue new ones, saving me a lot of time.",
//     image: person3,
//     name: "Jasmine Florence",
//     title: "Founder & Leader",
//   },
// ];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://ethaum-backend.vercel.app/api/testimonial"
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="clients" className="relative font-poppins md:py-16 py-10">
      <div>
        <h1 className="text-3xl ss:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
          What People are saying about us
        </h1>
        <p className="text-dimWhite md:text-lg text-base">
          Trusted by tens of thousands of small and mid‑sized companies,
          startups, freelancers and agencies worldwide.
        </p>
        <div className="overflow-x-auto w-full flex hide-scrollbar">
          <div className="flex space-x-10 mt-10 sm:mt-16">
            {testimonials.map((item) => {
              const { id, about, image, name, title } = item;
              return (
                <div
                  key={id}
                  className="flex flex-col w-[270px] sm:w-[400px] gap-10 feature-card rounded-2xl px-5 sm:px-10 md:px-6 py-10 ss:py-14 lg:px-10"
                >
                  <RiDoubleQuotesL className="text-5xl text-secondary" />
                  <p className="leading-normal text-base text-dimWhite">
                    {about}
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      src={image}
                      alt={name}
                      className="w-12 h-12 object-cover rounded-full object-top"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold">{name}</h3>
                      <p className="text-dimWhite text-sm font-[500]">
                        {title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute w-[20%] h-[40%] rounded-full right-0 top-40 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Testimonials;
