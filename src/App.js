import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div className="main">
      <p>React is rendered</p>
      <p className="some-nested-thing">Nested paragraph</p>
      <p><span className="icon iconDashboard big-icon"></span>Span with icon</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
