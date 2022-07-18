import React, { Component } from "react";
import "../assets/styles/Note.scss";
import EditIcon from "../assets/images/edit.svg";

export default class Note extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note" style={{ backgroundColor: this.props.background }}>
        <textarea type="text" placeholder={this.props.text}></textarea>
        <div className="footer">
          <div className="date">
            <span>{this.props.date}</span>
          </div>
          <div className="edit">
            <button>
              <img src={EditIcon} alt="Edit Icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
