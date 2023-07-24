import React from "react";
import logo from "../Assets/web_logo3.png";

const Fotter = () => {
  return (
    <div className="grid grid-cols-6 mx-60 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
      <div className="col-span-2">
        {/* <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"> */}
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="App logo" />
        {/* </a> */}

        <p className="pt-1 px-2 font-bold">
          The Smarter way to start you next <br></br> idea
        </p>
      </div>

      <div>
        <p className="font-bold text-sm">How it works</p>
        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Overview
          </a>
        </p>
        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Pricing
          </a>
        </p>

        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Service Areas
          </a>
        </p>
      </div>

      <div>
        <p className="font-bold text-sm">Resources</p>
        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Customer Stories
          </a>
        </p>
        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Knowledge Base
          </a>
        </p>

        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Contact us
          </a>
        </p>
      </div>

      <div>
        <p className="font-bold text-sm">Products</p>
        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Corporate Partners
          </a>
        </p>
        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Secure Identity
          </a>
        </p>

        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Legal Help
          </a>
        </p>

        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            First Capital
          </a>
        </p>
      </div>

      <div>
        <p className="font-bold text-sm">Company</p>
        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            About us
          </a>
        </p>
        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Careers
          </a>
        </p>

        <p>
          <a href="#" className="hover:text-blue-400 text-sm">
            Terms of use
          </a>
        </p>
      </div>
    </div>
  );
};

export default Fotter;
