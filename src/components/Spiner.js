import React, { Component } from "react";

import loader from "./loader.gif";

export class Spiner extends Component {
  render() {
    return (
      <div className="text-center ">
        <img src={loader} alt="loading" height={"100vw"} />
      </div>
    );
  }
}

export default Spiner;
