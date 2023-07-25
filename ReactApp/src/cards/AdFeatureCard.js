import React from 'react';
import PropTypes from 'prop-types';

const AdFeatureCard = ({ image, title, desc }) => {
  return (
    <div>
      <img src={image} alt='Feature'></img>
      <br></br>
      <p className="font-bold">{title}</p>
      <p>{desc}</p>
    </div>
  );
};

AdFeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default AdFeatureCard;
