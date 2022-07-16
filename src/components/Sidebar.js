import React, { Component } from "react";
import "../assets/styles/sidebar.scss";
import plus from "../assets/images/plus.svg";

import { gsap } from "gsap";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addStatus: true,
    };
    this.addBtn = React.createRef();
    this.first = React.createRef();
    this.selectorsRef = React.createRef(null);
  }

  tl = gsap.timeline();

  animate = () => {
    console.log(this.state.addStatus);
    if (this.state.addStatus === true) {
      gsap.to(this.addBtn.current, {
        rotate: "0",
        translateY: -12,
        scale: 0.01,
        duration: 0.6,
        ease: "Power2.easeInOut",
      });
      gsap.to(this.addBtn.current, {
        rotate: "+=316",
        translateY: 0,
        scale: 1,
        duration: 0.6,
        ease: "Power2.easeInOut",
        delay: 0.2,
      });
      gsap.to(this.first.current, {
        delay: 0.4,
        translateY: 80,
        duration: 0.32,
        scaleY: 1.8,
      });
      gsap.to(this.first.current, {
        scaleY: 1,
        delay: 0.3,
      });

      const otherDivs = this.selectorsRef.current
        ? [...this.selectorsRef.current.querySelectorAll(":scope > .other")]
        : [];

      // let del = 1;

      otherDivs.forEach((element) => {
        const classes = element.getAttribute("class").match(/\S+/gi);

        // console.log(element.getAttribute("data-to"));

        gsap.to(
          `.note-selectors .${classes[1]}`,
          {
            scaleY: 1,
            translateY: element.getAttribute("data-to"),
            ease: "Power2.easeInOut",
            // delay: 0.4,
            stagger: 0.24,
            duration: 0.5,
            opacity: 1,
          },
          "-=.26"
        );
      });
    } else if (this.state.addStatus === false) {
      gsap.to(this.addBtn.current, {
        rotate: "-=316",
        duration: 0.6,
        ease: "Power2.easeInOut",
      });
      gsap.to(this.first.current, {
        translateY: 0,
        scaleY: 1.8,
        ease: "Power2.easeInOut",
      });
    }
    this.setState({ addStatus: !this.state.addStatus });
  };

  render() {
    return (
      <div className="nav">
        <div className="logo">
          <h4>Docket</h4>
        </div>
        <div className="notes-container">
          <div className="add-button">
            <button id="addNote" ref={this.addBtn} onClick={this.animate}>
              <img src={plus} alt="Plus Icon"></img>
            </button>
          </div>
          <div ref={this.selectorsRef} className="note-selectors">
            <div className="selector first" ref={this.first}></div>
            <div
              className="selector second other"
              data-from="100"
              data-to="140"
            ></div>
            <div
              className="selector third other"
              data-from="160"
              data-to="200"
            ></div>
            <div
              className="selector fourth other"
              data-from="220"
              data-to="260"
            ></div>
            <div
              className="selector fifth other"
              data-from="280"
              data-to="320"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
