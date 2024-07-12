import React from "react";
import { SiGithub, SiLinkedin, SiUpwork, SiFreelancer } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://nachonacho.com/",
      },
      {
        name: "How it Works",
        link: "https://nachonacho.com/",
      },
      {
        name: "Create",
        link: "https://nachonacho.com/",
      },
      {
        name: "Explore",
        link: "https://nachonacho.com/",
      },
      {
        name: "Terms & Services",
        link: "https://nachonacho.com/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://nachonacho.com/",
      },
      {
        name: "Partners",
        link: "https://nachonacho.com/",
      },
      {
        name: "Suggestions",
        link: "https://nachonacho.com/",
      },
      {
        name: "Blog",
        link: "https://nachonacho.com/",
      },
      {
        name: "Newsletters",
        link: "https://nachonacho.com/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://nachonacho.com/",
      },
      {
        name: "Become a Partner",
        link: "https://nachonacho.com/",
      },
    ],
  },
];

const SocialMedia = ({ icon, name, link }) => {
  return (
    <a href={link} className="relative social-icon">
      <span className="social-media-icon mt-8 ss:mt-0 p-3 xs:py-4 xs:px-4 ss:px-[1.03rem] text-black block rounded-full z-2 ss:absolute top-1/2 left-0 -translate-y-1/2">
        {icon}
      </span>
      <span className="hidden ss:block social-name text-base font-[500] capitalize bg-white text-black rounded-full transition-all py-[0.9rem] px-[1.6rem] hover:px-16 cursor-pointer z-1 overflow-hidden">
        {name}
      </span>
    </a>
  );
};

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="relative font-poppins pb-10 sm:pb-16 pt-10">
      <div className="flex items-start md:flex-row flex-col gap-10 md:gap-24">
        <div className="md:max-w-[370px]">
          <h2 className="text-3xl">Ethaum.</h2>
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg mt-5">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="w-full md:flex-1 flex items-start ss:justify-between gap-10 ss:gap-5 ss:flex-nowrap flex-wrap">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold">{item.title}</h3>
              <ul className="flex flex-col gap-3 xs:gap-5 text-dimWhite mt-5">
                {item.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li className="text-[.9rem] font-[500] hover:text-secondary">
                      {link.name}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between md:flex-row flex-col gap-5 pt-10 mt-10 sm:mt-16 border-t">
        <p className="md:text-base xs:text-sm text-xs">
          Copyright Ⓒ {date} Ethaum. All Rights Reserved.
        </p>
        <div>
          <div className="flex items-center gap-3 xs:gap-5 text-lg xs:text-xl">
            <SocialMedia
              icon={<SiGithub />}
              name="github"
              link="https://github.com/"
            />
            <SocialMedia
              icon={<SiLinkedin />}
              name="linkedin"
              link="https://www.linkedin.com/"
            />
            <SocialMedia
              icon={<TbBrandFiverr />}
              name="fiverr"
              link="https://www.fiverr.com/"
            />
            <SocialMedia
              icon={<SiUpwork />}
              name="upWork"
              link="https://www.upwork.com/"
            />
            <SocialMedia
              icon={<SiFreelancer />}
              name="freelancer"
              link="https://www.freelancer.com/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
