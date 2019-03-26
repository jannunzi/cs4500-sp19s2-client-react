import React from 'react'
import QuoteService from '../services/QuoteService'

test('test find all', async () => {
    const quoteService = QuoteService.getInstance()
    const quotes = await quoteService.findAllQuotes()
    expect(quotes.length).toBe(5)
})

test('test find by id', async () => {
    const qs = QuoteService.getInstance()
    const q1 = {
        jobTitle: 'New Job',
        jobDescription: 'New Description',
        price: 123.23
    }
    const q2 = await qs.createQuote(q1)
    const q3 = await qs.findQuoteById(q2.id)
    expect(q3.jobTitle).toBe(q1.jobTitle)
    expect(q3.jobDescription).toBe(q1.jobDescription)
    expect(q3.price).toBe(q1.price)
    await qs.deleteQuote(q2.id)
})

test('test create', async () => {
    const qs = QuoteService.getInstance()
    const q1 = {
        jobTitle: 'New Job',
        jobDescription: 'New Description',
        price: 123.23
    }
    const q2 = await qs.createQuote(q1)
    expect(q1.jobTitle).toBe(q2.jobTitle)
    expect(q1.jobDescription).toBe(q2.jobDescription)
    expect(q1.price).toBe(q2.price)

    await qs.deleteQuote(q2.id)
})

test('test delete', async () => {
    const qs = QuoteService.getInstance()
    const q1 = {
        jobTitle: 'New Job',
        jobDescription: 'New Description',
        price: 123.23
    }
    const q2 = await qs.createQuote(q1)
    await qs.deleteQuote(q2.id)
})

test('test update', async () => {
    const qs = QuoteService.getInstance()
    const q1 = {
        jobTitle: 'New Job',
        jobDescription: 'New Description',
        price: 123.23
    }
    const q2 = await qs.createQuote(q1)

    q2.jobTitle = 'Updated Title'
    q2.jobDescription = 'Updated Description'
    q2.price = 234.34

    const q3 = await qs.updateQuote(q2)

    expect(q3.jobTitle).toBe(q2.jobTitle)
    expect(q3.jobDescription).toBe(q2.jobDescription)
    expect(q3.price).toBe(q2.price)

    await qs.deleteQuote(q2.id)
})
