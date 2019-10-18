import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }
  render() {
    const { name, address, city, state, zip } = this.state;
    return (
      <div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <br />
        <label>Property Name</label>
        <input name="name" value={name} />
        <label>Address</label>
        <input name="address" value={address} />
        <label>City</label>
        <input name="city" value={city} />
        <label>State</label>
        <input name="state" value={state} />
        <label>Zip</label>
        <input name="zip" value={zip} />
        <br />
        <button>Complete</button>
      </div>
    );
  }
}

export default Wizard;
