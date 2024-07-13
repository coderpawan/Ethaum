import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-600 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-slate-200 focus:outline-none"
        onClick={toggleOpen}
      >
        <p className="text-lg font-semibold hover:underline">{question}</p>
        <ChevronDownIcon
          className={`h-5 w-5 text-slate-300 transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && <p className="mt-2 text-gray-400 text-left">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, Mastercard, American Express, and PayPal for all purchases.",
      isOpen: false,
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account on our website and visiting the Orders section.",
      isOpen: false,
    },
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows for returns up to 30 days after purchase. Items must be in new and unused condition.",
      isOpen: false,
    },
    {
      question: "How can you buy the Saas?",
      answer:
        "You can track your order by logging into your account on our website and visiting the Orders section.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index) => {
    const updatedFaqs = faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false,
    }));
    setFaqs(updatedFaqs);
  };

  return (
    <div className=" text-white py-12 sm:px-6">
      <div className="mx-auto text-center">
        <div className="sm:px-56">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg mb-8 text-slate-400">
            Explore our comprehensive FAQ to find quick answers to common
            inquiries. If you need further assistance, don't hesitate to contact
            us for personalized help.
          </p>
        </div>
        <div className="sm:px-32">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.isOpen}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
