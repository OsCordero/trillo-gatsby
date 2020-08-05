import React from "react"
import { Link } from "gatsby"
import Icon from "../Icon/Icon"
import items from "../../lang/sidebarItems"
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        {items.map(item => (
          <li className="side-nav__item" key={item.name}>
            <Link
              to={item.url}
              className="side-nav__link"
              activeClassName="side-nav__link--active"
            >
              <Icon name={item.icon} customClass="side-nav__icon" />
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="legal">
        &copy; 2020 by Oscar Cordero. All rights reserved.
      </div>
    </nav>
  )
}

export default Sidebar
