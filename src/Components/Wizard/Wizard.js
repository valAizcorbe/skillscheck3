import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.state = this.initialState;
  }

  getHouses = () => {
    axios.get("/api/houses").then(res => this.setState({ houses: res.data }));
  };

  addHouse = () => {
    const newHouse = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    };
    this.addNewHouse(newHouse);
    this.resetState();
  };

  addNewHouse = newHouse => {
    axios.post("/api/house", { newHouse }).then(res => {
      this.addHouse(res.data);
      this.setState({
        houses: res.data
      });
    });
  };

  handleChange = e => {
    let { name } = e.target;
    this.setState({
      [name]: e.target.value
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState(this.initialState);
  };

  render() {
    console.log(this.state);
    const { name, address, city, state, zip } = this.state;
    return (
      <div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <br />
        <label>Property Name</label>
        <input name="name" value={name} onChange={e => this.handleChange(e)} />
        <label>Address</label>
        <input
          name="address"
          value={address}
          onChange={e => this.handleChange(e)}
        />
        <label>City</label>
        <input name="city" value={city} onChange={e => this.handleChange(e)} />
        <label>State</label>
        <input
          name="state"
          value={state}
          onChange={e => this.handleChange(e)}
        />
        <label>Zip</label>
        <input name="zip" value={zip} onChange={e => this.handleChange(e)} />
        <br />
        <button
          onClick={() => {
            this.addHouse();
            this.props.history.push("/");
          }}
        >
          Complete
        </button>
      </div>
    );
  }
}

export default Wizard;
