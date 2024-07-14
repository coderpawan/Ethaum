import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://ethaum-backend.vercel.app/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const calculateFinalPrice = (marketCost, discount) => {
    const discountPercentage = parseFloat(discount) / 100;
    const finalPrice = marketCost - marketCost * discountPercentage;
    return finalPrice.toFixed(2);
  };

  const finalPrice = calculateFinalPrice(product.marketCost, product.discount);

  return (
    <div className="bg-primary text-white w-full h-full">
      <Navbar />
      <div className="container px-5 md:px-10 mx-auto py-12">
        <div className="flex flex-col md:flex-row mb-20 items-center md:items-start bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src={product.picture}
            alt={product.title}
            className="w-[400px] h-[400px] rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div className="ml-8 flex-1">
            <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-400 mb-3">{product.vendor}</p>
            <div className="flex items-center mb-3 space-x-1 rtl:space-x-reverse">
              {renderStars(product.rating)}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {product.rating}
              </span>
            </div>
            <p className="mb-6">{product.description}</p>
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Price</p>
                <p className="text-lg font-bold">${product.marketCost}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-green-400">Discount</p>
                <p className="text-lg font-bold text-green-400">
                  {product.discount}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4 border-t border-gray-600 pt-4">
                <p className="text-xl font-bold">Final Price</p>
                <p className="text-xl font-bold text-yellow-400">
                  ${finalPrice}
                </p>
              </div>
            </div>
            <button
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              onClick={() => alert("Order placed successfully!")}
            >
              Place Order
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
