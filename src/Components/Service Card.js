import React from "react";

const ServiceCard = () => {
  return (
    <section className="font-poppins md:pb-10 pb-10">
      <div className="flex flex-col gap-10 w-full bg-gray-800 rounded-3xl p-6 ss:px-10 ss:py-10 md:px-16 md:py-7 my-10 md:my-16">
        {/* <div className="flex sm:flex-row flex-col sm:gap-0 gap-10"> */}
        <div>
          <h1 className="text-2xl ss:text-3xl md:text-4xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
            Popular software brands across all categories
          </h1>
          <p className="mt-4 sm:mt-8">
            Save big on SaaS products across every major software category.
          </p>
        </div>
        {/* <button
            type="button"
            className="p-4 h-16 relative top-16 sm:p-5 left-48 rounded-lg w-fit capitalize bg-blue-gradient text-primary"
          >
            <a href="/" target="_blank">
              get started
            </a>
          </button> */}
        {/* </div> */}
        <div className="overflow-x-auto w-full h-14 shadow-white hide-scrollbar brands-logo flex items-center text-6xl xs:text-7xl ss:text-8xl justify-center sm:text-[130px] text-[#5f5f5fb8] cursor-pointer">
          <div className="flex space-x-10 ml-[800px] mr-5 h-12">
            <button class="hover:shadow-md hover:shadow-white p-4 sm:p-3 text-lg rounded-lg bg-blue-gradient text-primary">
              Accounting,Finance
            </button>
            <button class="hover:shadow-md hover:shadow-white p-4 sm:p-3 text-lg rounded-lg bg-blue-gradient text-primary">
              Analytics,Data
            </button>
            <button class="hover:shadow-md hover:shadow-white p-4 sm:p-3 text-lg rounded-lg bg-blue-gradient text-primary">
              Collaboration
            </button>
            <button class="hover:shadow-md hover:shadow-white p-4 sm:p-3 text-lg rounded-lg bg-blue-gradient text-primary">
              Communication
            </button>
            <button class="hover:shadow-md hover:shadow-white p-4 sm:p-3 text-lg rounded-lg bg-blue-gradient text-primary">
              CRM
            </button>
            <button class="hover:shadow-md hover:shadow-white p-4 sm:p-3 text-lg rounded-lg bg-blue-gradient text-primary">
              CustomerSupport
            </button>
            <button class="hover:shadow-md hover:shadow-white p-4 sm:p-3 text-lg rounded-lg bg-blue-gradient text-primary">
              Cybersecurity
            </button>
            <button class="hover:shadow-md hover:shadow-white p-4 sm:p-3 text-lg rounded-lg bg-blue-gradient text-primary">
              Design
            </button>
            <button class="hover:shadow-md hover:shadow-white p-4 sm:p-3 text-lg rounded-lg bg-blue-gradient text-primary">
              DevTools
            </button>
            <button class="hover:shadow-md hover:shadow-white p-4 sm:p-3 text-lg rounded-lg bg-blue-gradient text-primary">
              eCommerce
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
