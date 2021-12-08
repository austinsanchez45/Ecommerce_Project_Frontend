import axios from "axios";
import React,{Component} from 'react';
import reactDom from 'react-dom';
import NavBar from "./NavBar/NavBar"


class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <NavBar />
            )
        }
}
export default App;