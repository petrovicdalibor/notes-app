import React, { Component } from "react";
import SearchIcon from "../assets/images/search.svg";
import "../assets/styles/Header.scss";

export default class Main extends Component {
  render() {
    return (
      <div className="header">
        <div className="search">
          <div className="icon">
            <img src={SearchIcon} alt="Search Icon" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    );
  }
}
