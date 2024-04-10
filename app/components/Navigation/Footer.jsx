const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center bg-black text-white font-normal text-sm">
      <div className="flex w-full py-8 border-b-2 border-white px-8">
        <div className="w-1/4 flex flex-col gap-4">
          <img className="w-3/5" src="/footer_logo.png" alt="footer logo" />
          <p className="text-xs w-3/5 font-light">
            Dive into a sea of endless possibilities with Beach Social
          </p>
          <span className="flex gap-4">
            <div className="w-6 aspect-square cursor-pointer">
              <img className="w-full" src="/tiktok.png" alt="tiktok logo" />
            </div>
            <div className="w-6 aspect-square cursor-pointer">
              <img className="w-full" src="/fb.png" alt="facebook logo" />
            </div>
            <div className="w-6 aspect-square cursor-pointer">
              <img className="w-full" src="/insta.png" alt="instagram logo" />
            </div>
          </span>
        </div>
        <div className="w-3/4 flex">
          <div className="flex flex-col gap-4 w-1/4">
            <h3 className="font-bold"> Services</h3>
            <span className="flex flex-col gap-3 font-light">
              <p>Chatbots</p>
              <p>Copy Writing</p>
              <p>Email Campaign</p>
              <p>SMS Campaign</p>
              <p>Event Promotion</p>
            </span>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <h3 className="h-4"></h3>
            <span className="flex flex-col gap-3 font-light">
              <p>Google adwords Campaign</p>
              <p>Social Media Consulting</p>
              <p>Social Media Advertising</p>
              <p>Social Media Management</p>
              <p>Creative Designs</p>
            </span>
          </div>
          <div className="flex flex-col gap-4  w-1/4">
            <h3 className="font-bold"> Quick Links</h3>
            <span className="flex flex-col gap-3 font-light">
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Success Stories</p>
            </span>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <h3 className="font-bold">Get in Touch</h3>
            <span className="flex flex-col gap-4 font-light">
              <span className="flex items-center gap-4">
                <img src="/phone.png" alt="phone" />
                <p>(555) 123-4567</p>
              </span>
              <span className="flex items-center gap-4">
                <img src="/mail.png" alt="mail" />
                <p>Contact.beach-social.com</p>
              </span>
              <span className="flex items-center gap-4">
                <img src="/location.png" alt="location" />
                <p>123 Main StreetApt 4BCitytown, State 56789United States</p>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-8/12 justify-between py-2 font-light">
        <p>© 2023 BeachSocial . Copyright and All rights reserved.</p>
        <span className="flex gap-4">
          <p>Terms & Agreements</p>
          <p>Privacy Policy</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
