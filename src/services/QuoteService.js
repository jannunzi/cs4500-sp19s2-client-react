export default class QuoteService {
    static instance = null;
    static getInstance() {
        if(QuoteService.instance === null) {
            QuoteService.instance = new QuoteService()
        }
        return this.instance
    }
    findQuoteById = quoteId =>
        fetch(`http://localhost:8080/api/quotes/${quoteId}`)
            .then(response => response.json())
    findAllQuotes = () =>
        fetch("http://localhost:8080/api/quotes")
            .then(response => response.json())
    createQuote = quote => {
        delete quote.id;
        return fetch(`http://localhost:8080/api/quotes`, {
            method: 'post',
            body: JSON.stringify(quote),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }
    updateQuote = quote =>
        fetch(`http://localhost:8080/api/quotes/${quote.id}`, {
            method: 'put',
            body: JSON.stringify(quote),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    deleteQuote = id =>
        fetch(`http://localhost:8080/api/quotes/${id}`, {
            method: 'delete'
        })

}
