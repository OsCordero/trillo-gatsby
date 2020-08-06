import React from "react";
import "./review-card.scss";

const ReviewCard = ({ review }) => {
  const { text, username, date, rating, image } = review;
  return (
    <div className="review">
      <blockquote className="review__text">{text}</blockquote>
      <figure className="review__user">
        <img src={image} alt="user" className="review__photo" />
        <figcaption className="review__data">
          <p className="review__user-name">{username}</p>
          <p className="review__user-date">{date}</p>
        </figcaption>
        <div className="review__rating">{rating}</div>
      </figure>
    </div>
  );
};

export default ReviewCard;
