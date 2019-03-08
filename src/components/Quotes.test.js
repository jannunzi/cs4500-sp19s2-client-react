import React from 'react'
import Quotes from './Quotes'
import TestRenderer from 'react-test-renderer';
import quotes from '../data/quotes.json'
import QuoteService from '../services/QuoteService'
const quoteService = QuoteService.getInstance()
import '../services/QuoteService.mock'

test('create and delete quotes', (done) => {
    const createQuote = () => {
        quotes.push({id: quotes.length+1, jobTitle:"J123-" + quotes.length+1})

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot()

        done()
    }

    const deleteQuote = quoteId => {
        quotes.splice(0, 1)

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot()

        done()
    }

    const testRenderer = TestRenderer.create(
        <Quotes
            quote={quotes[0]}
            quotes={quotes}
            createQuote={createQuote}
            deleteQuote={deleteQuote}
        />)
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const createQuoteBtn = testInstance.findByProps({className: 'create-quote-btn'})
    createQuoteBtn.props.onClick()
    createQuoteBtn.props.onClick()

    const deleteQuoteBtns = testInstance.findAllByProps({className: 'delete-quote-btn'})
    deleteQuoteBtns[1].props.onClick()
})

test('quote list renders correctly', () => {
    const testRenderer = TestRenderer.create(
        <Quotes
            quote={quotes[0]}
            quotes={quotes}/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const jobTitleFld    = testInstance.findByProps({className: 'job-title-fld'})
    const createQuoteBtn = testInstance.findAllByProps({className: 'create-quote-btn'})
    const updateQuoteBtn = testInstance.findAllByProps({className: 'update-quote-btn'})
    const quoteRows = testInstance.findAllByProps({className: 'quote-row'})
    const jobTitles = testInstance.findAllByProps({className: 'job-title'})
    const deleteQuoteBtns = testInstance.findAllByProps({className: 'delete-quote-btn'})
    const selectQuoteBtns = testInstance.findAllByProps({className: 'select-quote-btn'})

    expect(jobTitleFld.props.value).toBe('J2')
    expect(createQuoteBtn.length).toBe(1)
    expect(updateQuoteBtn.length).toBe(1)
    expect(quoteRows.length).toBe(3)
    expect(jobTitles.length).toBe(3)
    expect(deleteQuoteBtns.length).toBe(3)
    expect(selectQuoteBtns.length).toBe(3)

})

test('render all quotes from services', () => {
    quoteService
        .findAllQuotes()
        .then(quotes => {
            const testRenderer = TestRenderer.create(
                <Quotes
                    quote={quotes[0]}
                    quotes={quotes}/>)
            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()

            const testInstance = testRenderer.root

            const jobTitleFld    = testInstance.findByProps({className: 'job-title-fld'})
            const createQuoteBtn = testInstance.findAllByProps({className: 'create-quote-btn'})
            const updateQuoteBtn = testInstance.findAllByProps({className: 'update-quote-btn'})
            const quoteRows = testInstance.findAllByProps({className: 'quote-row'})
            const jobTitles = testInstance.findAllByProps({className: 'job-title'})
            const deleteQuoteBtns = testInstance.findAllByProps({className: 'delete-quote-btn'})
            const selectQuoteBtns = testInstance.findAllByProps({className: 'select-quote-btn'})

            expect(jobTitleFld.props.value).toBe('J2')
            expect(createQuoteBtn.length).toBe(1)
            expect(updateQuoteBtn.length).toBe(1)
            expect(quoteRows.length).toBe(3)
            expect(jobTitles.length).toBe(3)
            expect(deleteQuoteBtns.length).toBe(3)
            expect(selectQuoteBtns.length).toBe(3)

        })
})

