import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Users from './Users'
import UserDetails from './UserDetails'
import Services from './Services'
import ServiceDetails from './ServiceDetails'
const Admin = () =>
<div>
    <h2>Admin</h2>
    <Router>
        <div className="row">
            <div className="col-2">
                <Link to="/admin/users">Users</Link>
                <br/>
                <Link to="/admin/users/1">User Details</Link>
                <br/>
                <Link to="/admin/services">Services</Link>
                <br/>
                <Link to="/admin/services/1">Service Details</Link>
            </div>
            <div className="col-10">
                <Route
                    path="/admin/users"
                    exact
                    component={Users}/>
                <Route
                    path="/admin/users/:id"
                    exact
                    component={UserDetails}/>
                <Route
                    path="/admin/services"
                    exact
                    component={Services}/>
                <Route
                    path="/admin/services/:id"
                    exact
                    component={ServiceDetails}/>
            </div>
        </div>
    </Router>
</div>

export default Admin
