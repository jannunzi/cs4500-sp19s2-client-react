import React from 'react'

const ServiceMultipleChoiceQuestion = ({question}) =>
    <div>
        <h5>{question.question}</h5>
        {
            question.choices.map((choice, index) =>
                <div key={index}>
                    <label>
                        <input name={question.question} type="checkbox"/>
                        &nbsp;
                        {choice.title}
                    </label>
                </div>
            )
        }
        <br/>
    </div>

export default ServiceMultipleChoiceQuestion