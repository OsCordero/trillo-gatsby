import React from "react"
import Icon from "../Icon/Icon"
import "./searchbar.scss"

const SearchBar = () => {
  return (
    <form action="#" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search hotels"
      />
      <button className="search__button">
        <Icon customClass="search__icon" name={"icon-magnifying-glass"} />
      </button>
    </form>
  )
}

export default SearchBar
