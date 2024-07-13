import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PricingTable from "../Components/New Pricing";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import FAQ from "../Components/FAQ";

const comparisonData = [
  {
    feature: "Access to Analytics",
    starter: true,
    business: true,
    enterprise: true,
    details: "Get access to detailed analytics for your business.",
  },
  {
    feature: "Custom Branding",
    starter: false,
    business: "500/mo",
    enterprise: "1500/mo",
    details: "Add your company's custom branding to the platform.",
  },
  {
    feature: "Priority Support",
    starter: false,
    business: "Email",
    enterprise: "Email and Chat",
    details: "Get priority support from our team.",
  },
  {
    feature: "Advanced Reporting",
    starter: false,
    business: true,
    enterprise: "Custom",
    details: "Access advanced reporting features.",
  },
  {
    feature: "Dedicated Manager",
    starter: false,
    business: false,
    enterprise: true,
    details: "Get a dedicated account manager.",
  },
  {
    feature: "API Access",
    starter: "Limited",
    business: "Standard",
    enterprise: "Enhanced",
    details: "Access our API for integrations.",
  },
  {
    feature: "Monthly Webinars",
    starter: false,
    business: true,
    enterprise: true,
    details: "Participate in monthly webinars.",
  },
  {
    feature: "Custom Integrations",
    starter: false,
    business: false,
    enterprise: "Available",
    details: "Get custom integrations built for your business.",
  },
  {
    feature: "Roles and Permissions",
    starter: false,
    business: "Basic",
    enterprise: "Advanced",
    details: "Manage roles and permissions for your team.",
  },
  {
    feature: "Onboarding Assistance",
    starter: false,
    business: "Self-Service",
    enterprise: "Assisted",
    details: "Get assistance during the onboarding process.",
  },
];

const PopupMenu = (value) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <ExclamationCircleIcon
        className="mx-auto w-6 h-6 transform rotate-180 cursor-pointer"
        onClick={togglePopup}
      />

      {isOpen && (
        <div className="absolute z-10 mt-2 w-64 rounded-md shadow-lg bg-slate-600 ring-1 ring-black ring-opacity-5">
          {/* Replace with your popup content */}
          <div className="p-4">
            <p className="text-sm text-slate-300">{value}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const renderCell = (value) => {
  if (value === null) return "—";
  if (typeof value === "boolean")
    return value ? <CheckCircleIcon className="mx-auto w-6 h-6" /> : "—";
  return (
    <>
      <div className="">{value}</div>
    </>
  );
};

const Price = () => {
  return (
    <>
      <div className="bg-primary text-white w-full h-full">
        <Navbar />
        <div className="container px-5 md:px-10 mx-auto ">
          <PricingTable />
          <div className="bg-gray-900 text-gray-200 min-h-screen p-8 mb-10 rounded-2xl mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold">Compare Our Plans</h1>
                <p className="text-gray-400 mt-5">
                  Find the perfect plan tailored for your business needs!
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 rounded-lg">
                  <thead className="">
                    <tr className="bg-gray-700">
                      <th className="sticky rounded-tl-lg top-0 w-[200px] px-6 py-3 text-left text-sm font-medium text-gray-300"></th>
                      <th className="sticky top-0 px-6 py-3 text-left text-sm font-medium text-gray-300"></th>
                      <th className="sticky top-0 px-6 py-3 text-center text-sm font-medium text-gray-300">
                        Starter
                      </th>
                      <th className="sticky top-0 px-6 py-3 text-center text-sm font-medium text-gray-300">
                        Business
                      </th>
                      <th className="sticky rounded-tr-lg top-0 px-6 py-3 text-center text-sm font-medium text-gray-300">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {comparisonData.map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 items-center">
                          <span className="text-sm font-medium">
                            {row.feature}
                          </span>
                        </td>
                        <td>{PopupMenu(row.details)}</td>
                        <td className="px-6 py-4 text-center">
                          {renderCell(row.starter)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderCell(row.business)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderCell(row.enterprise)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Price;
