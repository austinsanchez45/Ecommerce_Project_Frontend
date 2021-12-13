import axios from "axios";
import React,{Component} from 'react';
import { Route, Routes} from "react-router-dom";
import Products from "./Products/Products";
import NavBar from "./NavBar/NavBar";
import LogIn from "./LogIn/LogIn";
import jwtDecode from "jwt-decode";
import NotFound from "./NotFound/NotFound";
import SignUp from "./SignUp/SignUp";
import LogOut from "./LogOut/LogOut";
import LandingPage from "./LandingPage/LandingPage"

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:''     
    }
}

    // componentDidMount(){
    //     const jwt = localStorage.getItem('token');
    //     try{
    //         const user = jwtDecode(jwt)
    //         this.setState({
    //             user
    //         });
    //     } catch {
    //         console.log('hi')
    //     }
    // }

    showProdcuts = async()=>{
        let response = await axios.get(`https://localhost:44394/api/products/`)
        console.log(response)
    }

    render(){
        const user = this.state.user;
        return(
            <div className="App">
                <NavBar user = {user} />
                <div>
                    <Routes>
                        <Route path="/" exact element={<LandingPage/>} />
                        <Route path="/login" element={<LogIn/>} />
                        <Route path="/logout" element={<LogOut/>} />
                        <Route path="/products" element={<Products/>} />
                        <Route path="/not-found" component={NotFound} />
                        <Route to="/not-found"/>
                    </Routes>
              </div>
            </div>
        );
    }
}
export default App;

