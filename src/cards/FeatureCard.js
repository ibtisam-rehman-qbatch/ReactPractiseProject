import React from "react";

const FeatureCard = (props) => {
  return (
    <div>
      <div class="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
        <box-icon type="solid" name={props.iconName} color="white"></box-icon>
      </div>
      <br></br>
      <p class="font-bold mb-2 font-[PlayfairDisplay] text-xl">
      {props.title}
      </p>
      <p className="text-base">
      {props.desc}
      </p>
    </div>
  );
};

export default FeatureCard;
