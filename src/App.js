import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div className="main">
      <p>React is renderededdd</p>
      <p className="some-nested-thing">Nested paragraph</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
