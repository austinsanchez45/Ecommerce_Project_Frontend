import React from "react";
import reactDom from "react-dom";
import App from "./Components/App"
import { BrowserRouter as Router } from "react-router-dom";

const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

reactDom.render(
<Router>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</Router>,
document.getElementById('root')
);