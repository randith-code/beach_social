const Footer = () => {
  return (
    <footer className="relative flex flex-col w-full items-center z-40 bg-black text-white font-normal text-sm 2xl:texl-xl">
      <div className="flex w-full pt-16 pb-8 border-b-2 border-opacity-20 border-white justify-center 2xl:pt-28">
        {/* inner-container */}
        <div className="flex flex-col md:flex-row justify-center w-10/12 md:w-9/12">
          <div className="w-full md:w-1/4 flex flex-col gap-4">
            <img className="w-3/5" src="/footer_logo.png" alt="footer logo" />
            <p className="text-xs w-full md:w-3/5 font-light 2xl:text-xl">
              Dive into a sea of endless possibilities with Beach Social
            </p>
            <span className="flex gap-4">
              <div className="w-6 aspect-square cursor-pointer 2xl:w-12">
                <img className="w-full" src="/tiktok.png" alt="tiktok logo" />
              </div>
              <div className="w-6 aspect-square cursor-pointer 2xl:w-12">
                <img
                  className="w-full"
                  src="/fb_footer.png"
                  alt="facebook logo"
                />
              </div>
              <div className="w-6 aspect-square cursor-pointer 2xl:w-12">
                <img className="w-full" src="/insta.png" alt="instagram logo" />
              </div>
            </span>
          </div>
          <div className="w-full md:w-3/4 grid grid-cols-2 md:flex justify-between gap-4 text-xs 2xl:text-xl">
            <div className="flex flex-col mt-4 md:mt-0 gap-4 w-full md:w-2/12">
              <h3 className="font-bold"> Services</h3>
              <span className="flex flex-col gap-4 font-light">
                <p>Chatbots</p>
                <p>Copy Writing</p>
                <p>Email Campaign</p>
                <p>SMS Campaign</p>
                <p>Event Promotion</p>
              </span>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-4/12">
              <h3 className="h-4"></h3>
              <span className="flex flex-col gap-4 font-light">
                <p>Google adwords Campaign</p>
                <p>Social Media Consulting</p>
                <p>Social Media Advertising</p>
                <p>Social Media Management</p>
                <p>Creative Designs</p>
              </span>
            </div>
            <div className="flex flex-col gap-4 w-full  md:w-3/12">
              <h3 className="font-bold"> Quick Links</h3>
              <span className="flex flex-col gap-4 font-light">
                <p>Home</p>
                <p>About Us</p>
                <p>Services</p>
                <p>Success Stories</p>
              </span>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-3/12">
              <h3 className="font-bold">Get in Touch</h3>
              <span className="flex flex-col gap-4 font-light">
                <span className="flex items-center gap-4">
                  <img
                    className="2xl:aspect-auto w-5"
                    src="/phone.png"
                    alt="phone"
                  />
                  <p>336688&ndash;9102</p>
                </span>
                <span className="flex items-center gap-4">
                  <img
                    className="2xl:aspect-auto w-5"
                    src="/mail.png"
                    alt="mail"
                  />
                  <p>atbeachsocial.com</p>
                </span>
                <span className="flex items-center gap-4">
                  <img
                    className="2xl:aspect-auto w-6"
                    src="/location.png"
                    alt="location"
                  />
                  <p>Coast of the Carolinas,United States</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-10/12 text-xxs md:text-xs 2xl:text-xl  md:w-9/12 justify-between py-4 font-light">
        <p>© 2023 BeachSocial . Copyright and All rights reserved.</p>
        <span className="flex gap-1 md:gap-4">
          <p>Terms & Agreements</p>
          <p>Privacy Policy</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
