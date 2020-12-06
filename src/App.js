import React from "react";
import './App.css';
import Components from './sections/01-components/Components.js'
import Weather from './sections/02-functional-and-class-components-and-state/Weather.js'
import UserInput from './sections/03-user-input/UserInput.js'
import MyYoutube from "./sections/04-test-mastery/MyYoutube.js";
import Hooks from "./sections/05-hooks/Hooks";

const App = () => {
  return (
    <div>
      <Hooks/>
      <MyYoutube/>
      <UserInput/>
      <Weather/>
      <Components/>
    </div>
  );
}

export default App;