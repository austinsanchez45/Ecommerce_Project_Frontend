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
import NotFound from "./NotFound/NotFound";
import SignUp from "./SignUp/SignUp";
import LogOut from "./LogOut/LogOut";


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
        const user = this.state.user;
        return(
            <div className="App">
                <NavBar user={user}/>
                <div>
                    <Switch>
                        <Route path="/profile" render={props => {
                            if (!user){
                                return <Redirect to="/login" />;
                            }else{
                                return <ProfileScreen {...props} user={user} />
                            }
                        }}
                        />
                        <Route path="/signup" compononent={SignUp} />
                        <Route path="/login" component={LogIn} />
                        <Route path="/logout" component={LogOut} />
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/" exact component={LandingPage} />
                        <Redirect to="/not-found"/>
                    </Switch>
                </div>
            </div>
        );
    }
}
export default App;

