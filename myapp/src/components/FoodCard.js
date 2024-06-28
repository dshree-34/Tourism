import React from 'react';
import './FoodCard.css'; 

const FoodCard = ({ title, description, imageUrl }) => {
  return (
    <div className="food-card">
      <img src={imageUrl} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FoodCard;
