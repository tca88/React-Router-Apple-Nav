import React, { Component } from "react";
import "./Nav.css";
import { Route, Link, NavLink } from "react-router-dom";

function Subnav(props) {
  const item = props.navList.find(
    item => `${item.path}` === props.match.params.path
  );
  if (!item) return <h3>Loading data...</h3>;
  return (
    <div>
      <nav className={`sub-nav${item.name === "TV" ? " tv" : ""}`}>
        {item.subLinks.map((sublink, index) => (
          <div key={index}>
            <img
              className="subnav-image"
              src={sublink.img}
              alt={sublink.name}
            />
            <div className="subnav-name">{sublink.name}</div>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Subnav;
