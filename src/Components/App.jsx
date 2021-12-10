import axios from "axios";
import React,{Component} from 'react';
import reactDom from 'react-dom';
import NavBar from "./NavBar/NavBar"
import "./App.css"
import LogIn from "./LogIn/LogIn"


class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrappingParent">
                <NavBar />
            </div>
            )
        }
}
export default App;