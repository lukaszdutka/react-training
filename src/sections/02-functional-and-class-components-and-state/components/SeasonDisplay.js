import './SeasonDisplay.css';
import Spinner from './Spinner.js';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake'
  }
}

class SeasonDisplay extends React.Component {

  // second also can be state initialization
  state = {
    testProp1: null,
    testProp2: null
  };

  render() {
    if (this.props.latitude && !this.props.errorMessage) {
      const season = getSeason(this.props.latitude, new Date().getMonth());
      const {text, iconName} = seasonConfig[season];
      return (
        <div className={`season-display-container ${season}`}>
          <i className={`icon-left massive ${iconName} icon`}/>
          <h1>{text}</h1>
          <i className={`icon-right massive ${iconName} icon`}/>
        </div>
      )
    }

    if (!this.props.latitude && this.props.errorMessage) {
      return (
        <div> Error: {this.props.errorMessage}</div>
      )
    }
    return (
      <Spinner>Please allow geolocation</Spinner>
    )
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
}

export default SeasonDisplay;