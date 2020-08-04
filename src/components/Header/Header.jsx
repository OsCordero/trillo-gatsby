import React from "react"
import "./header.scss"
import logo from "../../assets/img/logo.png"
import user from "../../assets/img/user.jpg"
import Icon from "../Icon/Icon"
import SearchBar from "../SearchBar/SearchBar"
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Trillo logo" className="logo" />
      <SearchBar />
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <Icon customClass="user-nav__icon" name={"icon-bookmark"} badge={7} />
        </div>
        <div className="user-nav__icon-box">
          <Icon customClass="user-nav__icon" name={"icon-chat"} badge={7} />
        </div>
        <div className="user-nav__user">
          <img
            src={user}
            alt="Current user"
            className="user-nav__user-photo"
          ></img>
          />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </nav>
    </header>
  )
}

export default Header
