import React from "react";
import PropTypes from 'prop-types';

const FeatureCard = (props) => {
  return (
    <div>
      <div className="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
        <box-icon type="solid" name={props.iconName} color="white"></box-icon>
      </div>
      <br></br>
      <p className="font-bold mb-2 font-[PlayfairDisplay] text-xl">
      {props.title}
      </p>
      <p className="text-base">
      {props.desc}
      </p>
    </div>
  );
};

FeatureCard.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default FeatureCard;
