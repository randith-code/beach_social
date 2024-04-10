export default function ConatctUs() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-gradient-to-r from-emerald-400 grid place-items-center to-cyan-400 h-screen">
        <div className="w-10/12 flex flex-col bg-black h-5/6">
          <div className="w-full flex justify-end"></div>
          <div className="flex flex-1">
            <div className="w-1/2 h-full grid place-items-center">
              <span className="w-8/12 flex flex-col gap-4">
                <img className="w-2/5" src="/footer_logo.png" alt="" />
                <span className="flex flex-col">
                  <h1 className="font-extrabold text-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
                    SocialReach Nexus
                  </h1>
                  <h1 className="font-extrabold text-white text-3xl">
                    Let's Connect and Elevate Your Presence!
                  </h1>
                </span>
                <p className="font-light text-white">
                  let's weave the threads of innovation, creativity, and
                  strategy to magnetize your social media presence. Our team is
                  here to turn your digital dreams into reality. Ready to make
                  waves in the social sphere? Contact us now, and let the social
                  magic begin!
                </p>
              </span>
            </div>
            <div className="w-1/2 h-full grid place-items-center">
              <form className="flex flex-col w-9/12 gap-8" action="">
                <input
                  className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                  type="email"
                  placeholder="Email address"
                />
                <input
                  className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                  type="tel"
                  placeholder="Phone Number"
                />
                <input
                  className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                  type="tel"
                  placeholder="Phone Number"
                />
                <span className="flex justify-end gap-4">
                  <button
                    className="text-black bg-white px-4 rounded-xl"
                    type="reset"
                  >
                    Clear
                  </button>
                  <button
                    className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-4 rounded-xl"
                    type="submit"
                  >
                    Submit
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col w-full items-center bg-black text-white font-normal text-sm">
        <div className="flex w-full py-8 border-b-2 border-white px-8 justify-center">
          <span className="flex w-8/12 justify-between">
            <img className="w-2/12" src="/footer_logo.png" alt="" />
            <div className="flex items-center bg-white rounded-3xl px-4 gap-4">
              <h1 className="font-extrabold text-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
                Let&apos;s collaborate with us!
              </h1>
              <div className="w-12 aspect-square rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 grid place-items-center">
                <img src="/black_arrow.svg" alt="" />
              </div>
            </div>
          </span>
        </div>
        <div className="flex w-8/12 justify-between py-2 font-light">
          <p>© 2023 BeachSocial . Copyright and All rights reserved.</p>
          <span className="flex gap-4">
            <p>Terms & Agreements</p>
            <p>Privacy Policy</p>
          </span>
        </div>
      </footer>
    </div>
  );
}
