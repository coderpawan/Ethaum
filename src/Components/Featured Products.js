import React, { useState, useEffect } from "react";
import Apple from "../Images/apple-watch.png";
import axios from "axios";

const Featured = () => {
  const [activeToggle, setActiveToggle] = useState("Featured");
  const [cardData, setCardData] = useState({
    Featured: [],
    "Top Deals": [],
    Popular: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ethaum-backend.vercel.app/api/products/"
        );
        const data = response.data;

        const featured = data
          .filter((item) => item.type === "Featured")
          .slice(0, 6);
        const topDeals = data
          .filter((item) => item.type === "Top Deals")
          .slice(0, 6);
        const popular = data
          .filter((item) => item.type === "Popular")
          .slice(0, 6);

        setCardData({
          Featured: featured,
          "Top Deals": topDeals,
          Popular: popular,
        });
        console.log(cardData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleToggle = (toggle) => {
    setActiveToggle(toggle);
  };

  const renderStars = (rating) => {
    const fullStarsCount = Math.floor(rating);
    const emptyStarsCount = 5 - fullStarsCount;
    const stars = [];

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

    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <svg
          key={`star-empty-${i}`}
          className="w-4 h-4 text-gray-600"
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
      <div
        key={card.id}
        className="w-full border rounded-lg shadow bg-gray-800 border-gray-700"
      >
        <a href="/">
          <img className="p-8 rounded-full " src={Apple} alt="product" />
        </a>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {card.title}
          </h5>
          <div className="text-[14px] font-semibold tracking-tight text-slate-400">
            {card.description}
          </div>

          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {renderStars(card.rating)}
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ms-3">
                {card.rating}
              </span>
            </div>
          </div>

          <span className="text-3xl font-bold text-white">
            ₹<span className="ml-2">{card.realPrice}</span>
          </span>

          <div className="flex items-center justify-between mt-5">
            <a
              href={`/product/${card._id}`}
              className="text-slate-800 w-[45%] bg-blue-gradient focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-gradient hover:bg-blue-700 focus:ring-blue-800"
            >
              Buy Now
            </a>
            <a
              href={`/product/${card._id}`}
              className="text-slate-700 hover:text-white w-[45%] hover:bg-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-white hover:bg-slate-70 focus:ring-blue-800"
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
      <div className="mb-12 py-8 px-4 sm:px-12 bg-slate-800 rounded-3xl">
        <h1 className="text-2xl ss:text-3xl md:text-4xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
          Explore the MarketPlace
        </h1>
        <div className="flex flex-col items-center max-w-[20rem] mt-10 m-auto lg:mb-16">
          <div className="relative flex w-full p-1 bg-slate-900 rounded-full">
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
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                activeToggle === "Featured"
                  ? "text-slate-600"
                  : "text-slate-400"
              }`}
              onClick={() => handleToggle("Featured")}
              aria-pressed={activeToggle === "Featured"}
            >
              Featured
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                activeToggle === "Top Deals"
                  ? "text-slate-600"
                  : "text-slate-400"
              }`}
              onClick={() => handleToggle("Top Deals")}
              aria-pressed={activeToggle === "Top Deals"}
            >
              Top Deals
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                activeToggle === "Popular" ? "text-slate-600" : "text-slate-400"
              }`}
              onClick={() => handleToggle("Popular")}
              aria-pressed={activeToggle === "Popular"}
            >
              Popular
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 sm:mt-0 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card />
        </div>
        <a href={`/products/${activeToggle}`} className="">
          <div className="justify-center text-center mb-5">
            <button
              type="button"
              class="text-slate-800 mt-10 justify-center bg-blue-gradient font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
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
      </div>
    </>
  );
};

export default Featured;
