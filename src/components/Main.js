import React, { Component } from "react";
import "../assets/styles/Main.scss";

import Note from "./Note";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <h2>Notes</h2>
        </div>
        <div className="notes">
          <Note
            background="#ffcf7d"
            text="The beginning of screenless design: UI jobs to be taken over by Solution Architect"
            date="May 21, 2020"
          />
          <Note
            background="#b095f6"
            text="13 Things You Should Give Up If You Want To Be a Successful UX Designer"
            date="May 25, 2020"
          />
        </div>
      </div>
    );
  }
}
