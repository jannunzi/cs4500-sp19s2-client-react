import React from 'react'
import ServiceTabItem from './ServiceTabItem'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const ServiceTabNavigator = ({serviceCategories}) =>
    <Router>
        <div>
            <ul className="nav nav-tabs">
                {
                    serviceCategories.map(serviceCategory =>
                        <li key={serviceCategory.id} className="nav-item">
                            <Link to={serviceCategory.title} className="nav-link" href="#">
                                {serviceCategory.title}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <br/>
            <Route path="/Home" render={() =>
                <ServiceTabItem services={serviceCategories[0].services}/>}/>
            <Route path="/Pets" render={() =>
                <ServiceTabItem services={serviceCategories[1].services}/>}/>
        </div>
    </Router>

export default ServiceTabNavigator