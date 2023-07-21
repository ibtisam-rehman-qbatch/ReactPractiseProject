import "./App.css";
import "boxicons";
import logo from "./Assets/web_logo3.png";
import Fotter from "./components/Fotter";
import DemoReq from "./components/DemoReq";
import AdvanceFeature from "./components/AdvanceFeature";

import img1 from "./Assets/img-1.jpg";
import img2 from "./Assets/img21.png";
import NavBar from "./components/NavBar";

let AdvFeaturesArray = [
  {
    title: "Advanced Features",
    desc: "Lorem skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd sdcnsjdnc lancajcn",
    image: img2,
  },
  {
    title: "Advanced Features",
    desc: "Lorem skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd sdcnsjdnc lancajcn",
    image: img2,
  },
  {
    title: "Advanced Features",
    desc: "Lorem skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd sdcnsjdnc lancajcn",
    image: img2,
  },
];

let featuresArray = [
  {
    title: "Robust Workflow",
    desc: "njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd sdcnsjdnc lancajcn",
    iconName : "like"
  },
  {
    title: "Robust Workflow",
    desc: "njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd sdcnsjdnc lancajcn",
    iconName : "like"
  },
  {
    title: "Robust Workflow",
    desc: "njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd sdcnsjdnc lancajcn",
    iconName : "like"
  },
  {
    title: "Robust Workflow",
    desc: "njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd sdcnsjdnc lancajcn",
    iconName : "like"
  },
  {
    title: "Robust Workflow",
    desc: "njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd sdcnsjdnc lancajcn",
    iconName : "like"
  },
  {
    title: "Robust Workflow",
    desc: "njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd sdcnsjdnc lancajcn",
    iconName : "like"
  },
]

function App() {
  return (
    <div>
      <div class="w-screen h-screen">
        <div class="w-full h-5/6 bg-slate-900  -skew-y-3 relative -top-10 ">
          <div class="skew-y-3 absolute top-10 w-full items-center">
            

          <nav class="bg-slate-900 border-gray-200 px-4 lg:px-6 py-0.5 dark:bg-gray-900 dark:border-gray-700 ">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div class="flex items-center lg:order-2 ">
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-slate-300  dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-5 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Sign in
          </a>

          <a
            href="#"
            class="flex items-center block py-2 pr-4 pl-3 text-slate-300 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-5 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Request Demo
            <box-icon
              name="right-arrow-alt"
              color="blue"
              class="ml-2"
            ></box-icon>
          </a>

          {/* text-slate-300 text-sm py-2 */}
        </div>
        <div class="flex justify-between items-center  lg:flex lg:w-auto lg:order-1 ">
          <ul class="flex flex-col mt-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
              >
                <img src={logo} class="mr-3 h-6 sm:h-9" alt="App Logo" />
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-slate-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-slate-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-slate-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-slate-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Wall of Love
              </a>
            </li>

            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-slate-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Resources{" "}
                <svg
                  class="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>


            {/* mx-60 */}
            <div class="text-white mx-60 space-x-16 flex mt-10 justify-between">
              <div class="mt-10">
                <p class="font-extrabold text-4xl">
                  Create Stunning Web experiences
                </p>
                <br></br>
                <p>
                  Our landing page template works on all devices, so you only
                  have to set it up once, and get beautiful results forever
                </p>
                <br></br>

                <div class="flex space-x-0.5 justify-between">
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4">
                      Request Demo
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
          </div>
        </div>

        {/* mx-60 */}
        <div class="flex mt-10 mx-60 justify-between space-x-10">
          <div class="mr-10">
            <div class="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
              <box-icon type="solid" name="like" color="white"></box-icon>
            </div>
            <br></br>
            <p class="font-bold">Robust Workflow</p>
            <p>
              njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd
              sdcnsjdnc lancajcn
            </p>
          </div>

          <div>
            <div class="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
              <box-icon type="solid" name="like" color="white"></box-icon>
            </div>
            <br></br>
            <p class="font-bold">Robust Workflow</p>
            <p>
              njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd
              sdcnsjdnc lancajcn
            </p>
          </div>

          <div>
            <div class="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
              <box-icon type="solid" name="like" color="white"></box-icon>
            </div>
            <br></br>
            <p class="font-bold">Robust Workflow</p>
            <p>
              njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd
              sdcnsjdnc lancajcn
            </p>
          </div>
        </div>

        {/* mx-60 */}
        <div class="flex mt-10 mx-60  justify-between space-x-10">
          <div class="mr-10">
            <div class="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
              <box-icon type="solid" name="like" color="white"></box-icon>
            </div>
            <br></br>
            <p class="font-bold">Robust Workflow</p>
            <p>
              njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd
              sdcnsjdnc lancajcn
            </p>
          </div>

          <div>
            <div class="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
              <box-icon type="solid" name="like" color="white"></box-icon>
            </div>
            <br></br>
            <p class="font-bold">Robust Workflow</p>
            <p>
              njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd
              sdcnsjdnc lancajcn
            </p>
          </div>

          <div>
            <div class="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
              <box-icon type="solid" name="like" color="white"></box-icon>
            </div>
            <br></br>
            <p class="font-bold">Robust Workflow</p>
            <p>
              njcsd skdcns scsnlkdv skcnskd ancjasn ancjksdncs ncsjkdcsd
              sdcnsjdnc lancajcn
            </p>
          </div>
        </div>

        <div class="flex w-full h-3/6 bg-slate-900  mt-20">
          <div class=" text-white mx-auto mt-20 w-2/4 h-1/3">
            <p class="flex text-center text-bold text-white text-5xl mx-1/4">
              Simplify Operating and manage with transparency
            </p>
          </div>
        </div>

        
        <div class="grid grid-cols-3 gap-4 -mt-40  mx-60 ">
          {AdvFeaturesArray.map((feature) => (
            <AdvanceFeature
              image={feature.image}
              title={feature.title}
              desc={feature.desc}
            ></AdvanceFeature>
          ))}
        </div>

        <div class="flex w-full h-3/6 bg-slate-100  mt-20">
      <div class=" text-white mx-auto mt-20 w-2/4 h-1/3">
        <p class="flex text-center font-bold text-black text-5xl mx-1/4 relative">
          Say goodbye to long queues, big updates, and confusion.
        </p>

        <br></br>
        <p class="text-slate-400 flex text-center">
          Excisd sknsljkm vsd;mvsdk vsdklj vsdm vlksd vmsdnvklsdv sjvsjdv
          sjldavsmdvlsjv ajkdac akcjbas casjkcnasj casjkcnasjnckja screen ajkc
          as casjncajks sdckjsd c lsd csnd ckjsd jkcdsjc sjcnsd cnskdj csdj
        </p>

        <br></br>

        <div class="flex text-center justify-center">
          <button className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4">
            Request Demo
            <box-icon
              name="right-arrow-alt"
              color="white"
              className="ml-2"
            ></box-icon>
          </button>
        </div>
      </div>
    </div>

        <div class="grid grid-cols-6 mx-60 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
          <div class="col-span-2">
            {/* <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"> */}
            <img src={logo} class="mr-3 h-6 sm:h-9" alt="App logo" />
            {/* </a> */}

            <p class="pt-1 px-2 font-bold">The Smarter way to start you next idea</p>
          </div>

          <div>
            <p class="font-bold text-sm">How it works</p>
            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                Overview
              </a>
            </p>
            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                Pricing
              </a>
            </p>

            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                Service Areas
              </a>
            </p>
          </div>

          <div>
            <p class="font-bold text-sm">Resources</p>
            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                Customer Stories
              </a>
            </p>
            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                Knowledge Base
              </a>
            </p>

            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                Contact us
              </a>
            </p>
          </div>


          <div>
            <p class="font-bold text-sm">Products</p>
            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                Corporate Partners
              </a>
            </p>
            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                Secure Identity
              </a>
            </p>

            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                Legal Help
              </a>
            </p>

            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                First Capital
              </a>
            </p>
          </div>


          <div>
            <p class="font-bold text-sm">Company</p>
            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                About us
              </a>
            </p>
            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
               Careers
              </a>
            </p>

            <p>
              <a href="#" class="hover:text-blue-400 text-sm">
                Terms of use
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
