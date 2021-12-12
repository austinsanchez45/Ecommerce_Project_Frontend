import axios from "axios";
import React,{Component} from 'react';
import reactDom from 'react-dom';
import NavBar from "./NavBar/NavBar"
import "./App.css"
import LogIn from "./LogIn/LogIn"
import Products from "./Products/Products";


class App extends Component {
    constructor(props){
        super(props);
    }

    showProdcuts = async()=>{
        let response = await axios.get(`https://localhost:44394/api/products/`)
        console.log(response)
    }

    render(){
        return(
            <div className="wrappingParent">
                <NavBar />
                <Products list={this.state.showProdcuts}/>
            </div>
            )
        }
}
export default App;