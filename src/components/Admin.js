import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Users from './Users'
import Services from './Services'
const Admin = () =>
<div>
    <h2>Admin</h2>
    <Router>
        <div>
            <Link to="/admin/users">Users</Link>
            <Link to="/admin/services">Services</Link>
            <Route
                path="/admin/users"
                exact
                component={Users}/>
            <Route
                path="/admin/services"
                exact
                component={Services}/>
        </div>
    </Router>
</div>

export default Admin
