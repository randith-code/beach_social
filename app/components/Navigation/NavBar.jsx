import { forwardRef } from "react";
import Link from "next/link";

const Navbar = forwardRef((props, ref) => {
  return (
    <nav ref={ref} className="flex items-center justify-center w-full pt-4">
      <span className="flex items-center justify-between w-9/12">
        <img
          className="h-8 "
          src="http://www.beachsocial.leadmedia.lk/wp-content/uploads/2024/04/beach_social_logo.png"
          alt="beach social logo"
        />
        <span className="flex w-6/12 items-center justify-around text-sm">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Success stories</a>
          <Link href="/contactus">
            <button className="bg-black rounded-xl text-white px-3 py-1">
              Contact Us
            </button>
          </Link>
        </span>
      </span>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
