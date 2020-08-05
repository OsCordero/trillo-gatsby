import React from "react"
import sprite from "../../assets/img/icons/sprite.svg"
import "./icon.scss"
const Icon = ({ name, customClass, badge }) => {
  return (
    <div className="icon-wrapper">
      <svg className={`icon ${customClass}`}>
        <use xlinkHref={`${sprite}#${name}`}></use>
      </svg>
      {badge && <span className="notification">{badge}</span>}
    </div>
  )
}

export default Icon
