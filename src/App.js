import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import jwt_decode from 'jwt-decode';
import NavBar from "./Components/NavBar/NavBar";

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
        <Router>
            <NavBar user = {user} />
        </Router>
    )
}