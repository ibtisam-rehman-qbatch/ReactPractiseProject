import React from "react";
import AdFeatureCard from "../cards/AdFeatureCard";
import img2 from "../Assets/img-2.jpg";

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

const AdvanceFeatureSection = (props) => {
  return (
    <>
    {/* w-full h-3/6 */}
      <div class="tiltedBk mainAppBg  mt-20">
        <div class=" text-white mx-auto w-2/4 h-1/3 ">
          <p class="max-w-2xl pb-12 pt-16 text-center font-[PlayfairDisplay] text-[48px] font-bold leading-tight text-white">
            Simplify Operating and manage with transparency
          </p>
        </div>

        <div class="grid grid-cols-3 gap-4  mx-60 ">
        {AdvFeaturesArray.map((feature) => (
          <AdFeatureCard
            image={feature.image}
            title={feature.title}
            desc={feature.desc}
          ></AdFeatureCard>
        ))}
      </div>
      </div>

      
    </>
  );
};

export default AdvanceFeatureSection;
