//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "../js/Component/Views/main.jsx";

//render your react applicatioH
ReactDOM.render(<Home />, document.querySelector("#app"));
