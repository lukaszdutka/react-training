import React from 'react';

const Spinner = props => {
  return (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui text loader">{props.children}</div>
      </div>
    </div>
  );
};

export default Spinner;