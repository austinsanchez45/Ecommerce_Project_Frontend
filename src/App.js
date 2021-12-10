import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import jwt_decode from 'jwt-decode';
import NavBar from "./Components/NavBar/NavBar";
import LogIn from "./Components/LogIn/LogIn";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
    //Function to get local login if needed
    const [user, setUser] = useState(null);
    const jwt = localStorage.getItem('token');
    useEffect(() => {
        try{
            const localUser = jwtDecode(jwt);
            setUser(localUser);
        }
        catch{}
    }, [])

    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/" exact component={LandingPage}>
                <Route path="/login" render={props => <LogIn {...props} someInfo="Some Info"/>} />
                <Redirect to="/not-found"/>
            </Switch>
        </div>
    )
}