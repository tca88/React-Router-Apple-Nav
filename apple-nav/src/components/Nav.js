import React, { Component } from "react";
import "./Nav.css";
import { Route, Link, NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <nav className="main-nav">
        {props.navList.map((item, index) => (
          <NavLink
            to={`/${item.path}`}
            className="nav-item"
            activeClassName="nav-item-active"
            key={index}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
