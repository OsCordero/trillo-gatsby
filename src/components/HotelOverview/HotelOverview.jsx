import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Icon from "../Icon/Icon"
import "./hotel-overview.scss"
import SecondaryButton from "../Buttons/SecondaryButton"

const query = graphql`
  {
    allFile(
      filter: {
        relativePath: { in: ["hotel-1.jpg", "hotel-3.jpg", "hotel-2.jpg"] }
      }
      sort: { fields: relativePath }
    ) {
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
`

const HotelOverview = () => {
  const {
    allFile: { nodes: images },
  } = useStaticQuery(query)

  return (
    <div>
      <div className="gallery">
        {images.map(image => (
          <Image
            fluid={image.childImageSharp.fluid}
            className="gallery__photo"
            alt="hotel"
            key={image.id}
          />
        ))}
      </div>
      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>
        <div className="overview__stars">
          <Icon customClass="overview__icon-start" name="icon-star" />
          <Icon customClass="overview__icon-start" name="icon-star" />
          <Icon customClass="overview__icon-start" name="icon-star" />
          <Icon customClass="overview__icon-start" name="icon-star" />
          <Icon customClass="overview__icon-start" name="icon-star" />
        </div>

        <div className="overview__location">
          <Icon
            customClass="overview__icon-location"
            name="icon-location-pin"
          />
          <SecondaryButton>Albuferia, Portugal</SecondaryButton>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-counts">429 ratings</div>
        </div>
      </div>
    </div>
  )
}

export default HotelOverview
