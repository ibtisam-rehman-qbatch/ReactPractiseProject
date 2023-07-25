import React from "react";
import FeatureCard from "../cards/FeatureCard";

let featuresArray = [
  {
    id:1,
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
  {
    id:2,
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
  {
    id:3,
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
  {
    id:4,
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
  {
    id:5,
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
  {
    id:6,
    title: "Robust Workflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    iconName: "like",
  },
];

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-1 justify-center pt-10 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mx-60">
      {featuresArray.map((feature) => (
        <FeatureCard
          key={feature.id}
          iconName={feature.iconName}
          title={feature.title}
          desc={feature.desc}
        ></FeatureCard>
      ))}
    </div>
  );
};

export default FeatureSection;
