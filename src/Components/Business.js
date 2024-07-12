import React from "react";
import appstore from "../Images/appstore.svg";
import bill from "../Images/bill.png";
import playstore from "../Images/playstore.svg";
import card from "../Images/card.png";
import { FaStar } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiBanknote } from "react-icons/gi";

const BusinessCard = (props) => {
  const { icon, title, desc } = props;
  return (
    <>
      <div className="flex items-center gap-2 ss:p-7 ss:gap-5 p-3 sm:p-5 feature-card rounded-2xl ss:rounded-3xl hover:bg-black-gradient cursor-pointer">
        <div className="p-4 bg-dimBlue rounded-full">
          <span className="text-2xl ss:text-[2rem] text-secondary">{icon}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-base sm:text-lg font-semibold">
            {title}
          </h3>
          <p className="text-dimWhite text-xs sm:text-base">{desc}</p>
        </div>
      </div>
    </>
  );
};

const Steps = ({ title }) => {
  return (
    <p className="text-sm sm:text-base md:text-lg text-dimWhite flex items-center gap-2">
      <span>
        <FaStar className="text-secondary -mt-1 text-base" />
      </span>
      <span>{title}</span>
    </p>
  );
};
const Business = () => {
  return (
    <>
      <section id="features" className="font-poppins pb-10 md:py-16">
        <div className="flex items-center flex-col md:flex-row gap-10 md:gap-10 ss:gap-16 justify-between">
          <div className="flex flex-col gap-8 ss:gap-12 flex-1">
            <h1 className="text-3xl ss:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
              You do the business, we'll handle the money.
            </h1>
            <p className="text-dimWhite text-base sm:text-lg">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <button
              type="button"
              className="p-4 sm:p-5 rounded-lg w-fit capitalize bg-blue-gradient text-primary"
            >
              <a href="/" target="_blank" rel="noreferrer">
                get started
              </a>
            </button>
          </div>

          <div className="flex flex-col gap-5 flex-1">
            <BusinessCard
              icon={<FaStar />}
              title="Rewards"
              desc="The best credit cards offer some tantalizing combinations of promotions and prizes"
            />
            <BusinessCard
              icon={<MdOutlineSecurity />}
              title="100% Secured"
              desc="We take proactive steps make sure your information and transactions are secure."
            />
            <BusinessCard
              icon={<GiBanknote />}
              title="Balance Transfgi"
              desc="A balance transfer credit card can save you a lot of money in interest charges."
            />
          </div>
        </div>
      </section>
      <section className="relative font-poppins py-10 sm:py-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-5">
          <div className="flex-1">
            <img
              src={bill}
              alt="bill"
              className="w-full h-full object-contain md:object-fill"
            />
          </div>

          <div className="flex flex-col gap-5 md:gap-10 flex-1">
            <h1 className="text-3xl ss:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
              Easily control your billing & invoicing
            </h1>

            <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
              How much money do you leave on the table each month? Too many
              businesses “forget” to bill all hours worked. With HooBank, you
              can keep track of any invoices, generate them more quickly and
              bill any type of pricing structure to meet clients needs. As a
              bonus, you can explore new pricing models and compare their
              viability. Stop the revenue leakage and scale your business at
              full speed!
            </p>
            <p className="text-dimWhite mt-5 text-base ss:text-lg">
              Cash is king, so get it in the bank sooner!
            </p>
            <div className="flex items-center gap-5">
              <img src={appstore} alt="app store" />
              <img src={playstore} alt="play store" />
            </div>
          </div>
        </div>
        <div className="absolute w-[20%] h-[60%] rounded-full left-0 top-20 pink__gradient"></div>
      </section>
      <section id="product" className="py-10 sm:py-16 font-poppins">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="flex flex-col gap-7 sm:gap-10 flex-1">
            <h1 className="text-3xl ss:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
              Find a better card deal in few easy steps.
            </h1>
            <div className="flex flex-col gap-3">
              <Steps title="Choose the carding type that suits your needs" />
              <Steps title="Don't double entry, interconnect to your accounting system" />
              <Steps title="Speed up month-end closing with a rigorous invoicing process" />
            </div>
            <button
              type="button"
              className="p-4 sm:p-5 rounded-lg w-fit capitalize bg-blue-gradient text-primary"
            >
              <a href="/" target="_blank" rel="noreferrer">
                get started
              </a>
            </button>
          </div>

          <div className="flex-1">
            <img
              src={card}
              alt="card payment method"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
