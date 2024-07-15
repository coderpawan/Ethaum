import React, { useState, useEffect } from "react";
import Apple from "../Images/apple-watch.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollTop from "../Components/Scrolltop";

const Product = () => {
  const [cardData, setCardData] = useState([]);
  const { tag } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ethaum-backend.vercel.app/api/products/"
        );
        const data = response.data;

        const products = data.filter((item) => item.type === tag);

        setCardData(products);
        console.log(cardData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

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
    return cardData.map((card) => (
      <div
        key={card.id}
        className="w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700"
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
              <span className=" text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ms-3">
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
        <div className="container px-5 md:px-10 mx-auto ">
          <div className="mb-12 py-5 px-4 sm:px-12 bg-slate-800 rounded-3xl ">
            <h1 className="text-2xl text-center justify-center ss:text-3xl md:text-4xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
              Our {tag} Products
            </h1>
            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Product;
