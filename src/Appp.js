import React from "react";
import Home from "./tutorial/react-router/home";
import About from "./tutorial/react-router/about";
import Users from "./tutorial/react-router/users";
import Error404 from "./tutorial/react-router/error404";
import "./tutorial/react-router/Appp.css" 
//import User from "./tutorial/react-router/user";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

export default function Appp() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><NavLink to="/" exact activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} activeClassName="selected">Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                        <li><NavLink to="/users" activeClassName="selected">Users</NavLink></li>
                    </ul>
                </nav>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    {/*ya exact koymalıyız ya da home u en alta koymalıyız
                     react-dom v5 de, yoksa hata alıyoruz.*/}
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>    
                    <Route path="/users" component={Users}/>
                    <Route path="*" component={Error404}/>
                    {/* <Route path="/user/:id" component={User}>
                        <User />
                    </Route> */}
                </Switch>
            </div>
        </Router>
    );
}