import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from "./Components/App";
const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

reactDom.render(
<Router>
    <App />
</Router>,
document.getElementById('root')
);