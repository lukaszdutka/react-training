import React from "react";
import "./Weather.css";
import Header from "../components/Header";
import SeasonDisplay from "./components/SeasonDisplay";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    //the only time when we do direct assignment to 'this.state' is constructor first initialization
    this.state = {lat: null, errorMessage: ''};
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMessage: err.message})
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component updated")
  }

  componentWillUnmount() {
    console.log("Component unmounted")
  }

  render() {
    return (
      <div className={"weather"}>
        <Header name={"Weather"}/>
        <SeasonDisplay latitude={this.state.lat} errorMessage={this.state.errorMessage}/>
      </div>
    );
  }
}

export default Weather;