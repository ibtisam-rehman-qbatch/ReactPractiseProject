import "./App.css";
import "boxicons";
// import logo from "./Assets/web_logo3.png";
import Fotter from "./components/Fotter";
import DemoReq from "./components/DemoReq";
import AdvanceFeatureSection from "./components/AdvanceFeatureSection";
import Header from "./components/Header";


import NavBar from "./components/NavBar";
import FeatureSection from "./components/FeatureSection";


function App() {
  return (
    <div>
      <div class="w-screen h-screen">
        <div class="w-full h-5/6  mainAppBg  -skew-y-3 relative -top-10 ">
          <div class="skew-y-3 absolute top-10 w-full items-center">
            <NavBar></NavBar>

            <Header></Header>
          </div>
        </div>

        <FeatureSection></FeatureSection>

        <AdvanceFeatureSection></AdvanceFeatureSection>

        <DemoReq></DemoReq>   

        <Fotter></Fotter>

      </div>
    </div>
  );
}

export default App;
