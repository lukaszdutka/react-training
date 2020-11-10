import React from "react";
import "./Weather.css";
import Header from "../components/Header";
import SeasonDisplay from "./components/SeasonDisplay";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat: null}; //the only time when we do direct assignment to 'this.state' is constructor first initialization

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => console.log(err)
    );
  }

  render() {
    return (
      <div className={"weather"}>
        <Header name={"Weather"}/>
        <div>something</div>
        <SeasonDisplay latitude={this.state.lat}/>
      </div>
    );
  }
}

export default Weather;