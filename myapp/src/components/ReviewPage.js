import React from "react";
import StarRating from "./StarRating";
import "./ReviewPage.css"; 

function ReviewPage() {
  const reviews = [
    {
      id: 1,
      name: "Kathleen",
      rating: 5,
      comment: "Great experience! Highly recommended.",
    },
    {
      id: 2,
      name: "Adam Parker",
      rating: 4,
      comment: "Good service and beautiful locations.",
    },
    {
        id: 3,
        name: "Jhon Batey",
        rating: 3,
        comment: "Nice trip. Could be better.",
      },
      {
        id: 4,
        name: "Eveliana",
        rating: 5,
        comment: "Fantastic journey! Loved every moment.",
      },
      {
        id: 5,
        name: "Taza Arentz",
        rating: 4,
        comment: "Enjoyed the trip. The service was excellent.",
      },
      {
        id: 6,
        name: "Janelle",
        rating: 3,
        comment: "Decent experience. Room for improvement.",
      },
      {
        id: 7,
        name: "Twomey",
        rating: 4,
        comment: "Nice locations. Would recommend to others.",
      },
      {
        id: 8,
        name: "Harris",
        rating: 5,
        comment: "Absolutely amazing! Exceeded expectations.",
      },
      {
        id: 9,
        name: "Lara",
        rating: 4,
        comment: "Good trip. Enjoyed the scenic views.",
      },
  ];

  return (
    <div className="review-page">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <StarRating rating={review.rating} />
            <p>{`"${review.comment}" - ${review.name}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewPage;
