import React from "react";
import img1 from "../Assets/img-1.jpg";

const Header = () => {
  return (
    <div class="flex flex-col flex-none text-white items-center px-60 space-x-16 pt-10 justify-between lg:flex-row lg:justify-around">
      <div class="pt-10">
        <p class="font-[PlayfairDisplay] text-[48px] font-bold leading-tight md:text-[64px]">
          Create Stunning Web experiences
        </p>
        <br></br>
        <p className="max-w-lg text-justify text-[20px] leading-relaxed text-[#96a3b9] md:text-start">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever
        </p>
        <br></br>

        <div class="flex flex-col items-center space-x-0  md:flex-row md:space-x-4 md:space-y-0">
          <div>
            <button className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4">
              Request Demo
              <box-icon
                name="right-arrow-alt"
                color="white"
                className="ml-2"
              ></box-icon>
            </button>
          </div>
          <div>
            <button className="bg-slate-600 hover:bg-blue-400 text-white font-bold py-2 px-4">
              Explore Product
            </button>
          </div>
        </div>
      </div>

      <div>
        <img src={img1} alt="img"></img>
      </div>
    </div>
  );
};

export default Header;
