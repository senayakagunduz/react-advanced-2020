import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import User from './user';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const { path, url } = useRouteMatch();
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .then((e) => console.log(e))
            .finally(setLoading(false))
    }, []);
    return (
        <div>
            <h2>Users</h2>
            <h3>{loading && <div>Loading...</div>}</h3>
            <ul>
                {//mapleyerek users listesini bastırdık.her userın üstüne tıklayınca id si görünüyor.
                    users.map((user) => (
                        <li key={user.id}>
                            <NavLink to={`${url}/${user.id}`} activeClassName="selected">{user.name}</NavLink>
                        </li>
                    ))
                }
                {/* <li><Link to="/user/1">User 1</Link></li>
                <li><Link to="/user/2">User 2</Link></li>
                <li><Link to="/user/3">User 3</Link></li>
                <li><Link to="/user/4">User 4</Link></li> */}

            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User}>
                </Route>
            </Switch>
        </div>
    )
}
export default Users