import React, { useState } from "react";
import Apple from "../Images/apple-watch.png";

const Featured = () => {
  const [activeToggle, setActiveToggle] = useState("Featured");

  const handleToggle = (toggle) => {
    setActiveToggle(toggle);
  };

  const cardData = {
    Featured: [
      {
        id: 1,
        title: "Featured Card 1",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 3,
        price: 700,
      },
      {
        id: 2,
        title: "Featured Card 2",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 2,
        price: 800,
      },
      {
        id: 3,
        title: "Featured Card 3",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 4,
        price: 400,
      },
      {
        id: 4,
        title: "Featured Card 4",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 1,
        price: 500,
      },
      {
        id: 5,
        title: "Featured Card 5",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 3,
        price: 400,
      },
      {
        id: 6,
        title: "Featured Card 6",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 2,
        price: 700,
      },
    ],
    "Top Deals": [
      {
        id: 1,
        title: "Top Deals Card 1",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 5,
        price: 800,
      },
      {
        id: 2,
        title: "Top Deals Card 2",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 3,
        price: 100,
      },
      {
        id: 3,
        title: "Top Deals Card 3",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 4,
        price: 200,
      },
      {
        id: 4,
        title: "Top Deals Card 4",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 2,
        price: 600,
      },
      {
        id: 5,
        title: "Top Deals Card 5",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 3,
        price: 500,
      },
      {
        id: 6,
        title: "Top Deals Card 6",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 3,
        price: 100,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Popular Card 1",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 3,
        price: 500,
      },
      {
        id: 2,
        title: "Popular Card 2",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 4,
        price: 900,
      },
      {
        id: 3,
        title: "Popular Card 3",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 1,
        price: 800,
      },
      {
        id: 4,
        title: "Popular Card 4",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 2,
        price: 700,
      },
      {
        id: 5,
        title: "Popular Card 5",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 3,
        price: 600,
      },
      {
        id: 6,
        title: "Popular Card 6",
        details:
          "For SaaS platforms hosted in the public cloud. You want to build standard cyber security resilience without a CISO.",
        star: 5,
        price: 200,
      },
    ],
  };

  const renderStars = (rating) => {
    // Calculate full stars count and empty stars count
    const fullStarsCount = Math.floor(rating);
    const emptyStarsCount = 5 - fullStarsCount;

    // Array to store the JSX elements for full and empty stars
    const stars = [];

    // Add full star SVG elements
    for (let i = 0; i < fullStarsCount; i++) {
      stars.push(
        <svg
          key={`star-full-${i}`}
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }

    // Add empty star SVG elements
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <svg
          key={`star-empty-${i}`}
          className="w-4 h-4 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }

    return (
      <>
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </>
    );
  };

  const Card = () => {
    return cardData[activeToggle].map((card) => (
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <img class="p-8 rounded-t-lg" src={Apple} alt="product" />
        </a>
        <div class="px-5 pb-5">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
          <div class="text-[14px] font-semibold tracking-tight text-gray-900 dark:text-slate-400">
            {card.details}
          </div>

          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {renderStars(card.star)}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {card.star}.0
              </span>
            </div>
          </div>

          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            ₹<span className="ml-2">{card.price}</span>
          </span>

          <div class="flex items-center justify-between mt-5">
            <a
              href="/"
              class="text-slate-800 w-[45%] bg-blue-gradient hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-gradient dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy Now
            </a>
            <a
              href="/"
              class="text-slate-700 hover:text-white w-[45%] bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-slate-700 dark:focus:ring-blue-800"
            >
              Compare
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="mb-12 py-8 px-12 bg-slate-800 rounded-3xl">
        <h1 className="text-2xl ss:text-3xl md:text-4xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
          Explore the MarketPlace
        </h1>
        <div className="flex flex-col items-center max-w-[20rem] mt-10 m-auto lg:mb-16">
          <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
            <span
              className="absolute inset-0 m-1 pointer-events-none"
              aria-hidden="true"
            >
              <span
                className={`absolute inset-0 w-1/3 bg-blue-gradient rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                  activeToggle === "Featured"
                    ? "translate-x-0"
                    : activeToggle === "Top Deals"
                    ? "translate-x-full"
                    : "translate-x-[200%]"
                }`}
              ></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                activeToggle === "Featured"
                  ? "text-slate-600"
                  : "text-slate-500 dark:text-slate-400"
              }`}
              onClick={() => handleToggle("Featured")}
              aria-pressed={activeToggle === "Featured"}
            >
              Featured
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                activeToggle === "Top Deals"
                  ? "text-slate-600"
                  : "text-slate-500 dark:text-slate-400"
              }`}
              onClick={() => handleToggle("Top Deals")}
              aria-pressed={activeToggle === "Top Deals"}
            >
              Top Deals
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                activeToggle === "Popular"
                  ? "text-slate-600"
                  : "text-slate-500 dark:text-slate-400"
              }`}
              onClick={() => handleToggle("Popular")}
              aria-pressed={activeToggle === "Popular"}
            >
              Popular
            </button>
          </div>
        </div>
        <div className="grid mt-10 sm:mt-0 sm:grid-cols-3 grid-cols-1 grid-rows-3 sm:grid-rows-2 gap-4">
          {Card()}
        </div>
        <div className="justify-center text-center">
          <button
            type="button"
            class="text-slate-800 mt-10 justify-center bg-blue-gradient hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      </div>
    </>
  );
};

export default Featured;
