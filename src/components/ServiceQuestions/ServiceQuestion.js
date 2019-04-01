import React from 'react'
import ServiceMultipleChoiceQuestion from './ServiceMultipleChoiceQuestion'
const ServiceQuestion = ({question}) =>
    <div className="col-6">
        {
            question.questionType === 'MULTIPLE-CHOICE' &&
            <ServiceMultipleChoiceQuestion
                question={question}/>
        }
    </div>

export default ServiceQuestion