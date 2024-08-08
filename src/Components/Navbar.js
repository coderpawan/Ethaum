import React, { useState } from "react";
import Logo from "../Images/ethaum.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [pic, setPic] = useState(localStorage.getItem("pic"));
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("pic");
    localStorage.removeItem("email");
    setUsername(null);
    setPic(null);
  };
  return (
    <>
      <div class=" antialiased bg-primary pb-16 text-white">
        {/* {console.log(user.user.email)} */}
        <div class="container shadow-lg mx-auto px-4 py-6 flex items-center justify-between">
          <a href="/" className="">
            <img src={Logo} alt="" className="h-6 w-20 sm:h-10 sm:w-36 z-100" />
          </a>
          <div>
            <ul class="hidden sm:flex items-center justify-center font-semibold">
              <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
                <button class="cursor-pointer">Software</button>
                <div class="absolute top-2 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                    <div class="relative z-10">
                      <div class="grid grid-cols-3 gap-6">
                        <div>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Artificial Intelligence
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Business Management
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                CAD & PLM
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Collaboration & Productivity
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Customer Service
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Cybersecurity
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Data & Analytics
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Data Privacy
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Design Software
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Digital Advertising
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                TechEcommerce
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                ERPGovernance
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Risk & Compliance
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Hosting
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                HR
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                IoT Management
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                IT Infrastructure
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                IT Management
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Marketing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Sales Tools
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Software Development
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Supply Chain & Logistics
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
                <button class="cursor-pointer">Service</button>
                <div class="absolute top-2 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <div class="grid grid-cols-3 gap-6">
                        <div>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Accounting & Finance
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Advisory & Coaching
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Application Development
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Artificial Intelligence
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Business Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Creative & Design
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Data Processing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Digital Marketing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                HR & Staffing Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                IT Consulting
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Legal Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Logistics & Supply Chain
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Managed Services Provider
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Marketing & Branding
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Systems Integrator
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Value Added Reseller
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
                <button class="cursor-pointer">About Us</button>
                <div class="absolute top-2 -left-14 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[4rem] duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Partner With Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Our Partners
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            User Feedback
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Tutorial
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Support / FAQs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
                <button class="cursor-pointer">Features</button>
                <div class="absolute top-2 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[400px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[9rem] duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <div class="grid grid-cols-2 gap-6">
                        <div>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Services Marketplace
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Manage Your SaaS
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Discover SaaS
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Save on SaaS
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Hire Service Providers
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Integrations
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Chrome Extension
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                SaaS Monitoring
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Marketplace Embed
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Slack Integration
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Accounting Integrations
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Zapier Integration
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                How to Buy & Save
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
                <a href="/price" class=" cursor-pointer">
                  Pricing
                </a>
              </li> */}
              <li className="relative group">
                <SearchBar />
              </li>
              {username ? (
                <li class="relative group">
                  <img
                    className="h-10 w-10 ml-10 rounded-full"
                    src={pic}
                    alt=""
                  />
                  <div class="absolute top-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                    <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                      <div class="relative z-10">
                        <ul class="text-[15px]">
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 text-center hover:text-gray-800 py-1 block font-normal"
                            >
                              Hello, {username}
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://ethaum-dashboard-frontend.vercel.app/"
                              class="text-gray-600 bg-blue-gradient rounded-lg my-2 text-center hover:text-gray-800 py-1 block font-normal"
                            >
                              Dashboard
                            </a>
                          </li>

                          <li>
                            <a
                              href="/"
                              class="text-white bg-red-500  rounded-lg text-center py-1 block font-normal"
                              onClick={handleLogout}
                            >
                              Logout
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li className="">
                  <a
                    href="/signup"
                    class="rounded-full px-1 sm:px-3 py-2 text-white hover:text-gray-700 font-semibold cursor-pointer lg:px-4  hover:bg-gray-300 flex items-center group"
                  >
                    <span class="w-[50px] mr-2">Sign in</span>
                    <svg
                      class="stroke-current"
                      width="10"
                      height="10"
                      stroke-width="2"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                    >
                      <g fill-rule="evenodd">
                        <path
                          class="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200"
                          d="M0 5h7"
                        ></path>
                        <path
                          class="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                          d="M1 1l4 4-4 4"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
              )}
            </ul>
            {/* Mobile menu starts */}
            <div className="flex">
              <ul className="flex sm:hidden items-center justify-center font-semibold">
                <SearchBar />
              </ul>

              <ul class="flex sm:hidden items-center justify-center font-semibold">
                {username ? (
                  <li class="relative group">
                    <img
                      className="h-10 relative -left-5 w-10 ml-10 rounded-full"
                      src={pic}
                      alt=""
                    />
                    <div class="absolute top-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                      <div class="relative top-6 -left-32 p-6 bg-white rounded-xl shadow-xl w-full">
                        <div class="w-10 h-10 bg-white transform left-[140px] rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                        <div class="relative z-10">
                          <ul class="text-[15px]">
                            <li>
                              <a
                                href="/"
                                class="text-gray-600 text-center hover:text-gray-800 py-1 block font-normal"
                              >
                                Hello, {username}
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://ethaum-dashboard-frontend.vercel.app/"
                                class="text-gray-600 bg-blue-gradient rounded-lg my-2 text-center hover:text-gray-800 py-1 block font-normal"
                              >
                                Dashboard
                              </a>
                            </li>

                            <li>
                              <a
                                href="/"
                                class="text-white bg-red-500  rounded-lg text-center py-1 block font-normal"
                                onClick={handleLogout}
                              >
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li className="">
                    <a
                      href="/signup"
                      class="rounded-full px-1 sm:px-3 py-2 text-white hover:text-gray-700 font-semibold cursor-pointer lg:px-4  hover:bg-gray-300 flex items-center group"
                    >
                      <span class="w-[50px] mr-2">Sign in</span>
                      <svg
                        class="stroke-current"
                        width="10"
                        height="10"
                        stroke-width="2"
                        viewBox="0 0 10 10"
                        aria-hidden="true"
                      >
                        <g fill-rule="evenodd">
                          <path
                            class="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200"
                            d="M0 5h7"
                          ></path>
                          <path
                            class="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                            d="M1 1l4 4-4 4"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <ul className="flex sm:hidden items-center justify-center font-semibold">
          <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
            <button class="cursor-pointer">Software</button>
            <div class="absolute top-2 sm:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 sm:min-w-[560px] min-w-[350px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute -left-44 sm:left-0 top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div class="relative z-10">
                  <div class="grid grid-cols-3 gap-2 sm:gap-6">
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Artificial Intelligence
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Business Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            CAD & PLM
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Collaboration & Productivity
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Customer Service
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Cybersecurity
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Data & Analytics
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Data Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Design Software
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Digital Advertising
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            TechEcommerce
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            ERPGovernance
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Risk & Compliance
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Hosting
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            HR
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            IoT Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            IT Infrastructure
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            IT Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Marketing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Sales Tools
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Software Development
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Supply Chain & Logistics
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Data Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
            <button class="cursor-pointer">Service</button>
            <div class="absolute top-2 sm:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 sm:min-w-[560px] min-w-[350px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute -left-44 sm:left-0 top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div class="relative z-10">
                  <div class="grid grid-cols-3 gap-2 sm:gap-6">
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accounting & Finance
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Advisory & Coaching
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Application Development
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Artificial Intelligence
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Business Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            reative & Design
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Data Processing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            HR & Staffing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            ServicesIT
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Consulting
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Legal Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Logistics
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Supply Chain
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Managed Services Provider
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Marketing & Branding
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Systems Integrator
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Value Added Reseller
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
            <button class="cursor-pointer">Software</button>
            <div class="absolute top-2 sm:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 sm:min-w-[560px] min-w-[350px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute -left-44 sm:left-0 top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div class="relative z-10">
                  <div class="grid grid-cols-3 gap-2 sm:gap-6">
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Artificial Intelligence
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Business Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            CAD & PLM
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Collaboration & Productivity
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Customer Service
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Cybersecurity
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Data & Analytics
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Data Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Design Software
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Digital Advertising
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            TechEcommerce
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            ERPGovernance
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Risk & Compliance
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Hosting
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            HR
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            IoT Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            IT Infrastructure
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            IT Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Marketing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Sales Tools
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Software Development
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Supply Chain & Logistics
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Data Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
            <button class="cursor-pointer">Software</button>
            <div class="absolute top-2 sm:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 sm:min-w-[560px] min-w-[350px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute -left-44 sm:left-0 top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div class="relative z-10">
                  <div class="grid grid-cols-3 gap-2 sm:gap-6">
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Artificial Intelligence
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Business Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            CAD & PLM
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Collaboration & Productivity
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Customer Service
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Cybersecurity
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Data & Analytics
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Data Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Design Software
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Digital Advertising
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            TechEcommerce
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            ERPGovernance
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Risk & Compliance
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Hosting
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            HR
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="mt-3 text-[13px]">
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            IoT Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            IT Infrastructure
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            IT Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Marketing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Sales Tools
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Software Development
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Supply Chain & Logistics
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Data Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* <div>
        <ul>
          
        </ul>
      </div> */}
    </>
  );
};

export default Navbar;
