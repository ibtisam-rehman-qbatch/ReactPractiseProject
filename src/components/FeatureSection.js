import React from "react";
import FeatureCard from "../cards/FeatureCard";

let featuresArray = [
  {
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
  {
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
  {
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
  {
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
  {
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
  {
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
];

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-1 mx-60 mt-10 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {featuresArray.map((feature) => (
        <FeatureCard
          iconName={feature.iconName}
          title={feature.title}
          desc={feature.desc}
        ></FeatureCard>
      ))}
    </div>
  );
};

export default FeatureSection;
