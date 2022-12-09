import React from "react";
import Home from "./tutorial/react-router/home";
import About from "./tutorial/react-router/about";
import Users from "./tutorial/react-router/users";
import User from "./tutorial/react-router/user";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Appp() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/users">Users</Link></li>
                    </ul>
                </nav>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    {/*ya exact koymalıyız ya da home u en alta koymalıyız
                     react-dom v5 de, yoksa hata alıyoruz.*/}
                    <Route path="/" exact component={Home}>
                        <Home />
                    </Route>
                    <Route path="/about" component={About}>
                        <About />
                    </Route>
                    <Route path="/users" component={Users}>
                        <Users />
                    </Route>
                    <Route path="/user/:id" component={User}>
                        <User />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}