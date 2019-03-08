import React from 'react'
import QuoteListContainer from './QuoteListContainer'
import Quotes from '../components/Quotes'
import TestRenderer from 'react-test-renderer';
import QuoteService from '../services/QuoteService'
const quoteService = QuoteService.getInstance()
import '../services/QuoteService.mock'

test('[QuoteListContainer renders correctly]', () => {
    const testRenderer = TestRenderer.create(
        <QuoteListContainer
            service={quoteService}/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance   = testRenderer.root
    let   jobTitleFld    = testInstance.findByProps({className: 'job-title-fld'})

    jobTitleFld.props.onChange({target: {value: 'J123'}})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})
