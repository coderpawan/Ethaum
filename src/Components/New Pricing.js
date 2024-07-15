import React, { useState, useEffect } from "react";
import axios from "axios";

// const pricingPlans = [
//   {
//     name: "Standard",
//     monthlyPrice: 35,
//     annualPrice: 29,
//     description:
//       "There are many variations available, but the majority have suffered.",
//     features: [
//       { feature: "Unlimited placeholder texts", available: true },
//       { feature: "Consectetur adipiscing elit", available: true },
//       { feature: "Excepteur sint occaecat cupidatat", available: true },
//       { feature: "Officia deserunt mollit anim", available: true },
//       { feature: "Officia deserunt mollit anim", available: false },
//       { feature: "Officia deserunt mollit anim", available: false },
//       { feature: "Officia deserunt mollit anim", available: false },
//       { feature: "Officia deserunt mollit anim", available: false },
//     ],
//     mostPopular: false,
//   },
//   {
//     name: "Professional",
//     monthlyPrice: 55,
//     annualPrice: 49,
//     description:
//       "There are many variations available, but the majority have suffered.",
//     features: [
//       { feature: "Unlimited placeholder texts", available: true },
//       { feature: "Consectetur adipiscing elit", available: true },
//       { feature: "Excepteur sint occaecat cupidatat", available: true },
//       { feature: "Officia deserunt mollit anim", available: true },
//       { feature: "Officia deserunt mollit anim", available: true },
//       { feature: "Officia deserunt mollit anim", available: true },
//       { feature: "Officia deserunt mollit anim", available: false },
//       { feature: "Officia deserunt mollit anim", available: false },
//       { feature: "Officia deserunt mollit anim", available: false },
//       { feature: "Officia deserunt mollit anim", available: false },
//     ],
//     mostPopular: true,
//   },
//   {
//     name: "Enterprise",
//     monthlyPrice: 85,
//     annualPrice: 79,
//     description:
//       "There are many variations available, but the majority have suffered.",
//     features: [
//       { feature: "Unlimited placeholder texts", available: true },
//       { feature: "Consectetur adipiscing elit", available: true },
//       { feature: "Excepteur sint occaecat cupidatat", available: true },
//       { feature: "Officia deserunt mollit anim", available: true },
//       { feature: "Officia deserunt mollit anim", available: true },
//       { feature: "Officia deserunt mollit anim", available: true },
//       { feature: "Officia deserunt mollit anim", available: true },
//       { feature: "Officia deserunt mollit anim", available: true },
//     ],
//     mostPopular: false,
//   },
// ];

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [pricingPlans, setPricingPlans] = useState([]);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const response = await axios.get(
          "https://ethaum-backend.vercel.app/api/priceplan"
        );
        setPricingPlans(response.data);
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
      }
    };

    fetchPricingPlans();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto sm:px-6">
          <div>
            <h1 className="text-3xl ss:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
              Curated Security Packages
            </h1>
            <p className="text-dimWhite md:text-lg text-base">
              Secure your email, passwords, conduct one round of penetration
              testing, train your team, shift-left, and stay compliant.
            </p>
            {/* Pricing toggle */}
            <div className="flex justify-center max-w-[14rem] mt-10 m-auto mb-8 lg:mb-16">
              <div className="relative flex w-full p-1 bg-slate-900 rounded-full">
                <span
                  className="absolute inset-0 m-1 pointer-events-none"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 w-1/2 bg-blue-gradient rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                      isAnnual ? "translate-x-0" : "translate-x-full"
                    }`}
                  ></span>
                </span>
                <button
                  className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                    isAnnual ? "text-slate-600" : " text-slate-400"
                  }`}
                  onClick={() => setIsAnnual(true)}
                  aria-pressed={isAnnual}
                >
                  Yearly{" "}
                  <span
                    className={
                      isAnnual ? "text-text-slate-600" : " text-slate-500"
                    }
                  >
                    -20%
                  </span>
                </button>
                <button
                  className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                    isAnnual ? " text-slate-400" : "text-slate-600"
                  }`}
                  onClick={() => setIsAnnual(false)}
                  aria-pressed={!isAnnual}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="max-w-sm mx-auto block sm:flex gap-6 items-start lg:max-w-none mb-10 sm:mb-0">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`${
                    plan.mostPopular ? "dark mt-10 sm:mt-0" : "mt-10"
                  } h-full`}
                >
                  <div
                    className={`relative flex flex-col h-full rounded-2xl border-2 border-slate-900 shadow shadow-slate-950/5 ${
                      plan.mostPopular
                        ? "sm:w-[400px]  border-blue-400"
                        : "border-slate-900"
                    }`}
                  >
                    {plan.mostPopular && (
                      <div className="absolute top-0 right-0 mr-6 -mt-4">
                        <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="mb-5 p-6 bg-slate-900 rounded-t-2xl">
                      <div className=" text-slate-200 font-semibold mb-1">
                        {plan.name}
                      </div>
                      <div className="inline-flex items-baseline mb-2">
                        <span className=" text-slate-200 font-bold text-3xl">
                          $
                        </span>
                        <span className=" text-slate-200 font-bold text-4xl">
                          {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-slate-500 font-medium">/mo</span>
                      </div>
                      <div className="text-sm text-slate-500 mb-5">
                        {plan.description}
                      </div>
                    </div>
                    <div className=" px-6 text-slate-200 font-medium mb-3">
                      Includes:
                    </div>
                    <ul className=" px-6 text-slate-400 text-sm space-y-3 grow">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className={`w-3 h-3 ${
                              feature.available
                                ? "fill-emerald-500"
                                : "text-red-500"
                            } mr-3 shrink-0`}
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {feature.available ? (
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            ) : (
                              <path
                                d="M11 1L1 11M1 1l10 10"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            )}
                          </svg>
                          <span>{feature.feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`px-6 py-6 ${plan.mostPopular ? "pt-10" : ""}`}
                    >
                      <a
                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-gradient px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150"
                        href="#0"
                      >
                        Purchase Plan
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingTable;
