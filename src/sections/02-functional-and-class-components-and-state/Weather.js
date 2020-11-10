import React from "react";
import "./Weather.css";
import Header from "../components/Header";
import SeasonDisplay from "./components/SeasonDisplay";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    //the only time when we do direct assignment to 'this.state' is constructor first initialization
    this.state = {lat: null, errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMessage: err.message})
    );
  }

  render() {
    return (
      <div className={"weather"}>
        <Header name={"Weather"}/>
        <div>something</div>
        <SeasonDisplay latitude={this.state.lat} errorMessage={this.state.errorMessage}/>
      </div>
    );
  }
}

export default Weather;