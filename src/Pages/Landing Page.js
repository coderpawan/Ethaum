import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Stats from "../Components/Stats";
import ServiceCard from "../Components/Service Card";
import Footer from "../Components/Footer";
import ScrollTop from "../Components/Scrolltop";
import Testimonials from "../Components/Testimonials";
import Business from "../Components/Business";
import Pricing from "../Components/New Pricing";
// import Category from "../Components/Category";
import Featured from "../Components/Featured Products";
import { jwtDecode } from "jwt-decode";
import Logo from "../Images/ethaum.png";
import SearchBar from "../Components/SearchBar";

const LandingPage = () => {
  const [username, setUsername] = useState(null);
  const [pic, setPic] = useState(null);
  const [token, setToken] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("pic");
    localStorage.removeItem("email");
    setUsername(null);
    setPic(null);
  };
  useEffect(() => {
    const getTokenFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get("token");
    };
    const token = getTokenFromUrl();

    if (token) {
      const decoded = jwtDecode(token);
      localStorage.setItem("pic", decoded.picture);
      localStorage.setItem("username", decoded.userName);
      localStorage.setItem("email", decoded.email);
      setToken(true);
      setUsername(decoded.userName);
      setPic(decoded.picture);
    }
  }, []);

  return (
    <div className="bg-primary text-white w-full h-full">
      {token ? (
        <div class=" antialiased bg-primary pb-16 text-white">
          {/* {console.log(user.user.email)} */}
          <div class="container shadow-lg mx-auto px-4 py-6 flex items-center justify-between">
            <a href="/" className="">
              <img
                src={Logo}
                alt=""
                className="h-6 w-20 sm:h-10 sm:w-36 z-100"
              />
            </a>
            <div>
              <ul class="hidden sm:flex items-center justify-center font-semibold">
                <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
                  <button class="cursor-pointer">Products</button>
                  <div class="absolute top-2 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                    <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                      <div class="relative z-10">
                        <div class="grid grid-cols-2 gap-6">
                          <div>
                            <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                              The Suite
                            </p>
                            <ul class="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="/"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Course Editor
                                  <p class="text-gray-500 font-normal">
                                    All-in-one editor
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Accept payments
                                  <p class="text-gray-500 font-normal">
                                    Pre-build payments page
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Closed Captioning
                                  <p class="text-gray-500 font-normal">
                                    Use AI to generate captions
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                              Extensions
                            </p>
                            <ul class="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="/"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Plugins
                                  <p class="text-gray-500 font-normal">
                                    Tweak existing functionality
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Batch uploads
                                  <p class="text-gray-500 font-normal">
                                    Get your time back
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Social sharing
                                  <p class="text-gray-500 font-normal">
                                    Generate content for socials
                                  </p>
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
                  <button class=" cursor-pointer">Solutions</button>
                  <div class="absolute top-2 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                    <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                      <div class="relative z-10">
                        <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Use cases
                        </p>
                        <ul class="mt-3 text-[15px]">
                          <li>
                            <a
                              href="/"
                              class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                            >
                              Creators
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                            >
                              Streamers
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                            >
                              Influence
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                            >
                              Programming
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                            >
                              Design
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
                  <button class=" cursor-pointer">Developers</button>
                  <div class="absolute top-2 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                    <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                      <div class="relative z-10">
                        <a
                          href="/"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                        >
                          Documentation
                          <p class="text-gray-500 font-normal">
                            Start integrating in no time
                          </p>
                        </a>
                        <div class="mt-6 grid grid-cols-2 gap-6">
                          <div>
                            <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                              Get started
                            </p>
                            <ul class="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="/"
                                  class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Libraries and SDKs
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Plugins
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Code samples
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Tutorials
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                              Guides
                            </p>
                            <ul class="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="/"
                                  class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Accept online payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Editing video like a pro
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Automation techniques
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Create stunning effects
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
                  <button class=" cursor-pointer">Resources</button>
                  <div class="absolute top-2 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                    <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                      <div class="relative z-10">
                        <ul class="text-[15px]">
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Get Support
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Case Studies
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Guides
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              News &amp; Events
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="relative group px-3 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
                  <a href="/price" class=" cursor-pointer">
                    Pricing
                  </a>
                </li>
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
                        className="h-10 w-10 relative -left-5 ml-10 rounded-full"
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
            <li class="relative group px-1 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
              <button class="cursor-pointer">Products</button>
              <div class="absolute top-2 sm:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 sm:min-w-[560px] min-w-[350px] transform">
                <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div class="w-10 h-10 bg-white transform rotate-45 absolute -left-44 sm:left-0 top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                  <div class="relative z-10">
                    <div class="grid grid-cols-2 gap-2 sm:gap-6">
                      <div>
                        <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          The Suite
                        </p>
                        <ul class="mt-3 text-[15px]">
                          <li>
                            <a
                              href="/"
                              class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Course Editor
                              <p class="text-gray-500 font-normal">
                                All-in-one editor
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Accept payments
                              <p class="text-gray-500 font-normal">
                                Pre-build payments page
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Closed Captioning
                              <p class="text-gray-500 font-normal">
                                Use AI to generate captions
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Extensions
                        </p>
                        <ul class="mt-3 text-[15px]">
                          <li>
                            <a
                              href="/"
                              class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Plugins
                              <p class="text-gray-500 font-normal">
                                Tweak existing functionality
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Batch uploads
                              <p class="text-gray-500 font-normal">
                                Get your time back
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Social sharing
                              <p class="text-gray-500 font-normal">
                                Generate content for socials
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="relative group px-1 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
              <button class=" cursor-pointer">Solutions</button>
              <div class="absolute top-2 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 sm:min-w-[260px] min-w-[150px] transform">
                <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                  <div class="relative z-10">
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                      Use cases
                    </p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a
                          href="/"
                          class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          Creators
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          Streamers
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          Influence
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          Programming
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          Design
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="relative group px-1 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
              <button class=" cursor-pointer">Developers</button>
              <div class="absolute top-2 sm:-left-48 -left-24 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 sm:min-w-[560px] min-w-[300px] transform">
                <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div class="w-10 h-10 bg-white transform rotate-45 absolute -left-20 sm:left-0 top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                  <div class="relative z-10">
                    <a
                      href="/"
                      class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                    >
                      Documentation
                      <p class="text-gray-500 font-normal">
                        Start integrating in no time
                      </p>
                    </a>
                    <div class="mt-6 grid grid-cols-2 gap-2 sm:gap-6">
                      <div>
                        <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Get started
                        </p>
                        <ul class="mt-3 text-[15px]">
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Libraries and SDKs
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Plugins
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Code samples
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Tutorials
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Guides
                        </p>
                        <ul class="mt-3 text-[15px]">
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Accept online payments
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Editing video like a pro
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Automation techniques
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Create stunning effects
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="relative group px-1 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
              <button class=" cursor-pointer">Resources</button>
              <div class="absolute top-2 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 sm:min-w-[200px] min-w-[150px] transform">
                <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                  <div class="relative z-10">
                    <ul class="text-[15px]">
                      <li>
                        <a
                          href="/"
                          class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                        >
                          Get Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                        >
                          Case Studies
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                        >
                          Guides
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                        >
                          News &amp; Events
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="relative group px-1 py-2 text-white hover:text-gray-700 font-semibold rounded-lg cursor-pointer lg:px-4  hover:bg-gray-300">
              <a href="/price" class=" cursor-pointer">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <Navbar />
      )}

      <ScrollTop />
      <div className="container px-5 md:px-10 mx-auto ">
        <Hero />
        <div className="flex flex-row flex-wrap items-center justify-between gap-2 md:gap-2 py-10 sm:py-20">
          <Stats number="100" title="STARTUPS" />
          <Stats number="40" title="PARTNERS" />
          <Stats number="45" title="MENTORS" />
          <Stats number="150" title="EVENTS" />
        </div>
        {/* <SearchBar/> */}
        <Business />
        <Featured />
        <ServiceCard />
        <Testimonials />
        {/* <Category /> */}
        <Pricing />
        <a href="/price" className="">
          <div className="justify-center text-center mb-24">
            <button
              type="button"
              class="text-slate-800 mt-10 justify-center bg-blue-gradient font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        </a>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
