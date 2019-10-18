import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      houses: [],
      input: ""
    };
    this.state = this.initialState;
  }

  componentDidMount = () => {
    axios.get("/api/houses").then(res => this.setState({ houses: res.data }));
  };

  deleteHouse = id => {
    axios
      .delete(`/api/house/${id}`)
      .then(res => {
        this.setState({
          houses: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        {this.state.houses.map((element, index) => {
          return (
            <House house={element} index={index} delete={this.deleteHouse} />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
