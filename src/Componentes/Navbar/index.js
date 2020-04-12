import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Navbar = () => {

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searhed");
  };

  const [search, setSearch] = useState(false);

  const openSearch = () => {
    setSearch(true);
  };


  const searchClass = search ? 'searchInput active' : 'searchInput';

  return (
    <div className="navbar">

      <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/post">Posts</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      </ul>

      <div className="search">

        <form onSubmit={submitSearch}>
          <input className={searchClass} type="text" placeholder="Search" />
          <div className="searchIcon">
            <FontAwesomeIcon
              onClick={openSearch}
              className="icon"
              icon={faSearch}
            />
          </div>
        </form>

      </div>
    </div>
  );
};
export default Navbar;
