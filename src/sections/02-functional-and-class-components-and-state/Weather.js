import React from "react";
import Header from "../common-components/Header";
import SeasonDisplay from "./components/SeasonDisplay";
import Wrapper from "../common-components/Wrapper";

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
      <Wrapper>
        <Header name={"Weather"}/>
        <SeasonDisplay latitude={this.state.lat} errorMessage={this.state.errorMessage}/>
      </Wrapper>
    );
  }
}

export default Weather;