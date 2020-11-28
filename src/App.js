import React from "react";
import './App.css';
import Components from './sections/01-components/Components.js'
import Weather from './sections/02-functional-and-class-components-and-state/Weather.js'
import UserInput from './sections/03-user-input/UserInput.js'

const App = () => {
  return (
    <div>
      <Components/>
      <UserInput/>
      <UserInput/>
      {/* this is conflicting change */}


      wtf?
    </div>
  );
}

export default App;