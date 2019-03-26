import React from 'react'
import Quotes from './Quotes'
import QuoteListContainer from '../containers/QuoteListContainer'
import TestRenderer from 'react-test-renderer';
import QuoteServiceTest from '../services/QuoteServiceTest'

test('', () => {

    const createQuoteCallback = quote => {
        console.log(quote)
        console.log('[333]')
        expect(quote.jobTitle).toBe('J123222')
    }

    const quoteService = new QuoteServiceTest(createQuoteCallback)

    const testRenderer = TestRenderer.create(<QuoteListContainer service={quoteService}/>)

    let tree = testRenderer.toJSON()

    const quoteList      = testRenderer.root
    let   jobTitleFld    = quoteList.findByProps({className: 'job-title-fld'})
    let   createQuoteBtn = quoteList.findByProps({className: 'create-quote-btn'})

    jobTitleFld.props.onChange({target: {value: 'J123'}})
    createQuoteBtn.props.onClick()
})