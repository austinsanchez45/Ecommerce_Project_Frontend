import axios from "axios";
import React,{Component} from 'react';
import reactDom from 'react-dom';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./Products/Products";
import NavBar from "./NavBar/NavBar";
import LogIn from "./LogIn/LogIn";
import LandingPage from "./LandingPage/LandingPage";
import jwtDecode from "jwt-decode";


class App extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt)
            this.setState({
                user
            });
        } catch {

        }
    }

    showProdcuts = async()=>{
        let response = await axios.get(`https://localhost:44394/api/products/`)
        console.log(response)
    }

    render(){
        return(
            <div className="App">
                <NavBar />
            </div>
            )
        }
}
export default App;