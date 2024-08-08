import React, { useState, useEffect } from "react";
import Apple from "../Images/apple-watch.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollTop from "../Components/Scrolltop";

const Product = () => {
  const [cardData, setCardData] = useState({
    Featured: [],
    "Top Deals": [],
    Popular: [],
  });
  const [activeToggle, setActiveToggle] = useState("Featured");
  const [sortCriteria, setSortCriteria] = useState("latest");
  const { tag } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ethaum-backend.vercel.app/api/products/");
        const data = response.data;

        // Filter data based on the type from URL params
        const filteredData = data.filter((item) => item.type === tag);

        // Categorize data into Featured, Top Deals, and Popular
        const categorizedData = {
          Featured: filteredData.filter((item) =>
            item.tags.includes("Featured")
          ),
          "Top Deals": filteredData.filter((item) =>
            item.tags.includes("Top Deals")
          ),
          Popular: filteredData.filter((item) => item.tags.includes("Popular")),
        };

        // Limit results to 6 per category
        for (const category in categorizedData) {
          categorizedData[category] = categorizedData[category].slice(0, 6);
        }

        setCardData(categorizedData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [tag]);

  const handleToggle = (toggle) => {
    setActiveToggle(toggle);
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const sortProducts = (products) => {
    switch (sortCriteria) {
      case "latest":
        return [...products].sort(
          (a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)
        );
      case "reviews":
        return [...products].sort((a, b) => b.reviews - a.reviews);
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating);
      case "priceLowToHigh":
        return [...products].sort((a, b) => a.realPrice - b.realPrice);
      case "priceHighToLow":
        return [...products].sort((a, b) => b.realPrice - a.realPrice);
      default:
        return products;
    }
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

  const Card = ({ products }) => {
    const sortedProducts = sortProducts(products);
    return sortedProducts.map((card) => (
      <div
        key={card._id}
        className="w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700"
      >
        <a href="/">
          <img
            className="p-8 rounded-2xl w-full h-[50%]"
            src={Apple}
            alt="product"
          />
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
              <span className="text-sm font-semibold px-3 py-1 rounded bg-slate-600 text-white">
                {card.reviews.length} reviews
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
              className="text-slate-700 hover:text-white w-[45%] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-white hover:bg-slate-700 focus:ring-blue-800"
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
      <div className="bg-primary text-white w-full h-full">
        <Navbar />
        <ScrollTop />
        <div className="container px-5 md:px-10 mx-auto">
          <div className="mb-12 py-5 px-4 sm:px-12 bg-slate-800 rounded-3xl">
            <h1 className="text-2xl text-center justify-center ss:text-3xl md:text-4xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
              Our {tag} Products
            </h1>
            <div className="flex flex-col items-center w-full mt-6">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center w-[200px]">
                  <label
                    htmlFor="sort"
                    className="text-white text-sm font-medium"
                  >
                    Sort By:
                  </label>
                  <select
                    id="sort"
                    className="bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[140px] px-2.5 py-1 ml-2"
                    value={sortCriteria}
                    onChange={(e) => handleSort(e.target.value)}
                  >
                    <option value="latest">Latest Uploaded</option>
                    <option value="reviews">Number of Reviews</option>
                    <option value="rating">Average Customer Rating</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                  </select>
                </div>
                <div className="flex flex-col items-center w-[350px] mt-4 m-auto mr-[350px] lg:mb-8">
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
                      className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                        activeToggle === "Popular"
                          ? "text-slate-600"
                          : "text-slate-400"
                      }`}
                      onClick={() => handleToggle("Popular")}
                      aria-pressed={activeToggle === "Popular"}
                    >
                      Popular
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card products={cardData[activeToggle]} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Product;
