import React, { useState } from "react";

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
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
              <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
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
                  className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                    isAnnual
                      ? "text-slate-600"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                  onClick={() => setIsAnnual(true)}
                  aria-pressed={isAnnual}
                >
                  Yearly{" "}
                  <span
                    className={
                      isAnnual
                        ? "text-text-slate-600"
                        : "text-slate-400 dark:text-slate-500"
                    }
                  >
                    -20%
                  </span>
                </button>
                <button
                  className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                    isAnnual
                      ? "text-slate-500 dark:text-slate-400"
                      : "text-slate-600"
                  }`}
                  onClick={() => setIsAnnual(false)}
                  aria-pressed={!isAnnual}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="max-w-sm mx-auto block sm:flex gap-6 items-start lg:max-w-none">
              {/* Pricing tab 1 */}
              <div className="h-full mt-10 mb-10 sm:mb-0">
                <div className="relative flex flex-col h-full rounded-2xl  border-2 border-slate-900 dark:border-slate-900 shadow shadow-slate-950/5">
                  <div className="mb-5 p-6 bg-white dark:bg-slate-900 rounded-t-2xl">
                    <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
                      Standard
                    </div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                        $
                      </span>
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                        {isAnnual ? "29" : "35"}
                      </span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">
                      There are many variations available, but the majority have
                      suffered.
                    </div>
                  </div>
                  <div className="text-slate-900 px-6 dark:text-slate-200 font-medium mb-3">
                    Includes:
                  </div>
                  <ul className="text-slate-600 px-6 dark:text-slate-400 text-sm space-y-3 grow">
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited placeholder texts</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Consectetur adipiscing elit</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat cupidatat</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 text-red-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1L1 11M1 1l10 10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 text-red-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1L1 11M1 1l10 10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 text-red-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1L1 11M1 1l10 10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 text-red-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1L1 11M1 1l10 10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                  </ul>
                  <div className="px-6 py-6">
                    <a
                      className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-gradient px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                      href="#0"
                    >
                      Purchase Plan
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing tab 2 */}
              <div className="dark h-full">
                <div className="relative sm:w-[400px] flex flex-col h-full rounded-2xl border-2 border-slate-700 dark:border-blue-400 shadow shadow-slate-950/5">
                  <div className="absolute top-0 right-0 mr-6 -mt-4">
                    <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                      Most Popular
                    </div>
                  </div>
                  <div className="mb-5 p-6 bg-white dark:bg-slate-900 rounded-t-2xl">
                    <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
                      Professional
                    </div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                        $
                      </span>
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                        {isAnnual ? "49" : "55"}
                      </span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">
                      There are many variations available, but the majority have
                      suffered.
                    </div>
                  </div>
                  <div className="text-slate-900 px-6 dark:text-slate-200 font-medium mb-3">
                    Includes:
                  </div>
                  <ul className="text-slate-600 px-6 dark:text-slate-400 text-sm space-y-3 grow">
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited placeholder texts</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Consectetur adipiscing elit</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat cupidatat</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>

                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 text-red-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1L1 11M1 1l10 10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 text-red-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1L1 11M1 1l10 10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 text-red-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1L1 11M1 1l10 10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 text-red-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1L1 11M1 1l10 10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                  </ul>
                  <div className="px-6 pb-6 pt-10">
                    <a
                      className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-gradient px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                      href="#0"
                    >
                      Purchase Plan
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing tab 3 */}
              <div className="h-full mt-10">
                <div className="relative flex flex-col h-full rounded-2xl border-2 border-slate-900 dark:border-slate-900 shadow shadow-slate-950/5">
                  <div className="mb-5 p-6 bg-white dark:bg-slate-900 rounded-t-2xl">
                    <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
                      Enterprise
                    </div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                        $
                      </span>
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                        {isAnnual ? "79" : "85"}
                      </span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">
                      There are many variations available, but the majority have
                      suffered.
                    </div>
                  </div>
                  <div className="text-slate-900 px-6 dark:text-slate-200 font-medium mb-3">
                    Includes:
                  </div>
                  <ul className="text-slate-600 px-6 dark:text-slate-400 text-sm space-y-3 grow">
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited placeholder texts</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Consectetur adipiscing elit</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat cupidatat</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                  </ul>
                  <div className="px-6 py-6">
                    <a
                      className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-gradient px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                      href="#0"
                    >
                      Purchase Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingTable;
