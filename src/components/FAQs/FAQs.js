import React from 'react'

const FAQs = () =>
    <div className="container">
        <h1>FAQs</h1>
        <br/>
        <div>
            <div className="row">
                <div className="col-12">
                    <h4>Do you travel to your customers?</h4>
                    <label><input type="checkbox"/> I travel to my customers</label>
                    <br/>
                    <label><input type="checkbox"/> My customers travel to me</label>
                    <br/>
                    <label><input type="checkbox"/> I work remotely (phone or internet)</label>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label>What should the customer know about your pricing (e.g., discounts, fees)?</label>
                    <textarea className="form-control"/>
                </div>
                <div className="col-12">
                    <label>What is your typical process for working with a new customer?</label>
                    <textarea className="form-control"/>
                </div>
                <div className="col-12">
                    <label>What education and/or training do you have that relates to your work?</label>
                    <textarea className="form-control"/>
                </div>
                <div className="col-12">
                    <label>How did you get started doing this type of work?</label>
                    <textarea className="form-control"/>
                </div>
                <div className="col-12">
                    <label>What types of customers have you worked with?</label>
                    <textarea className="form-control"/>
                </div>
                <div className="col-12">
                    <label>Describe a recent project you are fond of. How long did it take?</label>
                    <textarea className="form-control"/>
                </div>
                <div className="col-12">
                    <label>What advice would you give a customer looking to hire a provider in your area of work?</label>
                    <textarea className="form-control"/>
                </div>
                <div className="col-12">
                    <label>What questions should customers think through before talking to professionals about their project?</label>
                    <textarea className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <a className="btn btn-success btn-block">
                        Update Account
                    </a>
                </div>
            </div>
        </div>
    </div>

export default FAQs