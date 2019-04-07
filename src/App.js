import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import ServiceNavigator from './components/ServiceNavigator/ServiceNavigator'
import ServiceProviderNavigator from './components/ServiceProviderNavigator/ServiceProviderNavigator'
import Provider from './components/Provider/Provider'
import SearchBar from './components/SearchBar/SearchBar'
import serviceCategories from './data/service-categories.mock.json'
import ServiceCategoryService from './services/ServiceCategoryService'
import ProviderContainer from './components/Provider/ProviderContainer'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import Business from './components/Business/Business'
import ServiceQuestions from './components/ServiceQuestions/ServiceQuestions'
import Login from './components/Login/Login'
import UMLClassDiagram from './components/UMLClassDiagram/UMLClassDiagram'

class App extends Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            pillServiceCategories: serviceCategories,
            tabServiceCategories: serviceCategories,
            allServices: serviceCategories
        }
    }
    componentDidMount() {
        // this.serviceCategoryService.findAllServiceCategories(4)
        //     .then(serviceCategories => this.setState({
        //         pillServiceCategories: serviceCategories
        //     }))
        // this.serviceCategoryService.findAllServiceCategories(6)
        //     .then(serviceCategories => this.setState({
        //         tabServiceCategories: serviceCategories
        //     }))
        // this.serviceCategoryService.findAllServiceCategories()
        //     .then(serviceCategories => this.setState({
        //         allServices: serviceCategories
        //     }))
    }
  render() {
    return (
      <div className="container">
          <Router>
              <div>
                  <Link to="/uml">UML</Link> |
                  <Link to="/home">Home</Link> |
                  <Link to="/services"> Services</Link> |
                  <Link to="/providers"> Providers</Link> |
                  <Link to="/admin"> Admin</Link> |
                  <Link to="/provider/2"> Provider</Link> |
                  <Link to="/register"> Register</Link> |
                  <Link to="/login"> Login</Link> |
                  <Link to="/profile"> Profile</Link> |
                  <Link to="/business"> Business</Link> |
                  <Link to="/service-questions"> Service Questions</Link>
                  <br/>
                  <br/>
                  <br/>

                  <Route
                      path="/uml"
                      exact
                      render={() => <UMLClassDiagram/>}
                  />

                  <Route
                      path="/login"
                      exact
                      render={() => <Login/>}
                  />

                  <Route
                      path="/service-questions"
                      exact
                      render={() => <ServiceQuestions/>}
                  />

                  <Route
                      path="/profile"
                      exact
                      render={() => <Profile/>}
                  />

                  <Route
                      path="/register"
                      exact
                      render={() => <Register/>}
                  />

                  <Route
                      path="/business"
                      exact
                      render={() => <Business/>}
                  />

                  <Route
                      path="/provider/:id"
                      exact
                      render={() => <ProviderContainer/>}
                  />
                  <Route
                      path="/home"
                      exact
                      render={() =>
                          <Home
                            tabServiceCategories={this.state.tabServiceCategories}
                            pillServiceCategories={this.state.pillServiceCategories}/>}/>
                  <Route
                      path="/services"
                      exact
                      render={() =>
                          <ServiceNavigator serviceCategories={this.state.allServices}/>}/>
                  <Route
                      path="/admin"
                      exact
                      component={Admin}/>
                  <Route
                      path="/providers"
                      exact
                      component={ServiceProviderNavigator}/>
              </div>
          </Router>
        {/*<h1>ServicesRus</h1>*/}
      </div>
    );
  }
}

export default App;
