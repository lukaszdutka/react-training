import React from "react";
import "./Weather.css";
import Header from "../components/Header";
import SeasonDisplay from "./components/SeasonDisplay";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
  }
  render() {
    return (
      <div className={"weather"}>
        <Header name={"Weather"}/>
        <div>something</div>
        <SeasonDisplay/>
      </div>
    );
  }
}

export default Weather;