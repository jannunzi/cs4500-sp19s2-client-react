import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Users from './Users'
import UserDetails from './UserDetails'
import Services from './Services'
import ServiceDetails from './ServiceDetails'
import ServiceCategories from './ServiceCategories'
import ServiceCategoryDetails from './ServiceCategoryDetails'
const Admin = () =>
<div>
    <h2>Admin</h2>
    <Router>
        <div className="row">
            <div className="col-3">
                <Link to="/admin/users">Users</Link>
                <br/>
                <Link to="/admin/users/1">User Details</Link>
                <br/>
                <Link to="/admin/services">Services</Link>
                <br/>
                <Link to="/admin/services/1">Service Details</Link>
                <br/>
                <Link to="/admin/service-categories">Service Categories</Link>
                <br/>
                <Link to="/admin/service-categories/1">Service Category Details</Link>
            </div>
            <div className="col-9">
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
                <Route
                    path="/admin/service-categories"
                    exact
                    component={ServiceCategories}/>
                <Route
                    path="/admin/service-categories/:id"
                    exact
                    component={ServiceCategoryDetails}/>
            </div>
        </div>
    </Router>
</div>

export default Admin
