import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollTop from "../Components/Scrolltop";
import Modal from "../Components/Modal";
import Apple from "../Images/apple-watch.png";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const token = localStorage.getItem("username");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://e-commerce-backend-five-jade.vercel.app/api/products/${id}`
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

  const handleReviewSubmit = async () => {
    try {
      const response = await axios.post(
        `https://e-commerce-backend-five-jade.vercel.app/api/products/${id}/review`,
        { user: token, comment: review, rating: rating },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProduct((prevProduct) => ({
        ...prevProduct,
        reviews: [...prevProduct.reviews, response.data],
      }));
      setIsModalOpen(false);
      setReview("");
      setRating(0);
      window.location.reload();
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="bg-primary text-white w-full h-full">
      <Navbar />
      <ScrollTop />
      <div className="container px-5 sm:px-10 mx-auto sm:py-12">
        <div className="flex flex-col md:flex-row mb-20 items-center md:items-start bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src={Apple}
            alt={product.title}
            className="sm:w-[400px] h-[300px] w-[300px] sm:h-[400px] rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div className="sm:ml-8 flex-1">
            <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-400 mb-3">By {product.vendor}</p>
            <div className="flex items-center mb-3 space-x-1 rtl:space-x-reverse">
              {renderStars(product.rating)}
              <span className="text-sm font-semibold px-3 py-1 rounded bg-slate-600 text-white">
                {product.reviews.length} reviews
              </span>
            </div>
            <p className="mb-3">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {product.tags.map((tag, index) => (
                <button
                  key={index}
                  className="bg-slate-600 hover:bg-slate-700 text-white text-sm py-1 px-3 rounded-lg transition duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#6CB4EE"
                class="size-4 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                />
              </svg>

              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center"
              >
                Visit Website
              </a>
            </div>
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
            <div className="mt-4">
              <h3 className="text-xl font-bold">Benefits</h3>
              <ul className="list-disc list-inside">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            {token ? (
              <div className="items-center justify-between text-center">
                <button
                  className="mt-6 w-fit bg-blue-gradient text-black font-bold py-2 px-4 rounded-lg transition duration-300"
                  onClick={() => alert("Order placed successfully!")}
                >
                  Place Order
                </button>
              </div>
            ) : (
              <div className="items-center justify-between text-center">
                <a href="/signup">
                  <button className="mt-6 w-fit bg-blue-gradient text-black font-bold py-2 px-10 rounded-lg transition duration-300">
                    Place Order
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-20">
          <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
          {product.reviews.length === 0 ? (
            <p>No reviews yet. Be the first to write a review!</p>
          ) : (
            product.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg shadow-lg mb-4 flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A6.971 6.971 0 0012 21a6.971 6.971 0 006.879-3.196M7 8a4 4 0 118 0 4 4 0 01-8 0zm8 0a4 4 0 100 8 4 4 0 000-8z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {renderStars(review.rating)}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      {review.rating}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{review.user}</p>
                  <p>{review.comment}</p>
                </div>
              </div>
            ))
          )}
          {token ? (
            <div className="items-center justify-between text-center">
              <button
                className="mt-6 w-fit bg-blue-gradient text-black font-bold py-2 px-10 rounded-lg transition duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                Write a Review
              </button>
            </div>
          ) : (
            <a href="/signup">
              <div className="items-center justify-between text-center">
                <button className="mt-6 w-fit bg-blue-gradient text-black font-bold py-2 px-10 rounded-lg transition duration-300">
                  Write a Review
                </button>
              </div>
            </a>
          )}
        </div>

        <Footer />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
          <textarea
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded-lg"
            rows="4"
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <div className="flex items-center mb-4">
            <span className="mr-2">Rating:</span>
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className={`w-6 h-6 ${
                  index < rating ? "text-yellow-300" : "text-gray-300"
                }`}
                onClick={() => setRating(index + 1)}
              >
                ★
              </button>
            ))}
          </div>
          <div className="items-center justify-between text-center">
            <button
              className="w-fit bg-blue-gradient text-black font-bold py-2 px-10 rounded-lg transition duration-300"
              onClick={handleReviewSubmit}
            >
              Submit Review
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetails;
