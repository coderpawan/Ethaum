import React from "react";
import person from "../Images/person1.jpg";

const Card = () => {
  return (
    <>
      <div class="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center py-5">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={person}
            alt="Bonnie"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
          <div class="flex mt-4 md:mt-6">
            <a
              href="/"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-slate-700 bg-blue-gradient rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add friend
            </a>
            <a
              href="/"
              class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Category = () => {
  return (
    <>
      <div className="py-8 mb-24 px-12 bg-slate-800 rounded-3xl">
        <h1 className="text-2xl ss:text-3xl md:text-4xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
          Popular software brands across all categories
        </h1>
        <p className="mt-4 sm:mt-8 mb-6">
          Save big on SaaS products across every major software category.
        </p>
        <div className="grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-1 grid-rows-3 gap-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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

export default Category;
