import React from "react";
import './App.css';
import Components from './sections/01-components/Components.js'
import Weather from './sections/02-functional-and-class-components-and-state/Weather.js'

const App = () => {
  return (
    <div>
      <Components/>
      <Weather/>
    </div>
  );
}

export default App;