import React from "react";
import { Link } from "react-router-dom";

const heroImg =
  "https://res.cloudinary.com/drdr9gib1/image/upload/v1780574825/heroimage_xn6tpn.svg";

const HeroSection: React.FC = () => {
  return (
    <header className="bg-[#131313] relative overflow-hidden w-full">
      <div className="px-6 sm:px-[clamp(1rem,11.40vw,200px)] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-132 md:min-h-189.75 lg:min-h-157.75 py-16 md:py-20 lg:py-0 relative">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-14 z-10 max-w-95 mt-15">
            <div className="flex flex-col lg:gap-6 gap-4">
              <p className="text-[14px] tracking-[10px] text-white/50 uppercase">
                New Product
              </p>

              <h1 className="text-[36px] text-bold md:text-[56px] leading-tight tracking-[2px] uppercase text-white">
                XX99 Mark II <br className="hidden md:inline" />
                Headphones
              </h1>

              <p className="text-[15px] leading-relaxed text-white/50 max-w-99">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>

            <div className="md:flex-row items-center md:gap-5 flex-col gap-2 flex">
              <Link to="/headphones">
                <button className="bg-[#D87D4A] text-white font-bold text-[13px] tracking-[1px] uppercase px-8 py-4 hover:bg-[#FBAF85] transition-colors duration-200 cursor-pointer">
                  See Products
                </button>
              </Link>
              <Link to="/register">
                <button className="text-[16px] font-bold text-white tracking-[1px] hover:text-[#D87D4A] transition-colors uppercase w-full md:w-fit px-12.5 py-4 border border-[#FFFFFF]">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:flex md:flex w-full lg:w-[55%] right-20 -top-15 md:left-30 lg:left-130 lg:-top-23.75 z-0 mt-8 lg:mt-0 md:-top-20 absolute">
            <img
              src={heroImg}
              alt=""
              className="max-w-125 lg:max-w-none max-auto lg:mx-0 z-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
