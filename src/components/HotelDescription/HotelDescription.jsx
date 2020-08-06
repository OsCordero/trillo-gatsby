import React from "react"
import Image from "gatsby-image"

import "./hotel-description.scss"

const HotelDescription = ({ userImages }) => {
  return (
    <div className="description-card">
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        architecto optio est nam nulla aliquid ratione voluptas molestias nihil
        voluptatem soluta?
      </p>
      <p className="paragraph">
        Cumque sapiente, perspiciatis exercitationem minus quae vel corporis
        atque porro odit explicabo saepe nam impedit doloribus temporibus esse
        eaque adipisci quisquam, deleniti officiis quasi.
      </p>
      <ul className="list">
        <li className="list__item">Close to the beach</li>
        <li className="list__item">Breakfast included</li>
        <li className="list__item">Free airport shuttle</li>
        <li className="list__item">Free wifi in all rooms</li>
        <li className="list__item">Air conditioning and heating</li>
        <li className="list__item">Pets allowed</li>
        <li className="list__item">We speak all languages</li>
        <li className="list__item">Perfect for families</li>
      </ul>
      <div className="recommend">
        <p className="recommend__count">
          Lucy and 3 other friends recommend this hotel
        </p>
        <div className="recommend__friends">
          {userImages.map(userImg => (
            <Image
              fluid={userImg.childImageSharp.fluid}
              className="recommend__photo"
              alt="friend"
              key={userImg.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HotelDescription
