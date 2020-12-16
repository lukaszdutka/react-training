import React from "react";
import './App.css';
import Components from './sections/01-components/Components.js'
import Weather from './sections/02-functional-and-class-components-and-state/Weather.js'
import UserInput from './sections/03-user-input/UserInput.js'
import MyYoutube from "./sections/04-test-mastery/MyYoutube.js";
import Hooks from "./sections/05-hooks/Hooks";
import MyYoutubeHooks from "./sections/06-test-mastery-hooks/MyYoutubeHooks";
import ReactReduxComponent from "./sections/07-redux/ReactReduxComponent";

const App = () => {
  return (
    <div>
      <ReactReduxComponent/>
      {/*<MyYoutubeHooks/>*/}
      {/*<Hooks/>*/}
      {/*<MyYoutube/>*/}
      {/*<UserInput/>*/}
      {/*<Weather/>*/}
      {/*<Components/>*/}
    </div>
  );
}

export default App;