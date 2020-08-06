import React from "react";
import HotelDescription from "../HotelDescription/HotelDescription";
import { graphql, useStaticQuery } from "gatsby";
import reviews from "../../lang/reviews";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./hotel-detail.scss";
import SecondaryButton from "../Buttons/SecondaryButton";

const query = graphql`
  {
    allFile(filter: { relativePath: { regex: "/user/" } }) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
const HotelDetail = () => {
  const {
    allFile: { nodes: userImages },
  } = useStaticQuery(query);
  return (
    <div className="detail">
      <div className="description">
        <HotelDescription userImages={userImages.slice(2, -1)} />
      </div>
      <div className="user-reviews">
        {reviews.map(review => (
          <ReviewCard review={review} key={review.id} />
        ))}
        <SecondaryButton className="user-reviews__button">
          Show all <span>&rarr;</span>
        </SecondaryButton>
      </div>
    </div>
  );
};

export default HotelDetail;
