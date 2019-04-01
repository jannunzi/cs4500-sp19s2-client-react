import React from 'react'
import serviceCategories from '../../data/service-categories.mock.json'
import ServiceQuestion from './ServiceQuestion'

const ServiceQuestions = () =>
    <div className="container">
        <h1>Business Services</h1>
        <br/>
        <div>
            <div className="row">
                <div className="col-12">
                    <h4>Search for services</h4>
                    <input
                        value="Home"
                        placeholder="Home, wedding, pet"
                        className="form-control"/>
                    <ul className="list-group">
                        <li className="list-group-item">
                            Appliance Installation
                            <i className="fa fa-check float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Cabinetry
                            <i className="fa fa-check float-right"></i>
                        </li>
                        <li className="list-group-item active">
                            Door Installation
                            <i className="fa fa-check float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Concrete Removal
                            <i className="fa fa-check float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Dishwasher Installation
                            <i className="fa fa-check float-right"></i>
                        </li>
                    </ul>
                    <br/>
                    <h4>Selected services</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            Wedding
                            <i className="fa fa-times float-right"></i>
                        </li>
                        <li className="list-group-item active">
                            Web development
                            <i className="fa fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Math tutoring
                            <i className="fa fa-times float-right"></i>
                        </li>
                    </ul>
                    <br/>
                </div>
            </div>
            <h4>Service questions</h4>
            <div className="row">
                {
                    serviceCategories[0].questions.map(question =>
                        <ServiceQuestion
                            key={question.id}
                            question={question}/>
                    )
                }
            </div>
            <div className="row">
                <div className="col-12">
                    <a className="btn btn-success btn-block">
                        Save
                    </a>
                </div>
            </div>
            <br/>
        </div>
    </div>

export default ServiceQuestions