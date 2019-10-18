import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        <House />
      </div>
    );
  }
}

export default Dashboard;
