import React from 'react';

class SeasonDisplay extends React.Component {

  // second also can be state initialization
  state = {
    testProp1: null,
    testProp2: null
  };

  render() {
    if (this.props.latitude && !this.props.errorMessage) {
      return (
        <div> Latitude: {this.props.latitude}</div>
      )
    }
    if (!this.props.latitude && this.props.errorMessage) {
      return (
        <div> Error: {this.props.errorMessage}</div>
      )
    }
    return (
      <div>Loading</div>
    )
  }
}

export default SeasonDisplay;