import Link from "next/link";

import TikTok from "../icons/TikTok";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";

const Footer = ({ handlePopUpOpen }) => {
  return (
    <footer className="relative flex flex-col w-full items-center z-40 bg-black text-white font-normal text-sm 2xl:texl-xl">
      <div className="flex w-full pt-16 pb-8 border-b-2 border-opacity-20 border-white justify-center 2xl:pt-28 2xl:pb-14">
        {/* inner-container */}-
        <div className="flex flex-col lg:flex-row justify-center w-10/12 md:w-9/12">
          <div className="w-full lg:w-1/4 flex flex-col gap-4">
            <Link href="/">
              <img className="w-3/5" src="/footer_logo.png" alt="footer logo" />
            </Link>
            <p className="text-xs md:text-sm lg:text-xs w-full lg:w-3/5 font-light 2xl:text-sm">
              Dive into a sea of endless possibilities with Beach Social
            </p>
            <span className="flex gap-4">
              <Link href="#" target="_blank">
                <TikTok />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61556490681377&mibextid=ZbWKwL"
                target="_blank"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/beach_social_?igsh=ejNvanplOW80Z2Jp"
                target="_blank"
              >
                <Instagram />
              </Link>
            </span>
          </div>
          <div className="w-full lg:w-3/4 grid grid-cols-2 lg:flex justify-between gap-4 text-xs md:text-sm lg:text-xs 2xl:text-xl pt-6">
            <div className="flex flex-col mt-4 md:mt-0 gap-4 w-full lg:w-2/12">
              <h3 className="font-bold"> Services</h3>
              <span className="flex flex-col gap-4 font-light 2xl:text-base">
                <p onClick={handlePopUpOpen} className="cursor-pointer">
                  Web Design
                </p>
                <p onClick={handlePopUpOpen} className="cursor-pointer">
                  Copy Writing
                </p>
                <p onClick={handlePopUpOpen} className="cursor-pointer">
                  Email Campaign
                </p>
                <p onClick={handlePopUpOpen} className="cursor-pointer">
                  SMS Campaign
                </p>
                <p onClick={handlePopUpOpen} className="cursor-pointer">
                  Event Promotion
                </p>
              </span>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-4/12">
              <h3 className="h-7"></h3>
              <span className="flex flex-col gap-4 font-light 2xl:text-base">
                <p onClick={handlePopUpOpen} className="cursor-pointer">
                  Google adwords Campaign
                </p>
                <p onClick={handlePopUpOpen} className="cursor-pointer">
                  Social Media Consulting
                </p>
                <p onClick={handlePopUpOpen} className="cursor-pointer">
                  Social Media Advertising
                </p>
                <Link href="/socialmediamanagement">
                  <p>Social Media Management</p>
                </Link>
                <p onClick={handlePopUpOpen} className="cursor-pointer">
                  Creative Designs
                </p>
              </span>
            </div>
            <div className="flex flex-col gap-4 w-full  lg:w-3/12">
              <h3 className="font-bold"> Quick Links</h3>
              <span className="flex flex-col gap-4 font-light 2xl:text-base">
                <Link href="/">
                  <p>Home</p>
                </Link>
                <Link href="/aboutus">
                  <p>About Us</p>
                </Link>
                <Link href="#">
                  <p>Services</p>
                </Link>
                <Link href="/successstories">
                  <p>Success Stories</p>
                </Link>
              </span>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-3/12">
              <h3 className="font-bold">Get in Touch</h3>
              <span className="flex flex-col gap-4 font-light 2xl:text-base">
                <span className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 2xl:w-6 2xl:h-6 fill-cyan-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a href="tel:3366889102">
                    <p>336688&ndash;9102</p>
                  </a>
                </span>
                <span className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 2xl:w-6 2xl:h-6 fill-cyan-400"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <a href="mailto:atbeachsocial.com">
                    {" "}
                    <p>atbeachsocial.com</p>
                  </a>
                </span>
                <span className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 2xl:w-8 2xl:h-8 fill-cyan-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href="https://www.google.com/maps/place/North+Carolina,+USA/@35.146362,-82.5009574,7z/data=!3m1!4b1!4m6!3m5!1s0x88541fc4fc381a81:0xad3f30f5e922ae19!8m2!3d35.7595731!4d-79.0192997!16zL20vMDVma2Y?entry=ttu"
                    target="_blank"
                  >
                    {" "}
                    <p>Coast of the Carolinas,United States</p>
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-10/12 text-xxs md:text-xs 2xl:text-sm  md:w-9/12 justify-between py-4 font-light">
        <p>
          © 2023 BeachSocial . Copyright and All rights reserved. Developed and
          Managed by Ulix Digital.
        </p>
        <span className="flex gap-1 md:gap-4">
          <Link href="/termsandagreements">
            <p>Terms & Agreements</p>
          </Link>
          <Link href="/privacypolicy">
            <p>Privacy Policy</p>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
